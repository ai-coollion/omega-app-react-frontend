export interface User {
  _id: string
  username: string
  email: string
  avatar: File | string
  backImg: File | string
  isVerified: boolean
  balance: number
  role: string
  description: string
  type: string
  following: string[]
  followers: string[]
  projects: string[]
  tasks: string[]
  videos: string[]
}

export interface AuthFormData {
  username?: string
  email: string
  password: string
}

export interface VerifyEmailFormData {
  email: string
  code: string
}

export interface AccessToken {
  token: string
}

export interface LoginUserRes {
  user: User
  token: string
}

export interface MessageRes {
  message: string
}

export interface AuthState {
  isLoggedIn: boolean
  user: User | null
  token: string | null
}
