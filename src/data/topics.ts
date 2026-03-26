export interface Section {
  title: string;
  content: string | string[] | { label: string; value: string }[];
}

export interface Topic {
  id: string;
  title: string;
  category: 'Malignancies' | 'Infections' | 'Functional & Other';
  learningObjectives: string[];
  sections: Section[];
}

export const topics: Topic[] = [
  {
    id: 'endometrial-carcinoma',
    title: 'Endometrial Carcinoma',
    category: 'Malignancies',
    learningObjectives: [
      'Risk factors of endometrial carcinoma',
      'Clinical presentation',
      'Diagnosis',
      'Evaluation and staging',
      'Treatment according to staging'
    ],
    sections: [
      {
        title: 'Introduction',
        content: 'Tumour originating from the lining of the uterine cavity (endometrium). Most common gynecological malignancy worldwide and the fourth most common female cancer after breast, colon, and lung.'
      },
      {
        title: 'Risk Factors',
        content: [
          'Excess estrogen (exogenous or endogenous)',
          'Obesity (aromatization of androgen to estrogen)',
          'Diabetes mellitus and hypertension',
          'Tamoxifen use',
          'Anovulation / PCOS',
          'Early menarche and late menopause',
          'Genetic factors (HNPCC)',
          'Family history'
        ]
      },
      {
        title: 'Protective Factors',
        content: [
          'Hysterectomy',
          'Combined oral contraceptive pills',
          'Progestin-based contraceptives',
          'Intrauterine device (Cu-IUD and LNG-IUS)',
          'Pregnancy',
          'Smoking'
        ]
      },
      {
        title: 'Clinical Presentation',
        content: [
          'Abnormal uterine bleeding (Postmenopausal bleeding is classic)',
          'Pelvic pain (late symptom)',
          'Vaginal discharge (watery, purulent, or bloody)',
          'Cancer cachexia'
        ]
      },
      {
        title: 'Diagnosis',
        content: [
          'Transvaginal Ultrasound (Endometrial thickness > 4-5mm in PMB is suspicious)',
          'Endometrial sampling (Pipelle or D&C)',
          'Hysteroscopic sampling (best method)',
          'Pap smear (atypical endometrial cells)'
        ]
      },
      {
        title: 'FIGO Staging',
        content: [
          'Stage 1: Limited to endometrium and myometrium (1A <50%, 1B >50%)',
          'Stage 2: Cervical involvement',
          'Stage 3: Local/regional spread (3A serosa, 3B vagina/parametrium, 3C nodes)',
          'Stage 4: Bladder/bowel mucosa or distant metastases'
        ]
      }
    ]
  },
  {
    id: 'pid',
    title: 'Pelvic Inflammatory Disease (PID)',
    category: 'Infections',
    learningObjectives: [
      'Definition of PID',
      'Signs and symptoms',
      'Ultrasound findings',
      'Diagnosis',
      'Treatment'
    ],
    sections: [
      {
        title: 'Definition',
        content: 'Infection of the upper part of the female reproductive system (uterus, fallopian tubes, ovaries, and pelvis). Mostly polymicrobial (N. gonorrhoeae, C. trachomatis).'
      },
      {
        title: 'Risk Factors',
        content: [
          'Young age (Adolescents 10x more prone)',
          'Sexual activity',
          'Iatrogenic (IUCD insertion, pelvic surgery)',
          'Untreated male partners'
        ]
      },
      {
        title: 'Clinical Presentation',
        content: [
          'Lower abdominal pain',
          'Adnexal tenderness',
          'Bilateral cervical excitation tenderness',
          'Vaginal discharge',
          'Fever'
        ]
      },
      {
        title: 'Diagnosis',
        content: [
          'Endocervical/HVS swabs for culture',
          'TVS (free fluid, endometrial thickening, enlarged ovaries)',
          'Laparoscopy (Gold Standard - "violin-string" adhesions)',
          'Blood tests (ESR, CRP, WBC)'
        ]
      },
      {
        title: 'Treatment',
        content: [
          'Antibiotics (Cephalosporin + Metronidazole + Doxycycline)',
          'Partner treatment',
          'Hospitalization if: pregnancy, severe illness, TOA, or no response to oral meds'
        ]
      }
    ]
  },
  {
    id: 'gtd',
    title: 'Gestational Trophoblastic Disease (GTD)',
    category: 'Malignancies',
    learningObjectives: [
      'Types of H-mole',
      'Signs and symptoms',
      'Diagnosis and treatment',
      'Follow-up after treatment',
      'Choriocarcinoma'
    ],
    sections: [
      {
        title: 'Classification',
        content: [
          'Complete Hydatidiform Mole (No fetal tissue, 46XX/46XY paternal only)',
          'Partial Hydatidiform Mole (Fetal tissue present, Triploid 69XXX/69XXY)',
          'Invasive Mole',
          'Choriocarcinoma',
          'Placental Site Trophoblastic Tumour (PSTT)'
        ]
      },
      {
        title: 'Clinical Presentation',
        content: [
          'Vaginal bleeding',
          'Uterus large for dates (Complete mole)',
          'Hyperemesis gravidarum',
          'Preeclampsia (early onset)',
          'Theca lutein cysts'
        ]
      },
      {
        title: 'Diagnosis',
        content: [
          'Serum beta-hCG (very high)',
          'Ultrasound ("Snow storm" appearance)',
          'Histopathology'
        ]
      },
      {
        title: 'Treatment',
        content: [
          'Suction curettage (preferred)',
          'Hysterectomy (if family complete/older age)',
          'Anti-D for Rh-negative patients',
          'Chemotherapy for malignant GTN (Methotrexate, EMA/CO)'
        ]
      }
    ]
  },
  {
    id: 'ovarian-tumours',
    title: 'Ovarian Tumours',
    category: 'Malignancies',
    learningObjectives: [
      'Classification of benign and malignant tumours',
      'Clinical features',
      'Differential diagnoses',
      'Treatment and staging'
    ],
    sections: [
      {
        title: 'Classification',
        content: [
          'Epithelial (Serous, Mucinous, Endometrioid, Brenner)',
          'Germ Cell (Dermoid/Teratoma, Dysgerminoma, Yolk Sac)',
          'Sex Cord Stromal (Granulosa, Thecoma, Fibroma, Sertoli-Leydig)',
          'Metastatic (Krukenberg)'
        ]
      },
      {
        title: 'Clinical Features',
        content: [
          'Asymptomatic (found accidentally)',
          'Abdominal swelling/mass',
          'Pressure symptoms (bladder/bowel)',
          'Acute: Torsion, rupture, hemorrhage',
          'Hormonal: Hirsutism, precocious puberty'
        ]
      },
      {
        title: 'Diagnosis',
        content: [
          'Ultrasound / Doppler',
          'Tumor Markers: CA125 (Epithelial), AFP (Yolk sac), hCG (Dysgerminoma), LDH',
          'CT/MRI'
        ]
      }
    ]
  },
  {
    id: 'urinary-incontinence',
    title: 'Urinary Incontinence',
    category: 'Functional & Other',
    learningObjectives: [
      'Definition and types',
      'Approach to patients',
      'Medical and surgical treatments'
    ],
    sections: [
      {
        title: 'Types',
        content: [
          'Urodynamic Stress Incontinence (USI): Leakage with increased abdominal pressure',
          'Detrusor Over-activity (Urge): Involuntary contractions during filling',
          'Overflow: Retention leading to continuous leakage',
          'Fistula (Vesicovaginal, Ureterovaginal)',
          'Congenital'
        ]
      },
      {
        title: 'Investigations',
        content: [
          'Urinary diary',
          'Pad test',
          'Uroflowmetry',
          'Cystometry (Gold standard)',
          'Videocystourethrography'
        ]
      },
      {
        title: 'Treatment',
        content: [
          'Conservative: Pelvic floor exercises (Kegel), bladder retraining',
          'Medical: Anticholinergics (Oxybutynin, Tolterodine) for Urge',
          'Surgical: Colposuspension (Burch), TVT/TOT for Stress'
        ]
      }
    ]
  },
  {
    id: 'genital-tb',
    title: 'Genital Tuberculosis',
    category: 'Infections',
    learningObjectives: [
      'Definition and spread of Genital TB',
      'Common sites of infection',
      'Diagnosis and HSG findings',
      'Treatment and complications'
    ],
    sections: [
      {
        title: 'Introduction',
        content: 'Caused by Mycobacterium tuberculosis or M. bovis. Usually secondary to infection elsewhere (lungs, peritoneum, lymph glands). Spread is primarily hematogenous.'
      },
      {
        title: 'Common Sites',
        content: [
          'Fallopian tubes (Oviducts) - Primary and predominant site (90-100%)',
          'Endometrium (50-60%)',
          'Ovaries (20-30%)',
          'Cervix (5-15%)'
        ]
      },
      {
        title: 'Diagnosis',
        content: [
          'HSG: Main method for tubal involvement (Beaded tube, Golf club tube, Tobacco pouch appearance)',
          'Endometrial biopsy: Most reliable for confirmation (Histopathology and culture)',
          'Laparoscopy: Direct visualization and biopsy'
        ]
      },
      {
        title: 'Treatment',
        content: [
          'Multidrug anti-TB treatment (Rifampicin, Ethambutol, Pyrazinamide, Isoniazid)',
          'Long-term therapy required',
          'Surgery for advanced cases or persistent masses'
        ]
      }
    ]
  },
  {
    id: 'stds',
    title: 'Sexually Transmitted Diseases (STDs)',
    category: 'Infections',
    learningObjectives: [
      'Common causative organisms',
      'Clinical presentation of Chlamydia and Gonorrhea',
      'Syphilis stages and diagnosis',
      'Prevention strategies'
    ],
    sections: [
      {
        title: 'Chlamydia',
        content: [
          'Most common STD (Chlamydia trachomatis)',
          'Often asymptomatic',
          'Symptoms: Vaginal discharge, postcoital bleeding, dysuria',
          'Complications: PID, Fitz-Hugh-Curtis syndrome, infertility',
          'Treatment: Doxycycline (100mg BID 7 days) or Azithromycin (1g single dose)'
        ]
      },
      {
        title: 'Gonorrhea',
        content: [
          'Neisseria gonorrhoeae (Gram-negative diplococcus)',
          'Symptoms: Mucopurulent discharge, pelvic pain, dysuria',
          'Diagnosis: NAAT (preferred), Gram stain, Culture',
          'Treatment: Ceftriaxone (single dose) or Ciprofloxacin'
        ]
      },
      {
        title: 'Syphilis',
        content: [
          'Treponema pallidum',
          'Primary: Painless firm ulcer (chancre)',
          'Secondary: Maculopapular rash (palms/soles), lymphadenopathy',
          'Tertiary: Gummas, neurosyphilis, cardiovascular issues',
          'Diagnosis: VDRL/RPR (non-specific), TPHA/FTA-ABS (specific)',
          'Treatment: Penicillin (Gold standard)'
        ]
      }
    ]
  },
  {
    id: 'vaginal-discharge',
    title: 'Vaginal Discharge & Vaginitis',
    category: 'Infections',
    learningObjectives: [
      'Physiological vs Pathological discharge',
      'Candidiasis (Yeast infection)',
      'Trichomoniasis',
      'Bacterial Vaginosis (BV)'
    ],
    sections: [
      {
        title: 'Physiological Discharge',
        content: 'Normal acidic pH (3.5-4.5) maintained by Lactobacilli. Increases during ovulation (Spinnbarkeit - stretchy egg-white mucus) and pregnancy.'
      },
      {
        title: 'Candidiasis',
        content: [
          'Curdy white "cottage cheese" discharge',
          'Intense pruritus (itching) and burning',
          'Treatment: Imidazoles (Fluconazole 150mg single dose, Clotrimazole pessaries)'
        ]
      },
      {
        title: 'Trichomoniasis',
        content: [
          'Copious, yellowish-green, foul-smelling, frothy discharge',
          'Strawberry appearance of cervix',
          'Diagnosis: Wet prep (pear-shaped flagellated protozoa)',
          'Treatment: Metronidazole (Flagyl) for both partners'
        ]
      },
      {
        title: 'Bacterial Vaginosis',
        content: [
          'Thin, homogenous, grayish-white discharge',
          'Fishy odor (Positive Whiff test with KOH)',
          'Diagnosis: Clue cells on wet smear, pH > 4.5',
          'Treatment: Metronidazole or Clindamycin'
        ]
      }
    ]
  },
  {
    id: 'cin',
    title: 'Cervical Intraepithelial Neoplasia (CIN)',
    category: 'Malignancies',
    learningObjectives: [
      'Epidemiology and role of HPV',
      'Classification (CIN 1, 2, 3)',
      'Screening (Pap smear, LBC, HPV testing)',
      'Management and treatment'
    ],
    sections: [
      {
        title: 'Etiology',
        content: 'Caused by persistent high-risk HPV infection (Types 16, 18, 31, 33, 45). Smoking and immunosuppression are major risk factors.'
      },
      {
        title: 'Classification',
        content: [
          'CIN 1: Mild dysplasia (lower 1/3 of epithelium)',
          'CIN 2: Moderate dysplasia (lower 2/3)',
          'CIN 3: Severe dysplasia / Carcinoma in situ (full thickness)'
        ]
      },
      {
        title: 'Screening',
        content: [
          'Pap Smear / Liquid-based Cytology (LBC)',
          'HPV Testing (Primary screening in many regions)',
          'Colposcopy: Magnified examination using 5% Acetic acid (Acetowhiteness) and Iodine (Schiller\'s test)'
        ]
      },
      {
        title: 'Treatment',
        content: [
          'Excisional: LLETZ/LEEP (preferred), Cold knife cone biopsy',
          'Ablative: Cryocautery, Laser ablation, Cold coagulation',
          'Follow-up: "Test of cure" at 6 months (HPV + Cytology)'
        ]
      }
    ]
  },
  {
    id: 'vulval-conditions',
    title: 'Vulval Conditions & VIN',
    category: 'Malignancies',
    learningObjectives: [
      'Pruritus Vulvae causes',
      'Lichen Sclerosus',
      'Vulval Intraepithelial Neoplasia (VIN)',
      'Vulval Carcinoma'
    ],
    sections: [
      {
        title: 'Lichen Sclerosus',
        content: [
          'Thin, white, "parchment-like" skin',
          'Intense itching and burning',
          'Risk of progression to Squamous Cell Carcinoma (4%)',
          'Treatment: Ultra-potent topical steroids (Clobetasol)'
        ]
      },
      {
        title: 'VIN',
        content: [
          'Precancerous changes associated with HPV or chronic irritation',
          'Symptoms: Pruritus, raised rough lesions (white, red, or brown)',
          'Treatment: Local excision, Laser ablation, or Imiquimod (Aldara)'
        ]
      },
      {
        title: 'Vulval Carcinoma',
        content: [
          '95% are Squamous Cell Carcinoma',
          'Presentation: Vulval mass, ulcer, or persistent itching',
          'Spread: Primarily via inguinal and femoral lymph nodes',
          'Treatment: Wide local excision or Radical Vulvectomy'
        ]
      }
    ]
  }
];
