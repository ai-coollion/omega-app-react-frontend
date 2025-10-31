import { Task } from '@/types'

export const taskCategories = [
  { item: 'All Task', value: 'all' },
  {
    item: 'Posted',
    value: 'issue'
  },
  {
    item: 'Submitted',
    value: 'pending'
  }
]
export const popularLabels = ['#business', '#AI', '#task', '#business', '#system', '#omegafocus', '#focustime']

export const labels = [
  {
    title: 'Label'
  },
  {
    title: 'Label1'
  },
  {
    title: 'Label2'
  },
  {
    title: 'Label3'
  }
]

export const authors = [
  {
    title: 'Author'
  },
  {
    title: 'Author 1'
  },
  {
    title: 'Author 2'
  },
  {
    title: 'Author 3'
  }
]
export const sorts = [
  {
    title: 'Sort'
  },
  {
    title: 'Sort 1'
  },
  {
    title: 'Sort 2'
  },
  {
    title: 'Sort 3'
  }
]

export const taskItems: Task[] = [
  {
    content:
      'Doing research about How to make a good UI/UX design on google chrome website. scrolling through every pages for information about how to make a user interface design and everything around it',
    statusDescription: {
      issueCount: 5,
      statement: 'posted 6 hours ago by Ervalsa Dwi Nanda'
    },
    status: 'issue'
  },
  {
    content: 'SUGGESTION for vid2vid:',
    statusDescription: {
      issueCount: 5,
      statement: 'posted 6 hours ago by Ervalsa Dwi Nanda'
    },
    status: 'issue'
  },
  {
    content: 'information about how to make a user interface design and everything around it',
    statusDescription: {
      issueCount: 5,
      statement: '#174 opened 6 hours ago by Ervalsa Dwi Nanda'
    },
    status: 'issue'
  },
  {
    content:
      'Doing research about How to make a good UI/UX design on google chrome website. scrolling through every pages for information about how to make a user interface design and everything around it',
    statusDescription: {
      issueCount: 5,
      statement: 'posted 6 hours ago by Ervalsa Dwi Nanda'
    },
    status: 'success'
  },
  {
    content: 'SUGGESTION for vid2vid:',
    statusDescription: {
      issueCount: 5,
      statement: 'posted 6 hours ago by Ervalsa Dwi Nanda'
    },
    status: 'success'
  },
  {
    content: 'information about how to make a user interface design and everything around it',
    statusDescription: {
      issueCount: 5,
      statement: '#174 opened 6 hours ago by Ervalsa Dwi Nanda'
    },
    status: 'success'
  },
  {
    content:
      'Doing research about How to make a good UI/UX design on google chrome website. scrolling through every pages for information about how to make a user interface design and everything around it',
    statusDescription: {
      issueCount: 5,
      statement: 'posted 6 hours ago by Ervalsa Dwi Nanda'
    },
    status: 'pending'
  },
  {
    content: 'SUGGESTION for vid2vid:',
    statusDescription: {
      issueCount: 5,
      statement: 'posted 6 hours ago by Ervalsa Dwi Nanda'
    },
    status: 'pending'
  },
  {
    content: 'information about how to make a user interface design and everything around it',
    statusDescription: {
      issueCount: 5,
      statement: '#174 opened 6 hours ago by Ervalsa Dwi Nanda'
    },
    status: 'pending'
  }
]
