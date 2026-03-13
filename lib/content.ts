export interface ProjectItem {
  name: string
  description: string
  url?: string
  image?: string
  gradient: string
}

export interface ServiceItem {
  title: string
  description: string
}

const projectGradients = [
  'from-slate-900 via-blue-950 to-slate-800',
  'from-emerald-950 via-green-950 to-emerald-900',
  'from-teal-950 via-cyan-950 to-teal-900',
  'from-violet-950 via-purple-950 to-violet-900',
  'from-stone-900 via-amber-950 to-stone-800',
  'from-rose-950 via-pink-950 to-fuchsia-950',
  'from-zinc-900 via-neutral-950 to-zinc-800',
  'from-indigo-950 via-blue-950 to-cyan-950',
]

export const content = {
  nav: {
    work: 'work',
    about: 'about',
    services: 'services',
    contact: 'get in touch',
  },
  hero: {
    line1: 'AI ENGINEERING',
    line2: '& DIGITAL STRATEGY',
    subtitle:
      'I PARTNER WITH AI STARTUPS AND ENTERPRISES\nTO ARCHITECT, BUILD, AND SCALE INTELLIGENT SYSTEMS\nTHAT CREATE REAL VALUE.',
    scroll: 'scroll',
  },
  manifesto: {
    text: 'BY COMBINING DEEP TECHNICAL EXPERTISE WITH STRATEGIC PRODUCT THINKING, I HELP AI STARTUPS AND ENTERPRISES ARCHITECT, BUILD AND SHIP INTELLIGENT SYSTEMS THAT CREATE REAL VALUE.',
    aboutBtn: 'about me',
    processBtn: 'my services',
    bio: "I\u2019m Yesod \u2014 a technologist, architect, and builder at the intersection of AI and product. Born and raised in Toronto, now leading AI strategy and development for startups and enterprises. As CTO and AI Lead at a \u00A5150M startup, and technical consultant across legal AI, education, agriculture, and content creation, I bridge the gap between ambitious vision and shipped product.",
  },
  kinetic: {
    words: [
      'TRANSFORMING',
      'COMPLEX AI',
      'CHALLENGES',
      'INTO',
      'SHIPPING',
      'PRODUCTS',
    ],
  },
  projects: {
    sectionLabel: 'selected work',
    viewProject: 'view project',
    items: [
      {
        name: 'PLANTIEMOJI',
        description:
          'AI-powered plant identification, diagnosis, and care platform with hardware-software combo. Identify species from photos, diagnose health issues with sensor data, and get personalized care recommendations.',
        url: 'https://www.plantalk.ai/#plantiemoji',
        image: '/projects/plantiemoji.png',
        gradient: projectGradients[1],
      },
      {
        name: 'VIDOC AI',
        description:
          'AI-powered text-driven video editor for macOS. Edit video like editing a document \u2014 the future of content creation for podcasters and creators.',
        url: 'https://vidocai.com/',
        image: '/projects/vidoc.png',
        gradient: projectGradients[0],
      },
      {
        name: 'EZPLANT',
        description:
          'AI-powered plant health diagnosis platform. 99.2% accuracy across 500+ diseases and 180+ species, refined by expert botanists.',
        url: 'https://ezplant.net/',
        image: '/projects/ezplant.png',
        gradient: projectGradients[2],
      },
      {
        name: 'PLANTSCAPE',
        description:
          'AI web app that identifies plants from your camera and composes unique, nature-inspired music from them in real time.',
        image: '/projects/plantscape.png',
        gradient: projectGradients[4],
      },
      {
        name: 'ALORA',
        description:
          'Robotic telescope control system in Arizona.',
        image: '/projects/alora.png',
        gradient: 'from-[#9B8FB8] via-[#8A7DA8] to-[#C4BBD9]',
      },
      {
        name: 'PLART',
        description:
          'Leaves are art. AI-powered plant photo enhancement and styling.',
        url: 'https://plart.art/',
        image: '/projects/plart.png',
        gradient: projectGradients[5],
      },
      {
        name: 'HELMET',
        description:
          'AI-powered custom cosplay helmet design and fabrication.',
        image: '/projects/helmet.png',
        gradient: projectGradients[6],
      },
      {
        name: 'MICROLENSING',
        description:
          'Gravitational microlensing simulation and analysis platform for astrophysics research.',
        url: 'https://www.ewadirect.com/proceedings/tns/article/view/6792',
        image: '/projects/microlensing.png',
        gradient: projectGradients[7],
      },
    ] as ProjectItem[],
  },
  services: {
    sectionLabel: 'services',
    items: [
      {
        title: 'Agentic Architecture Design',
        description:
          'Designing multi-agent systems, orchestration layers, and AI-native architectures that scale. From RAG pipelines to autonomous agent workflows — I architect the intelligent backbone of your product.',
      },
      {
        title: 'AI Strategy & Roadmap',
        description:
          'Which AI opportunities to pursue first. Technology selection, build-vs-buy decisions, and phased rollout plans aligned with business goals.',
      },
      {
        title: 'MVP & Demo Development',
        description:
          'Rapidly building functional prototypes and MVPs that demonstrate your AI vision to investors and users. Ship in weeks, not months.',
      },
      {
        title: 'Product Design Assistance',
        description:
          'Shaping AI-native product experiences from concept to interface. Interaction patterns that feel magical, not mechanical.',
      },
      {
        title: 'Personal Openclaw Assistant',
        description:
          'Custom OpenClaw-based AI assistants. Multi-channel deployment, personality tuning, and tool integration.',
      },
      {
        title: 'Technical Due Diligence',
        description:
          'Evaluating AI tech stacks for investors. Architecture quality and scalability assessment.',
      },
      {
        title: 'AI Workflow Automation',
        description:
          'Turning repetitive enterprise processes into autonomous, self-improving systems.',
      },
      {
        title: 'AI Integration & Deployment',
        description:
          'Embedding models into production. APIs, infrastructure, and monitoring at scale.',
      },
    ] as ServiceItem[],
  },
  trustedBy: {
    sectionLabel: 'trusted by',
    clients: [
      'Plantalk AI',
      '\u8C37\u73A9\u5802',
      '\u6307\u9488\u8C61\u9650',
      'VisionEd Inc.',
      'NASA JPL',
      'Vidoc AI',
      'NothingButPlay Inc.',
      'Stellarium Inc.',
      'StateStreet Bank',
      'RASC',
    ],
  },
  contact: {
    line1: "LET\u2019S BUILD",
    line2: 'TOGETHER',
    cta: 'book a call',
  },
  footer: {
    work: 'work',
    about: 'about',
    services: 'services',
    contact: 'contact',
    linkedin: 'linkedin',
    github: 'github',
    rights: '\u00A9 YESODS ALL RIGHTS RESERVED.',
    studio: '\u7D2B\u5251\u5DE5\u4F5C\u5BA4',
  },
}
