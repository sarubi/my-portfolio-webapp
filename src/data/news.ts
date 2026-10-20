// Newest first. To add an item, put a new entry at the top of the list.
export type NewsItem = {
  date: string
  text: string
  link?: { label: string; url: string }
  // Text shown after the link
  suffix?: string
}

const news: NewsItem[] = [
  {
    date: 'Oct 2026',
    text: 'Presenting',
    link: { label: 'AuthorMix', url: 'https://arxiv.org/abs/2603.23069' },
    suffix: 'as an oral talk at EMNLP 2026 in Budapest (Session 11: Generation 2, 27 Oct, 11:00).',
  },
  {
    date: 'Sep 2026',
    text: 'Presented a poster on syntactic vs. lexical complexity in text adaptation at',
    link: { label: 'AMLaP 2026', url: 'https://www.uni-saarland.de/fileadmin/upload/fakultaet-p/amlap/Abstracts/submission_207.pdf' },
    suffix: 'in Saarbrücken. A full paper on this work is in progress.',
  },
  {
    date: 'Aug 2026',
    text: 'AuthorMix was accepted to the EMNLP 2026 main conference!',
  },
  {
    date: 'Mar 2026',
    text: 'New preprint on arXiv:',
    link: { label: 'AuthorMix: Modular Authorship Style Transfer via Layer-wise Adapter Mixing', url: 'https://arxiv.org/abs/2603.23069' },
    suffix: '.',
  },
  {
    date: 'Jan 2025',
    text: 'Our paper',
    link: { label: 'Controllable Text Adaptation Using In-Context Learning with Linguistic Features', url: 'https://sfb1102.uni-saarland.de/sfbunisb/uploads/2025/03/Thillainathan2025Controllable.pdf' },
    suffix: 'was accepted at the AAAI 2025 Workshop on AI for Education.',
  },
  {
    date: 'Jun 2024',
    text: 'Our paper',
    link: { label: 'Unlocking Parameter-Efficient Fine-Tuning for Low-Resource Language Translation', url: 'https://aclanthology.org/2024.findings-naacl.263/' },
    suffix: 'appeared in Findings of NAACL 2024.',
  },
  {
    date: '2023',
    text: 'Started my PhD in Computational Linguistics at Saarland University.',
  },
  {
    date: 'Feb 2022',
    text: 'Our paper',
    link: { label: 'Pre-Trained Multilingual Sequence-to-Sequence Models: A Hope for Low-Resource Language Translation?', url: 'https://aclanthology.org/2022.findings-acl.6/' },
    suffix: 'was accepted to Findings of ACL 2022.',
  },
  {
    date: 'Jul 2021',
    text: 'Our paper on fine-tuning multilingual seq-to-seq models for extremely low-resource NMT won the Best Paper Award at',
    link: { label: 'MERCon 2021', url: 'https://ieeexplore.ieee.org/abstract/document/9525720' },
    suffix: '.',
  },
]

export default news
