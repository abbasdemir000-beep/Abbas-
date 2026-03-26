/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";
import { 
  Search, 
  BookOpen, 
  Activity, 
  ShieldAlert, 
  Stethoscope, 
  ChevronRight, 
  Info, 
  AlertCircle, 
  CheckCircle2,
  Menu,
  X,
  Filter,
  ArrowRight,
  ClipboardList,
  Microscope,
  Syringe,
  Sparkles,
  BrainCircuit,
  GraduationCap,
  RotateCcw,
  Send
} from 'lucide-react';
import { topics, Topic, Section } from './data/topics';

export default function App() {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(topics[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isStudyMode, setIsStudyMode] = useState(false);
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [revealedObjectives, setRevealedObjectives] = useState<number[]>([]);

  const filteredTopics = useMemo(() => {
    return topics.filter(topic => {
      const matchesSearch = topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          topic.sections.some(s => 
                            typeof s.content === 'string' 
                              ? s.content.toLowerCase().includes(searchQuery.toLowerCase())
                              : Array.isArray(s.content) 
                                ? s.content.some(c => typeof c === 'string' && c.toLowerCase().includes(searchQuery.toLowerCase()))
                                : false
                          );
      const matchesCategory = !selectedCategory || topic.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const selectedTopic = useMemo(() => 
    topics.find(t => t.id === selectedTopicId) || topics[0]
  , [selectedTopicId]);

  const categories = ['Malignancies', 'Infections', 'Functional & Other'];

  const handleAskAI = async (prompt?: string) => {
    setIsAiLoading(true);
    setAiResponse(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const finalPrompt = prompt || `Explain the following gynaecology topic in simple terms for a medical student: ${selectedTopic.title}. Focus on: ${selectedTopic.learningObjectives.join(', ')}`;
      
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: finalPrompt,
      });
      
      setAiResponse(response.text || 'No response from AI.');
    } catch (error) {
      console.error('AI Error:', error);
      setAiResponse('Error connecting to AI tutor. Please try again later.');
    } finally {
      setIsAiLoading(false);
    }
  };

  const toggleObjective = (index: number) => {
    if (revealedObjectives.includes(index)) {
      setRevealedObjectives(revealedObjectives.filter(i => i !== index));
    } else {
      setRevealedObjectives([...revealedObjectives, index]);
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? 320 : 0, opacity: isSidebarOpen ? 1 : 0 }}
        className="bg-white border-r border-slate-200 flex flex-col h-full relative z-20"
      >
        <div className="p-6 border-b border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-200">
              <Stethoscope size={24} />
            </div>
            <div>
              <h1 className="font-bold text-slate-900 leading-tight">GynaeHub</h1>
              <p className="text-xs text-slate-500 font-medium">Reference & Learning</p>
            </div>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text"
              placeholder="Search conditions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-brand-500 transition-all"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          <div>
            <div className="flex items-center justify-between px-2 mb-3">
              <span className="col-header">Categories</span>
              <Filter size={14} className="text-slate-400" />
            </div>
            <div className="flex flex-wrap gap-2 px-2">
              <button 
                onClick={() => setSelectedCategory(null)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${!selectedCategory ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                All
              </button>
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${selectedCategory === cat ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1">
            <span className="col-header px-2 mb-3 block">Topics</span>
            {filteredTopics.map(topic => (
              <button
                key={topic.id}
                onClick={() => setSelectedTopicId(topic.id)}
                className={`w-full text-left px-3 py-3 rounded-xl transition-all flex items-center justify-between group ${selectedTopicId === topic.id ? 'bg-brand-50 text-brand-700' : 'hover:bg-slate-50 text-slate-600'}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${topic.category === 'Malignancies' ? 'bg-red-400' : topic.category === 'Infections' ? 'bg-amber-400' : 'bg-blue-400'}`} />
                  <span className="text-sm font-medium">{topic.title}</span>
                </div>
                <ChevronRight size={16} className={`transition-transform ${selectedTopicId === topic.id ? 'translate-x-1' : 'opacity-0 group-hover:opacity-100'}`} />
              </button>
            ))}
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative">
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors"
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span>{selectedTopic.category}</span>
              <ChevronRight size={14} />
              <span className="font-semibold text-slate-900">{selectedTopic.title}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsStudyMode(!isStudyMode)}
              className={`px-4 py-2 rounded-lg text-sm font-medium shadow-md transition-all flex items-center gap-2 ${
                isStudyMode ? 'bg-slate-800 text-white shadow-slate-200' : 'bg-brand-600 text-white shadow-brand-200 hover:bg-brand-700'
              }`}
            >
              {isStudyMode ? <RotateCcw size={16} /> : <BookOpen size={16} />}
              {isStudyMode ? 'Exit Study Mode' : 'Study Mode'}
            </button>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-8 py-12">
          <AnimatePresence mode="wait">
            {isStudyMode ? (
              <motion.div
                key="study-mode"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-12"
              >
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold text-slate-900 font-serif">Self-Assessment</h2>
                  <p className="text-slate-500">Test your knowledge on {selectedTopic.title}. Click to reveal the objectives.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedTopic.learningObjectives.map((obj, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggleObjective(idx)}
                      className="cursor-pointer bg-white rounded-3xl p-8 border-2 border-dashed border-slate-200 hover:border-brand-300 transition-all relative overflow-hidden group min-h-[200px] flex items-center justify-center text-center"
                    >
                      <AnimatePresence mode="wait">
                        {revealedObjectives.includes(idx) ? (
                          <motion.div
                            key="revealed"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="space-y-4"
                          >
                            <span className="text-xs font-bold text-brand-600 uppercase tracking-widest">Objective {idx + 1}</span>
                            <p className="text-lg font-medium text-slate-800">{obj}</p>
                            <div className="flex justify-center">
                              <CheckCircle2 className="text-brand-500" size={24} />
                            </div>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-col items-center gap-4"
                          >
                            <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400">
                              <GraduationCap size={24} />
                            </div>
                            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Click to reveal objective {idx + 1}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>

                {/* AI Tutor Section */}
                <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-12 opacity-10">
                    <BrainCircuit size={160} />
                  </div>
                  <div className="relative z-10 max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-500/20 text-brand-300 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                      <Sparkles size={14} />
                      AI Learning Assistant
                    </div>
                    <h3 className="text-3xl font-bold mb-4 font-serif">Need a deeper explanation?</h3>
                    <p className="text-slate-400 mb-8 text-lg">
                      Our AI tutor can explain complex concepts, provide mnemonics, or quiz you on specific details of {selectedTopic.title}.
                    </p>
                    
                    <div className="flex flex-col gap-4">
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleAskAI()}
                          disabled={isAiLoading}
                          className="px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold transition-all flex items-center gap-2 disabled:opacity-50"
                        >
                          {isAiLoading ? <RotateCcw className="animate-spin" size={18} /> : <Sparkles size={18} />}
                          Summarize Topic
                        </button>
                        <button 
                          onClick={() => handleAskAI(`Give me 3 high-yield mnemonics for ${selectedTopic.title}`)}
                          disabled={isAiLoading}
                          className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-all flex items-center gap-2 disabled:opacity-50"
                        >
                          Get Mnemonics
                        </button>
                      </div>

                      {aiResponse && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-6 p-6 bg-slate-800/50 rounded-2xl border border-slate-700 backdrop-blur-sm"
                        >
                          <div className="flex items-center gap-2 mb-3 text-brand-400">
                            <BrainCircuit size={18} />
                            <span className="text-sm font-bold uppercase tracking-widest">AI Tutor Response</span>
                          </div>
                          <div className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap font-mono">
                            {aiResponse}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={selectedTopic.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-12"
              >
              {/* Hero Section */}
              <div className="space-y-4">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  selectedTopic.category === 'Malignancies' ? 'bg-red-100 text-red-700' : 
                  selectedTopic.category === 'Infections' ? 'bg-amber-100 text-amber-700' : 
                  'bg-blue-100 text-blue-700'
                }`}>
                  {selectedTopic.category}
                </div>
                <h2 className="text-5xl font-bold text-slate-900 tracking-tight font-serif">
                  {selectedTopic.title}
                </h2>
                <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
                  Comprehensive clinical reference for {selectedTopic.title.toLowerCase()}, covering risk factors, diagnosis, and management protocols.
                </p>
              </div>

              {/* Learning Objectives */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <ClipboardList size={120} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <CheckCircle2 className="text-brand-600" size={24} />
                  Learning Objectives
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedTopic.learningObjectives.map((obj, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center text-xs font-bold shrink-0">
                        {idx + 1}
                      </div>
                      <span className="text-sm text-slate-600 font-medium">{obj}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content Sections */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {selectedTopic.sections.map((section, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-3">
                      {getIconForSection(section.title)}
                      {section.title}
                    </h4>
                    
                    {typeof section.content === 'string' ? (
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {section.content}
                      </p>
                    ) : Array.isArray(section.content) ? (
                      <ul className="space-y-3">
                        {section.content.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 group">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-400 group-hover:scale-125 transition-transform shrink-0" />
                            <span className="text-sm text-slate-600 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="space-y-4">
                        {section.content.map((item, i) => (
                          <div key={i} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                            <span className="text-sm text-slate-500 font-medium">{item.label}</span>
                            <span className="text-sm text-slate-900 font-bold">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Footer Note */}
              <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl -mr-32 -mt-32" />
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold">Clinical Disclaimer</h4>
                    <p className="text-slate-400 text-sm max-w-xl">
                      This application is for educational purposes based on lecture notes by Prof. Dr. Ayla Khedher Ghalib. Always refer to the latest FIGO guidelines and clinical protocols for patient management.
                    </p>
                  </div>
                  <button className="px-6 py-3 bg-white text-slate-900 rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors flex items-center gap-2">
                    View Full Guidelines
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

function getIconForSection(title: string) {
  const t = title.toLowerCase();
  if (t.includes('risk')) return <AlertCircle className="text-amber-500" size={20} />;
  if (t.includes('presentation') || t.includes('symptom')) return <Activity className="text-blue-500" size={20} />;
  if (t.includes('diagnosis')) return <Microscope className="text-purple-500" size={20} />;
  if (t.includes('treatment') || t.includes('management')) return <Syringe className="text-emerald-500" size={20} />;
  if (t.includes('staging')) return <ClipboardList className="text-slate-500" size={20} />;
  return <Info className="text-brand-500" size={20} />;
}
