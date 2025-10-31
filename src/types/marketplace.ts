export interface ProductType {
  title: string
  description: string
  price: number
  isText: boolean
  media: string
  type: string
  isVerified: boolean
  createdAt?: Date
}

export interface IProject {
  _id?: string
  title: string
  description: string
  price: number
  githubLink: string
  isText: boolean
  type: string
  media: File | string
  isVerified: boolean
  createdAt?: Date

  provider?: {
    username: string
  }
}

export type ProjectType = Partial<IProject>
