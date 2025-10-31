import { IProject } from './marketplace'

export interface Developer {
  _id: string
  username: string
  email?: string
  description: string
  avatar: string
  isVerified: boolean
  backImg: string
  role: string
  followers: string[]
  following: string[]
  projects: IProject[]
  isPopular: boolean
  type: string
}
