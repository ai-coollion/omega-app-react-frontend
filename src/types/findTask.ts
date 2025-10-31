export interface Task {
  content: string
  status: status
  statusDescription: {
    issueCount: number
    statement: string
  }
}

export interface ITask {
  title: string
  githubLink: string
  reward: number
  deadLine: Date
}

export interface TaskResType {
  _id: string
  provider: string
  title: string
  status: status
  githubLink: string
  reward: number
  deadLine: Date
  issueCount: number
  solveVideo?: string
  createdAt: Date
}

export type TaskType = Partial<ITask>

const status = {
  success: 'success',
  pending: 'pending',
  issue: 'issue'
}

export type status = keyof typeof status
