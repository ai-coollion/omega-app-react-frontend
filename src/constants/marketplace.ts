import { IProject } from '@/types'

export const productCategories = [
  {
    title: 'Image Gen',
    value: 'Image Gen'
  },
  {
    title: 'Text Gen',
    value: 'Text Gen'
  },
  {
    title: 'Language',
    value: 'Language'
  },
  {
    title: 'Text to Image',
    value: 'Text to Image'
  },
  {
    title: 'Medical',
    value: 'Medical'
  },
  {
    title: 'Assistant',
    value: 'Assistant'
  }
]

export const productItems: IProject[] = [
  {
    title: 'LLama3 - 8B',
    description: "Meta's latest opensource LLama3 8B model",
    price: 200,
    media: '/assets/images/lLama38B.png',
    isText: false,
    type: 'Goods',
    githubLink: '',
    isVerified: true
  },
  {
    title: 'Zephyr-7B',
    description: 'Zephyr is a series of language models that are trained to act as helpful assistants.',
    price: 200,
    media: '/assets/images/zephyr7B.png',
    isText: false,
    type: 'Coin',
    githubLink: '',
    isVerified: true
  },
  {
    title: 'effi-13b',
    description: 'This model is an instruction finetuned model. It provides reasoning behind the response',
    price: 200,
    media: '/assets/images/effi-13b.png',
    isText: true,
    type: 'Watch',
    githubLink: '',
    isVerified: true
  },
  {
    title: 'Medical Agent',
    description: 'This model helps to answer basic medical queries.',
    price: 200,
    media: '/assets/images/medicalAgent.png',
    isText: true,
    type: 'Watch',
    githubLink: '',
    isVerified: true
  },
  {
    title: 'Text to Image Diffusion AI Model',
    description: 'Generate high quality images with simple using state of the art AI',
    price: 200,
    media: '/assets/images/diffusionAI.png',
    isText: true,
    type: 'Phonecase',
    githubLink: '',
    isVerified: true
  },
  {
    title: 'Multilingual-Text-To-Speech',
    description: 'Convert text in multiple languages, including English, German, Polish, Spanish, Italian,',
    price: 200,
    media: '/assets/images/multilingualtext.png',
    isText: true,
    type: 'Phonecase',
    githubLink: '',
    isVerified: true
  },
  {
    title: 'Essay Evaluator with Specific Grading Criteria',
    description: 'Provide evaluation and feedback on a given essay.',
    price: 200,
    media: '/assets/images/essayEvaluator.png',
    isText: true,
    type: 'Watch',
    githubLink: '',
    isVerified: true
  },
  {
    title: 'Medical Report Analyzer',
    description: 'This model analyzes the medical report to retrieve the diagnosis, prognosis and medication',
    price: 200,
    media: '/assets/images/medicalReport.png',
    isText: true,
    type: 'Watch',
    githubLink: '',
    isVerified: true
  },
  {
    title: 'Indian Language Translation',
    description: 'This model translates text from one Indian to another Indian language. This model supports...',
    price: 200,
    media: '/assets/images/indianLanguage.png',
    isText: false,
    type: 'Painting',
    githubLink: '',
    isVerified: true
  },
  {
    title: 'AI Medical Diagnosis',
    description: "Meta's latest opensource LLama3 8B model",
    price: 200,
    media: '/assets/images/aIMedical.png',
    isText: true,
    type: 'Coin',
    githubLink: '',
    isVerified: true
  },
  {
    title: 'Generate MCQ',
    description: 'This model uses state of the art Transformer models to generate Questions along with Answe',
    price: 200,
    media: '/assets/images/generateMCQ.png',
    isText: false,
    type: 'Phonecase',
    githubLink: '',
    isVerified: true
  },
  {
    title: 'Boolean Question Generator',
    description: 'This model generates yes or no questions along with relevant answers',
    price: 200,
    media: '/assets/images/boolean.png',
    isText: true,
    type: 'Phonecase',
    githubLink: '',
    isVerified: true
  }
]
