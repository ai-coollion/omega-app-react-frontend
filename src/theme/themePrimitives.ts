import { Shadows, createTheme } from '@mui/material/styles'

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    highlighted: true
  }
}
declare module '@mui/material/styles/createPalette' {
  interface ColorRange {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
  }

  interface PaletteColor extends ColorRange {
    prime: string
    grey: string
    error: string
    orange: string
    border: string
    white: string
    bgDark: string
    dark: string
    transparent: string
    tooGold: string
    coldHeights: string
  }

  interface Palette {
    baseShadow: string
  }
}

const defaultTheme = createTheme()

export const colors = {
  prime: '#BDOBEA',
  white: '#ffffff',
  bgDark: '#1F1F1F',
  dark2: '#292929',
  dark3: '#363636',
  gray: '#82868B',
  transparent: 'transparent',
  secondary: '#F8C805',
  success: '#00A959',
  info: '#1E88E5',
  warning: '#F18817',
  info2: '#45A1E4',
  error: '#f11b17'
}

export const primary = {
  50: '#f7e3fc',
  100: '#e9b9f7',
  200: '#db4bff',
  300: '#ca52ee',
  400: colors.prime,
  500: '#b000e5',
  600: '#9d00e0',
  700: '#8300db',
  800: '#6a00d7',
  900: '#2a00cc'
}

export const success = {
  50: '#e6f6ec',
  100: '#c2e9d0',
  200: '#9adcb2',
  300: '#6ecf93',
  400: '#48c47c',
  500: '#10b864',
  600: colors.success,
  700: '#00974e',
  800: '#008542',
  900: '#00662d'
}

export const warning = {
  50: '#fef2e0',
  100: '#fcdeb3',
  200: '#fac982',
  300: '#f8b352',
  400: '#f7a230',
  500: '#f59319',
  600: colors.warning,
  700: '#eb7815',
  800: '#e46913',
  900: '#da5011'
}

export const gray = {
  50: 'hsl(220, 35%, 97%)',
  100: 'hsl(220, 30%, 94%)',
  200: 'hsl(220, 20%, 88%)',
  300: 'hsl(220, 20%, 80%)',
  400: 'hsl(220, 20%, 65%)',
  500: 'hsl(220, 20%, 42%)',
  600: 'hsl(220, 20%, 35%)',
  700: 'hsl(220, 20%, 25%)',
  800: 'hsl(220, 30%, 6%)',
  900: 'hsl(220, 35%, 3%)'
}

export const error = {
  50: '#ffeaec',
  100: '#ffcacd',
  200: '#f9948f',
  300: '#f26964',
  400: '#fb423a',
  500: '#ff2b14',
  600: colors.error,
  700: '#df0212',
  800: '#d30007',
  900: '#c50000'
}

export const colorSchemes = {
  dark: {
    palette: {
      primary: {
        contrastText: primary[50],
        light: primary[300],
        main: primary[400],
        dark: primary[700]
      },
      secondary: {
        main: colors.secondary
      },
      info: {
        contrastText: primary[300],
        light: primary[500],
        main: primary[700],
        dark: primary[900]
      },
      warning: {
        light: warning[400],
        main: warning[600],
        dark: warning[700]
      },
      error: {
        light: error[400],
        main: error[500],
        dark: error[700]
      },
      success: {
        light: success[400],
        main: success[600],
        dark: success[700]
      },
      background: {
        default: '#1A1A1A !important'
      },
      text: {
        primary: colors.prime,
        secondary: colors.secondary
      },
      baseShadow: 'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px'
    }
  }
}

export const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 1280,
    lg: 1440,
    xl: 1600,

    // You can add custom breakpoints
    mobile: 375,
    tablet: 900,
    desktop: 1024
  }
}

export const typography = {
  fontFamily: 'Inter, Exo, ',
  h1: {
    fontSize: 'clamp(2rem, 1.7269rem + 1.165vw, 3.125rem)', // 50 to 32px
    fontWeight: 600,
    lineHeight: '120%',
    letterSpacing: -0.5,
    fontFamily: 'Exo'
  },
  h2: {
    fontSize: 'clamp(1.5rem, 1.3786rem + 0.5178vw, 2rem)', // 32 to 24 px
    fontWeight: 600,
    lineHeight: '130%',
    fontFamily: 'Exo 2'
  },
  h3: {
    fontSize: 'clamp(1rem, 0.8786rem + 0.5178vw, 1.5rem)', // 24 to 16px
    fontWeight: 600,
    lineHeight: '150%',
    fontFamily: 'Exo'
  },
  h4: {
    fontSize: defaultTheme.typography.pxToRem(24), // Title for Dev detail
    fontWeight: 600,
    lineHeight: '32px',
    fontFamily: 'Exo 2'
  },
  h5: {
    fontSize: defaultTheme.typography.pxToRem(20),
    fontWeight: 600,
    fontFamily: 'Open Sans',
    lineHeight: '24px'
  },
  h6: {
    fontSize: defaultTheme.typography.pxToRem(18),
    fontWeight: 600,
    fontFamily: 'Open Sans',
    lineHeight: '24px'
  },
  subtitle1: {
    fontSize: defaultTheme.typography.pxToRem(20), // Title for Product Card
    fontWeight: 600,
    lineHeight: '28px',
    fontFamily: 'Exo'
  },
  subtitle2: {
    fontSize: defaultTheme.typography.pxToRem(14),
    fontWeight: 600,
    fontFamily: 'Exo',
    LineWeight: '20px'
  },
  body1: {
    fontSize: defaultTheme.typography.pxToRem(16), // Description for Product Card
    lineHeight: '24px',
    fontWeight: 400,
    fontFamily: 'Exo'
  },
  body2: {
    fontSize: defaultTheme.typography.pxToRem(14), // Description for Task Item
    fontWeight: 400,
    lineHeight: '20px',
    fontFamilly: 'Inter'
  },
  caption: {
    fontSize: defaultTheme.typography.pxToRem(12), // Description for Live Solved
    fontWeight: 400,
    lineHeight: '18px',
    fontFamily: 'Open Sans'
  }
}

export const shape = {
  borderRadius: 8
}

// @ts-ignore
const defaultShadows: Shadows = ['none', 'var(--template-palette-baseShadow)', ...defaultTheme.shadows.slice(2)]
export const shadows = defaultShadows
