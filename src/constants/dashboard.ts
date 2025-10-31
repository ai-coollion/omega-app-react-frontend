import { IconType } from '@/components/Core/AppIcon'

export const dashboardControlItems: {
  title: string
  iconName: IconType
  value: string
}[] = [
  {
    title: 'Profile',
    iconName: 'profile',
    value: '0'
  },
  {
    title: 'Project',
    iconName: 'project',
    value: '1'
  },
  {
    title: 'Task',
    iconName: 'task',
    value: '2'
  }
]

export const dashboardImages = [
  {
    image: '/assets/images/zephyr7B.png'
  },
  {
    image: '/assets/images/effi-13b.png'
  },
  {
    image: '/assets/images/medicalAgent.png'
  },
  {
    image: '/assets/images/diffusionAI.png'
  },
  {
    image: '/assets/images/multilingualtext.png'
  },
  {
    image: '/assets/images/essayEvaluator.png'
  },
  {
    image: '/assets/images/medicalReport.png'
  }
]
