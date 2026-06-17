export const profile = {
  firstName: 'Shirisha',
  lastName: 'Muthyala',
  role: 'Senior Software Engineer',
  roles: [
    'Senior Software Engineer',
    'GCP Platform Lead',
    'Backend Engineer',
    'Data Pipeline Architect',
  ],
  summary:
    'Software Engineer with nearly 4 years of experience building scalable backend systems and cloud infrastructure, specialising in Golang, Python, and Google Cloud Platform. Promoted to Senior Software Engineer within a year at HYPR4, recognised as Employee of the Quarter for Q3 & Q4 2025–26.',
  location: 'Hyderabad, Telangana',
};

export const stats = [
  { value: 4, suffix: '', label: 'Years Experience' },
  { value: 800, suffix: '+', label: 'LeetCode Problems' },
  { value: 5, suffix: '', label: 'Team Members Led' },
  { value: 30, suffix: '%', label: 'Cost Reduction' },
];

export const navLinks = [
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
  { label: 'Resume', href: `${import.meta.env.BASE_URL}Shirisha_M.pdf`, external: true },
];

export const skillGroups = [
  {
    title: 'Languages',
    items: [
      { name: 'Golang', highlight: true },
      { name: 'Python', highlight: true },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'REST APIs' },
      { name: 'Microservices' },
      { name: 'WebSockets' },
      { name: 'FastAPI' },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'MongoDB' },
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'Redis' },
    ],
  },
  {
    title: 'Cloud & Infra',
    items: [
      { name: 'GCP', highlight: true },
      { name: 'Terraform' },
      { name: 'Docker' },
      { name: 'Cloud Run' },
      { name: 'Cloud Functions' },
      { name: 'CI/CD' },
      { name: 'GitHub Actions' },
    ],
  },
  {
    title: 'Data Engineering',
    items: [
      { name: 'Prefect' },
      { name: 'DBT Cloud' },
      { name: 'Airbyte' },
      { name: 'Fivetran' },
      { name: 'Pub/Sub' },
      { name: 'Pandas' },
      { name: 'Polars' },
      { name: 'PyArrow' },
      { name: 'BigQuery' },
      { name: 'Datalake' },
    ],
  },
  {
    title: 'GCP Specialisation',
    items: [
      { name: 'Analytics Hub' },
      { name: 'VPC Service Controls' },
      { name: 'Workforce Identity Federation' },
      { name: 'IAM' },
      { name: 'PAM' },
      { name: 'Looker' },
    ],
  },
  {
    title: 'AI & Governance',
    items: [
      { name: 'LLMs' },
      { name: 'Knowledge Graphs' },
      { name: 'Data Governance' },
    ],
  },
  {
    title: 'Integrations & Tools',
    items: [
      { name: 'Stripe' },
      { name: 'Plivo' },
      { name: 'Zoho' },
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Linux' },
      { name: 'Windows' },
    ],
  },
];

