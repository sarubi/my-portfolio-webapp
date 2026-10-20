// Author names in this list are shown in bold
export const MY_NAMES = ['Sarubi Thillainathan', 'S. Thillainathan', 'Sarubi T.']

export type Publication = {
  authors: string[]
  year: string
  title: string
  url?: string
  venue: string
  // Text after the venue, e.g. pages or location
  details?: string
  badge?: string
  // Highlighted status note, e.g. work that is still ongoing
  status?: string
}

export const conferencePapers: Publication[] = [
  {
    authors: ['Sarubi Thillainathan', 'Ji-Ung Lee', 'Michael Sullivan', 'Alexander Koller'],
    year: '2026',
    title: 'AuthorMix: Modular Authorship Style Transfer via Layer-wise Adapter Mixing',
    url: 'https://arxiv.org/abs/2603.23069',
    venue: 'Proceedings of the 2026 Conference on Empirical Methods in Natural Language Processing (EMNLP 2026), Main Conference',
    details: 'Budapest, Hungary.',
    badge: 'Oral',
  },
  {
    authors: ['Tong Su', 'Xin Peng', 'Sarubi Thillainathan', 'David Guzmán', 'Surangika Ranathunga', 'En-Shiun Annie Lee'],
    year: '2024',
    title: 'Unlocking Parameter-Efficient Fine-Tuning for Low-Resource Language Translation',
    url: 'https://aclanthology.org/2024.findings-naacl.263/',
    venue: 'Findings of the Association for Computational Linguistics: NAACL 2024,',
    details: 'pages 4217–4225, Mexico City, Mexico.',
  },
  {
    authors: ['En-Shiun Annie Lee', 'Sarubi Thillainathan', 'Shravan Nayak', 'Surangika Ranathunga', 'David Ifeoluwa Adelani', 'Ruisi Su', 'Arya D. McCarthy'],
    year: '2022',
    title: 'Pre-Trained Multilingual Sequence-to-Sequence Models: A Hope for Low-Resource Language Translation?',
    url: 'https://aclanthology.org/2022.findings-acl.6/',
    venue: 'Findings of the Association for Computational Linguistics: ACL 2022,',
    details: 'pages 58–67, Dublin, Ireland. Association for Computational Linguistics.',
  },
  {
    authors: ['S. Thillainathan', 'S. Ranathunga', 'S. Jayasena'],
    year: '2021',
    title: 'Fine-Tuning Self-Supervised Multilingual Sequence-To-Sequence Models for Extremely Low-Resource NMT',
    url: 'https://ieeexplore.ieee.org/abstract/document/9525720',
    venue: '2021 Moratuwa Engineering Research Conference (MERCon),',
    details: 'Moratuwa, Sri Lanka, pp. 432-437, doi: 10.1109/MERCon52712.2021.9525720.',
    badge: 'Best Paper Award',
  },
  {
    authors: ['Sarubi T.', 'Lorensuhewa S.A.S.', 'Kalyani M.A.L.'],
    year: '2018',
    title: 'Use of Dynamic Text Prediction for Tamil Text Editing',
    venue: 'Proceedings of 5th Ruhuna International Science and Technology Conference (RISTCON 2018).',
  },
]

export const workshopPapers: Publication[] = [
  {
    authors: ['Sarubi Thillainathan', 'Margarita Ryzhova', 'Alexander Koller', 'Vera Demberg'],
    year: '2026',
    title: 'Disentangling Syntactic and Lexical Complexity in Text Adaptation: Effects on Readers with Different Working Memory Capacity and Vocabulary Size',
    url: 'https://www.uni-saarland.de/fileadmin/upload/fakultaet-p/amlap/Abstracts/submission_207.pdf',
    venue: 'Architectures and Mechanisms for Language Processing (AMLaP 2026),',
    details: 'Saarbrücken, Germany, September 2–4, 2026.',
    badge: 'Poster',
    status: 'Ongoing: full paper in preparation',
  },
  {
    authors: ['Sarubi Thillainathan', 'Alexander Koller'],
    year: '2025',
    title: 'Controllable Text Adaptation Using In-Context Learning with Linguistic Features',
    url: 'https://sfb1102.uni-saarland.de/sfbunisb/uploads/2025/03/Thillainathan2025Controllable.pdf',
    venue: 'AAAI 2025 Workshop on AI for Education.',
  },
  {
    authors: ['Shravan Nayak', 'Surangika Ranathunga', 'Sarubi Thillainathan', 'Rikki Hung', 'Anthony Rinaldi', 'Yining Wang', 'Jonah Mackey', 'Andrew Ho', 'En-Shiun Annie Lee'],
    year: '2023',
    title: 'Leveraging Auxiliary Domain Parallel Data in Intermediate Task Fine-tuning for Low-resource Translation',
    url: 'https://pml4dc.github.io/iclr2023/pdf/PML4DC_ICLR2023_7.pdf',
    venue: 'Practical Machine Learning for Developing Countries (PML4DC) workshop, ICLR 2023.',
  },
]
