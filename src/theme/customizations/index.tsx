import { chipClasses } from '@mui/material/Chip'
import { dividerClasses } from '@mui/material/Divider'
import { iconButtonClasses } from '@mui/material/IconButton'
import { menuItemClasses } from '@mui/material/MenuItem'
import { outlinedInputClasses } from '@mui/material/OutlinedInput'
import { selectClasses } from '@mui/material/Select'
import { svgIconClasses } from '@mui/material/SvgIcon'
import { tabClasses } from '@mui/material/Tab'
import { toggleButtonGroupClasses } from '@mui/material/ToggleButtonGroup'
import { Components, Theme, alpha } from '@mui/material/styles'

import AppIcon from '@/components/Core/AppIcon'

import { hexToRgba } from '@/utils'
import { colors, gray, primary } from '../themePrimitives'

export const customizations: Components<Theme> = {
  MuiButtonBase: {
    styleOverrides: {
      root: {
        boxSizing: 'border-box',
        transition: 'all 100ms ease-in'
      }
    }
  },
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: 'none',
        borderRadius: theme.shape.borderRadius,
        textTransform: 'none',
        variants: [
          {
            props: {
              size: 'small'
            },
            style: {
              height: '40px',
              padding: '10px 16px'
            }
          },
          {
            props: {
              size: 'medium'
            },
            style: {
              height: '46px',
              padding: '14px 16px'
            }
          },
          {
            props: {
              size: 'large'
            },
            style: {
              height: '40px',
              padding: '10px 24px'
            }
          },
          {
            props: {
              color: 'primary',
              variant: 'contained'
            },
            style: {
              color: colors.white,
              backgroundColor: `#BD0BEA`,
              bosShadow:
                '0px 2px 5px 0px rgba(20, 88, 201, 0.17), 0px -2px 0.3px 0px rgba(14, 56, 125, 0.18) inset, 0px 2px 1px 0px rgba(255, 255, 255, 0.22) inset;',
              '&:hover': {
                backgroundColor: colors.white,
                color: `#BD0BEA !important`
              }
            }
          },
          {
            props: {
              color: 'secondary',
              variant: 'contained'
            },
            style: {
              color: `#fff !important`,
              backgroundColor: colors.dark3,
              '&:hover': {
                backgroundColor: `#fff !important`,
                color: '#363636 !important'
              }
            }
          },
          {
            props: {
              color: 'inherit',
              variant: 'contained'
            },
            style: {
              color: colors.white,
              backgroundColor: '#292929',
              border: `1px solid #424242`
            }
          },
          {
            props: {
              color: 'success',
              variant: 'contained'
            },
            style: {
              color: colors.white,
              backgroundImage: theme.palette.success
            }
          },
          {
            props: {
              color: 'warning',
              variant: 'contained'
            },
            style: {
              color: colors.white,
              backgroundImage: theme.palette.warning
            }
          },
          {
            props: {
              color: 'secondary',
              variant: 'outlined'
            },
            style: {
              color: colors.white,
              border: '1px solid',
              borderColor: colors.white,
              backgroundColor: 'transparent',
              fontSize: '14px',
              fontWeight: 600,
              fontFamily: 'Exo',
              textTransform: 'uppercase',
              '&:hover': {
                backgroundColor: colors.white,
                borderColor: colors.white,
                color: colors.dark2
              },
              '&:active': {
                backgroundColor: alpha(colors.white, 0.7)
              }
            }
          },
          {
            props: {
              color: 'primary',
              variant: 'outlined'
            },
            style: {
              color: primary[200],
              border: '1px solid',
              borderColor: primary[200],
              backgroundColor: alpha(primary[200], 0.08),
              '&:hover': {
                backgroundColor: colors.prime,
                borderColor: primary[400],
                color: colors.white
              },
              '&:active': {
                backgroundColor: alpha(primary[200], 0.7)
              }
            }
          },
          {
            props: {
              color: 'inherit',
              variant: 'outlined'
            },
            style: {
              ...theme.applyStyles('dark', {
                borderColor: colors.dark2
              })
            }
          }
        ]
      })
    }
  },
  MuiIconButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: 'none',
        borderRadius: theme.shape.borderRadius,
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightMedium,
        letterSpacing: 0,
        variants: [
          {
            props: {
              color: 'inherit'
            },
            style: {
              backgroundColor: colors.dark3,
              border: 'none',
              borderRadius: '8px'
            }
          },
          {
            props: {
              color: 'default'
            },
            style: {
              backgroundColor: colors.transparent,
              border: 'none'
            }
          },
          {
            props: {
              color: 'secondary'
            },
            style: {
              backgroundColor: '#424242',
              color: colors.white,
              border: 'none',
              borderRadius: '1000px'
            }
          },
          {
            props: {
              color: 'info'
            },
            style: {
              backgroundColor: colors.transparent,
              color: colors.white,
              border: '1px solid #fff',
              borderRadius: theme.shape.borderRadius
            }
          },
          {
            props: {
              color: 'primary'
            },
            style: {
              backgroundColor: '#BD0BEA',
              color: colors.white,
              borderRadius: theme.shape.borderRadius
            }
          },
          {
            props: {
              size: 'small'
            },
            style: {
              width: '2.25rem',
              height: '2.25rem',
              padding: '0.25rem',
              [`& .${svgIconClasses.root}`]: { fontSize: '1rem' }
            }
          },
          {
            props: {
              size: 'medium'
            },
            style: {
              width: '2.5rem',
              height: '2.5rem'
            }
          },
          {
            props: {
              color: 'primary'
            },
            style: {
              borderColor: `${colors.prime} !important`,
              backgroundColor: `${alpha(colors.prime, 0.16)} !important`
            }
          }
        ]
      })
    }
  },
  MuiToggleButtonGroup: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.shape.borderRadius,
        [`& .${toggleButtonGroupClasses.selected}`]: {
          color: primary[500]
        },
        variants: [
          {
            props: {
              color: 'standard'
            },
            style: {
              backgroundColor: colors.transparent,
              border: 'none',
              [`& .${toggleButtonGroupClasses.selected}`]: {
                color: colors.white,
                padding: '8px 12px',
                borderRadius: theme.shape.borderRadius,
                backgroundColor: '#363636 !important'
              }
            }
          },
          {
            props: {
              color: 'secondary'
            },
            style: {
              backgroundColor: colors.dark2,
              border: '1px solid #424242',
              color: '#82868B',
              [`& .${toggleButtonGroupClasses.selected}`]: {
                color: '#fff !important',
                padding: '8px 12px',
                borderRadius: theme.shape.borderRadius,
                backgroundColor: '#BD0BEA !important'
              }
            }
          }
        ]
      })
    }
  },
  MuiToggleButton: {
    styleOverrides: {
      root: {
        padding: '12px 16px',
        textTransform: 'none',
        borderRadius: '10px',
        fontWeight: 600,
        fontSize: '16px',
        border: 'none',
        backgroundColor: 'transparent'
      }
    }
  },
  MuiTypography: {
    styleOverrides: {
      root: () => ({
        variants: [
          {
            props: { color: 'grey' },
            style: {
              color: '#82868B'
            }
          },
          {
            props: { color: 'white' },
            style: {
              color: colors.white
            }
          },
          {
            props: { color: 'highlight' },
            style: {
              color: `#F8C805`
            }
          },
          {
            props: { color: 'gray2' },
            style: {
              color: '#ACB4C0'
            }
          },
          {
            props: { color: 'prime' },
            style: {
              color: `${colors.prime} !important`
            }
          }
        ]
      })
    }
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        height: 16,
        width: 16,
        borderRadius: '8px',
        border: '1px solid #fff',
        boxShadow: 'none !important',
        outline: 'none !important',
        color: '#424242',
        transition: 'border-color, background-color, 120ms ease-in',
        '&:hover': {},
        '&.Mui-focusVisible': {},
        variants: [
          {
            props: {
              color: 'primary'
            },
            style: {
              color: '#424242',
              border: 'none',
              boxShadow: 'none',
              borderRadius: '8px !important',
              '&.Mui-checked': {
                color: '#BD0BEA',
                border: 'none',
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: primary[600]
                }
              }
            }
          }
        ]
      }
    }
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        border: 'none'
      },
      input: {
        '&::placeholder': {
          opacity: 0.7,
          color: gray[500]
        }
      }
    }
  },
  MuiOutlinedInput: {
    styleOverrides: {
      input: ({ theme }) => ({
        padding: 0,
        '&:-webkit-autofill': {
          WebkitBoxShadow: `0 0 0 100px ${theme.palette.mode === 'dark' ? colors.bgDark : colors.dark2} inset !important`
        }
      }),
      root: ({ theme }) => ({
        padding: '20px',
        color: colors.white,
        borderRadius: theme.shape.borderRadius,
        border: `1px solid ${theme.palette.divider}`,
        backgroundColor: colors.bgDark,
        fontsize: '12px',
        transition: 'border 120ms ease-in',
        '&:hover': {
          borderColor: '#BD0BEA !important'
        },
        [`&.${outlinedInputClasses.focused}`]: {
          borderColor: '#BD0BEA !important'
        },
        variants: [
          {
            props: {
              size: 'small'
            },
            style: {
              height: '2.25rem'
            }
          },
          {
            props: {
              size: 'medium'
            },
            style: {
              height: '10rem'
            }
          }
        ]
      }),
      notchedOutline: {
        border: 'none'
      }
    }
  },
  MuiFilledInput: {
    styleOverrides: {
      input: {
        padding: 0,
        '&:-webkit-autofill': {
          WebkitBoxShadow: `0 0 0 #1f1f1f 100px inset !important`
        },
        '&:focus': {
          backgroundColor: 'transparent !important'
        }
      },
      root: {
        padding: '0px',
        color: colors.white,
        borderRadius: '0px',
        border: `none`,
        backgroundColor: colors.transparent,
        '&:hover': {
          backgroundColor: colors.transparent
        },
        fontSize: '16px',
        transition: 'border 120ms ease-in',
        '&.Mui-disabled': {
          backgroundColor: 'transparent', // Change background color when disabled
          color: 'white', // Change text color when disabled
          WebkitTextFillColor: 'white' // For Safari
        },
        '&.Mui-focused': {
          backgroundColor: 'transparent !important'
        },
        variants: [
          {
            props: {
              size: 'small'
            },
            style: {
              height: '32px'
            }
          },
          {
            props: {
              size: 'medium'
            },
            style: {
              height: '3rem',
              alignItems: 'flex-start'
            }
          }
        ]
      }
    }
  },
  MuiInputAdornment: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.grey[500],
        ...theme.applyStyles('dark', {
          color: theme.palette.grey[400]
        })
      })
    }
  },
  MuiFormLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        typography: theme.typography.caption,
        marginBottom: 8
      })
    }
  },
  MuiList: {
    styleOverrides: {
      root: {
        padding: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: 0
      }
    }
  },
  MuiListItemText: {
    styleOverrides: {
      primary: ({ theme }) => ({
        fontSize: theme.typography.body2.fontSize,
        fontWeight: 500,
        lineHeight: theme.typography.body2.lineHeight
      }),
      secondary: ({ theme }) => ({
        fontSize: theme.typography.caption.fontSize,
        lineHeight: theme.typography.caption.lineHeight
      })
    }
  },
  MuiListSubheader: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: 'transparent',
        padding: '4px 8px',
        fontSize: theme.typography.caption.fontSize,
        fontWeight: 500,
        lineHeight: theme.typography.caption.lineHeight
      })
    }
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: 0
      }
    }
  },
  MuiChip: {
    defaultProps: {
      size: 'small'
    },
    styleOverrides: {
      root: ({ theme }) => ({
        border: 'none',
        borderRadius: '8px',
        [`& .${chipClasses.label}`]: {
          fontWeight: 600,
          fontSize: '12px',
          fontFamily: 'Open Sans'
        },
        variants: [
          {
            props: {
              color: 'default'
            },
            style: {
              borderColor: gray[200],
              backgroundColor: gray[100],
              [`& .${chipClasses.label}`]: {
                color: gray[500]
              },
              [`& .${chipClasses.icon}`]: {
                color: gray[500]
              },
              ...theme.applyStyles('dark', {
                borderColor: gray[700],
                backgroundColor: gray[800],
                [`& .${chipClasses.label}`]: {
                  color: gray[300]
                },
                [`& .${chipClasses.icon}`]: {
                  color: gray[300]
                }
              })
            }
          },
          {
            props: {
              color: 'success'
            },
            style: {
              backgroundColor: hexToRgba(colors.success, 8),
              [`& .${chipClasses.label}`]: {
                color: colors.success
              },
              [`& .${chipClasses.icon}`]: {
                color: colors.success
              }
            }
          },
          {
            props: {
              color: 'warning'
            },
            style: {
              backgroundColor: hexToRgba(colors.warning, 8),
              [`& .${chipClasses.label}`]: {
                color: colors.warning
              },
              [`& .${chipClasses.icon}`]: {
                color: colors.warning
              }
            }
          },
          {
            props: {
              color: 'error'
            },
            style: {
              backgroundColor: hexToRgba('#BD0BEA', 8),
              [`& .${chipClasses.label}`]: {
                color: '#BD0BEA !important'
              },
              [`& .${chipClasses.icon}`]: {
                color: '#BD0BEA !important'
              }
            }
          },
          {
            props: {
              color: 'info'
            },
            style: {
              backgroundColor: hexToRgba('#1E88E5', 8),
              padding: '4px 12px',
              fontWeight: 600,
              lineHeight: '24px',
              fontFamily: 'Open Sans',
              [`& .${chipClasses.label}`]: {
                color: '#1E88E5 !important',
                padding: '0px !important',
                fontSize: '16px !important'
              },
              ['&. MuiChip-label']: {
                padding: '0px !important'
              },
              [`& .${chipClasses.icon}`]: {
                color: '#1E88E5 !important'
              }
            }
          },
          {
            props: { size: 'small' },
            style: {
              maxHeight: 20,
              [`& .${chipClasses.label}`]: {
                fontSize: theme.typography.caption.fontSize
              },
              [`& .${svgIconClasses.root}`]: {
                fontSize: theme.typography.caption.fontSize
              }
            }
          },
          {
            props: { size: 'medium' },
            style: {
              [`& .${chipClasses.label}`]: {
                fontSize: theme.typography.caption.fontSize
              }
            }
          }
        ]
      })
    }
  },
  MuiTablePagination: {
    styleOverrides: {
      actions: {
        display: 'flex',
        gap: 8,
        marginRight: 6,
        [`& .${iconButtonClasses.root}`]: {
          minWidth: 0,
          width: 36,
          height: 36
        }
      }
    }
  },
  MuiTableCell: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderColor: theme.palette.divider
      })
    }
  },
  MuiTableBody: {
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiTableRow-root': {
          '&:last-child td, &:last-child th': { border: 0 },
          '&:nth-of-type(odd)': {
            ...theme.applyStyles('dark', {
              backgroundColor: colors.dark2
            })
          }
        }
      })
    }
  },
  MuiTable: {
    styleOverrides: {
      root: ({ theme }) => ({
        minWidth: 650,
        borderColor: colors.dark2,
        backgroundColor: colors.dark3,
        boxShadow: '0px 1px 4px rgba(12, 12, 13, 0.05)',
        ...theme.applyStyles('dark', {
          backgroundColor: colors.dark2
        })
      })
    }
  },
  MuiIcon: {
    defaultProps: {
      fontSize: 'small'
    },
    styleOverrides: {
      root: {
        variants: [
          {
            props: {
              fontSize: 'small'
            },
            style: {
              fontSize: '1rem'
            }
          }
        ]
      }
    }
  },
  MuiMenuItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.shape.borderRadius,
        padding: '6px 8px',
        [`&.${menuItemClasses.focusVisible}`]: {
          backgroundColor: 'transparent'
        },
        [`&.${menuItemClasses.selected}`]: {
          [`&.${menuItemClasses.focusVisible}`]: {
            backgroundColor: alpha(theme.palette.action.selected, 0.3)
          }
        }
      })
    }
  },
  MuiMenu: {
    styleOverrides: {
      list: {
        gap: '0px',
        [`&.${dividerClasses.root}`]: {
          margin: '0 -8px'
        }
      },
      paper: ({ theme }) => ({
        marginTop: '4px',
        borderRadius: theme.shape.borderRadius,
        border: `1px solid ${theme.palette.divider}`,
        backgroundImage: 'none',
        background: colors.white,
        boxShadow: 'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px',
        ...theme.applyStyles('dark', {
          background: colors.dark2,
          boxShadow: 'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px'
        })
      })
    }
  },
  MuiSelect: {
    defaultProps: { IconComponent: () => <AppIcon name='down' color='white' /> },
    styleOverrides: {
      root: {
        borderRadius: `8px !important`,
        border: 'none',
        gap: '8px !important',
        alignItems: 'center',
        background: 'none !important',
        boxShadow: `none`,
        p: '0px !important',
        [`&.${selectClasses.focused}`]: {
          outlineOffset: 0

          // borderColor: gray[400]
        },
        '&:before, &:after': {
          display: 'none'
        }
      },
      select: ({ theme }) => ({
        p: '0px !important',
        display: 'flex',
        fontSize: '14px',
        alignItems: 'center',
        background: 'none',
        ...theme.applyStyles('dark', {
          display: 'flex',
          alignItems: 'center'
        })
      })
    }
  },
  MuiDrawer: {
    styleOverrides: {
      paper: ({ theme }) => ({
        backgroundColor: theme.palette.background.default
      })
    }
  },
  MuiTabs: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: '10px',
        minHeight: 'fit-content',
        backgroundColor: colors.dark2,
        ...theme.applyStyles('dark', {
          backgroundColor: colors.bgDark
        })
      }),
      indicator: {
        height: '100%',
        borderRadius: '10px',
        background: 'transparent',
        border: `1px solid ${colors.prime}`
      },
      scroller: {
        width: 'auto'
      },
      vertical: ({ theme }) => ({
        backgroundColor: 'transparent !important',
        '& .MuiTabs-indicator': {
          display: 'none !important'
        },
        '& .MuiTab-root:hover': {
          color: colors.dark2,
          ...theme.applyStyles('dark', {
            color: colors.white
          })
        }
      })
    }
  },
  MuiTab: {
    styleOverrides: {
      root: ({ theme }) => ({
        margin: 0,
        fontSize: '16px',
        padding: '10px 20px',
        borderRadius: '10px',
        textTransform: 'none',
        minWidth: 'fit-content',
        minHeight: 'fit-content',
        color: theme.palette.text.secondary,
        border: '1px solid',
        borderColor: 'transparent',
        ':hover': {
          color: colors.prime
        },
        [`&.${tabClasses.selected}`]: {
          color: colors.prime, // backgroundColor: hexToRgba(colors.prime, 8),
          borderColor: colors.prime
        },
        ...theme.applyStyles('dark', {
          [`&.${tabClasses.selected}`]: {
            color: colors.prime, // backgroundColor: hexToRgba(colors.prime, 8),
            borderColor: colors.prime
          }
        })
      })
    }
  },

  MuiDialog: {
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiDialog-paper': {
          borderRadius: '10px',
          border: '1px solid',
          ...theme.applyStyles('dark', {
            borderColor: colors.dark2,
            backgroundColor: colors.dark2
          }),
          [theme.breakpoints.down(426)]: {
            maxHeight: '100vh',
            maxWidth: '100vw',
            height: '100vh',
            width: '100vw',
            margin: 0,
            borderRadius: 0
          }
        }
      })
    }
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: ({ theme }) => ({
        height: 8,
        borderRadius: 8,
        backgroundColor: gray[200],
        ...theme.applyStyles('dark', {
          backgroundColor: gray[800]
        })
      })
    }
  },

  MuiPaper: {
    defaultProps: {
      elevation: 0
    },
    styleOverrides: {
      root: {
        backgroundImage: 'none',
        backgroundColor: '#363636'
      }
    }
  },
  MuiCard: {
    styleOverrides: {
      root: ({ theme }) => {
        return {
          padding: 16,
          gap: 16,
          transition: 'all 100ms ease',
          backgroundColor: gray[50],
          borderRadius: theme.shape.borderRadius,
          border: `1px solid ${theme.palette.divider}`,
          boxShadow: 'none',
          ...theme.applyStyles('dark', {
            backgroundColor: colors.dark2
          }),
          variants: [
            {
              props: {
                variant: 'outlined'
              },
              style: {
                border: `1px solid ${theme.palette.divider}`,
                boxShadow: 'none',
                background: colors.white,
                ...theme.applyStyles('dark', {
                  background: alpha(gray[900], 0.4)
                })
              }
            }
          ]
        }
      }
    }
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: 0,
        '&:last-child': { paddingBottom: 0 }
      }
    }
  },
  MuiCardHeader: {
    styleOverrides: {
      root: {
        padding: 0
      }
    }
  },
  MuiCardActions: {
    styleOverrides: {
      root: {
        padding: 0
      }
    }
  }
}
