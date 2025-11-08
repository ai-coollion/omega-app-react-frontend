// import { toast } from 'react-toastify'

// export const hexToRgba = (hex: string, alpha: number = 100): string => {
//   // Remove the '#' if present
//   hex = hex.replace('#', '')

//   // Extract red, green, blue
//   const r = parseInt(hex.substring(0, 2), 16)
//   const g = parseInt(hex.substring(2, 4), 16)
//   const b = parseInt(hex.substring(4, 6), 16)

//   // Return in rgba format
//   return `rgba(${r}, ${g}, ${b}, ${alpha / 100})`
// }

// export const localStorageGetItem = (key: string, defaultValue = '') => {
//   return localStorage.getItem(key) || defaultValue
// }

// export const scrollIntoSection = (id: string | undefined) => {
//   if (id) {
//     document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
//   }
// }

// export const handleError = (err: unknown, defaultMessage?: string) => {
//   if (err instanceof Error) {
//     toast(err.message, { type: 'error' })
//   } else {
//     toast(defaultMessage || 'An unknown error occured', { type: 'error' })
//   }
// }