export const employers = [
  {
    company: 'HYPR4 Cloud Tech',
    period: 'Aug 2024 – Present',
    badge: 'Employee of the Quarter Q3 & Q4 2025–26',
    projects: [
      {
        name: 'Viasat GCP — Enterprise Cloud Platform',
        role: 'Platform Lead',
        period: '2025–2026',
        description:
          'Led GCP platform engineering for Viasat, owning infrastructure design and guiding a cross-functional team of 5 across identity, ingestion, pipeline orchestration, and governance. Reduced SAP delta sync runtime by more than half (4.5 hrs → ~2 hrs) and delivered a data governance framework POC with Looker-powered dashboards.',
        tags: ['GCP', 'Terraform', 'Airbyte', 'Fivetran', 'Prefect', 'PyArrow', 'Looker', 'IAM'],
      },
      {
        name: 'Srifin — AWS-to-GCP Migration',
        role: 'Project Lead',
        period: '2026',
        description:
          'Led AWS-to-GCP migration for Srifin, taking over a stalled project and driving performance optimization across Cloud Run, Cloud SQL, Cloud Functions, and Cloud Scheduler for 100–200 concurrent users. Reduced monthly infrastructure costs by ~30% (₹5.5L → ₹3.7L) through right-sizing and architecture improvements.',
        tags: ['GCP', 'Cloud Run', 'Cloud SQL', 'BigQuery', 'Cloud Functions', 'Cloud Scheduler'],
      },
      {
        name: 'Unicommerce — Analytics & Reporting Platform',
        role: 'Team Lead',
        period: '2025',
        description:
          'Led a team of 3 to build raw-layer data extraction pipelines in Go and clean/curated transformation pipelines in Python (Pandas, Polars, PyArrow, Pub/Sub), outputting optimised Parquet files. Delivered analytics dashboards backed by the curated Parquet layer.',
        tags: ['Golang', 'Python', 'Pandas', 'Polars', 'PyArrow', 'Pub/Sub', 'Parquet'],
      },
      {
        name: 'TechnoServe — Unified Dairy Data Platform',
        role: 'Dev Lead',
        period: '2026–Present',
        description:
          'Leading a team of 4 to architect and build a unified data governance platform for the dairy sector on Azure using Muxly components, FastAPI, and React. Designing governance workflows, metadata management, and data cataloging architecture across multiple data domains.',
        tags: ['Azure', 'Muxly', 'FastAPI', 'React', 'Data Governance'],
      },
      {
        name: 'Muxly — Data Governance & AI Platform',
        role: 'Developer',
        period: '2026–Present',
        description:
          'Designing and building Muxly, an enterprise data governance and AI-enabled data operations platform. Developing knowledge graph construction pipelines and AI-powered chat on data sources using Gemini LLM integration for natural language querying of governed data.',
        tags: ['Golang', 'Knowledge Graphs', 'Gemini', 'LLMs', 'Data Governance'],
      },
      {
        name: 'H4 Internal Platform',
        role: 'Backend Developer',
        period: '2026–Present',
        description:
          'Led MongoDB → PostgreSQL migration — designed schema, planned data transfer, and ensured zero data loss cutover. Implemented RBAC across all Go microservices and integrated Zoho for HR workflows.',
        tags: ['Golang', 'MongoDB', 'PostgreSQL', 'RBAC', 'Zoho'],
      },
    ],
  },
  {
    company: 'Fission Infotech',
    period: 'Nov 2022 – Aug 2024',
    projects: [
      {
        name: 'LeadsWatch — Lead Management SaaS',
        role: 'Backend Developer',
        period: '2023–2024',
        description:
          'Built the full backend for a lead management SaaS — Go APIs with Gorilla Mux and MongoDB, Stripe subscription billing, Plivo SMS alerts, and WebSocket-based live updates. Owned end-to-end development from schema design to third-party integrations.',
        tags: ['Golang', 'MongoDB', 'Stripe', 'Plivo', 'WebSockets', 'Gorilla Mux'],
      },
    ],
  },
];

export const achievements = [
  {
    title: 'Employee of the Quarter',
    detail: 'Q3 & Q4 2025–26 · HYPR4 Cloud Tech',
  },
  {
    title: 'Rapid Promotion',
    detail: 'Senior Software Engineer within one year at HYPR4',
  },
  {
    title: 'LeetCode 800+',
    detail: '800+ problems solved across algorithms & data structures',
  },
];

export const certifications = [
  {
    name: 'Associate Google Cloud Engineer',
    issuer: 'Google',
    url: 'https://www.credly.com/badges/7e475a03-788a-41ca-bbe8-bcea2b98a4ba/public_url',
  },
  {
    name: 'SI Associate Certification',
    issuer: 'MongoDB',
    url: 'https://drive.google.com/file/d/1Xr-mpD-ARkFmsUnn9j7BSPs3Wvm8Vf0n/view',
  },
  {
    name: 'SI Architect Certification',
    issuer: 'MongoDB',
    url: 'https://www.credly.com/badges/90071616-5806-4869-bfd4-5a32ec14fb50/public_url',
  },
];

export const education = [
  {
    degree: 'Master of Computer Science (MSc)',
    institution: 'Osmania University',
    period: '2020 – 2022',
    cgpa: '8.5',
  },
  {
    degree: 'Bachelor of Science (BSc)',
    institution: 'K V Ranga Reddy Degree College for Women',
    period: '2017 – 2020',
    cgpa: '9.6',
  },
];

export const contactLinks = [
  {
    label: 'shirishareddy2381@gmail.com',
    href: 'mailto:shirishareddy2381@gmail.com',
    icon: '✉',
  },
  {
    label: '+91 96764 87854',
    href: 'tel:+919676487854',
    icon: '☎',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muthyalashirisha2381',
    icon: 'in',
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/muthyalashirisha',
    icon: 'gh',
    external: true,
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/Shirisha_Muthyala/',
    icon: 'LC',
    external: true,
  },
  {
    label: 'Resume',
    href: `${import.meta.env.BASE_URL}Shirisha_M.pdf`,
    icon: '📄',
    external: true,
  },
];
