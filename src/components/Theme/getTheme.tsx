import { PaletteMode, PaletteOptions } from '@mui/material'

const lightThemePalette: PaletteOptions = {
  secondary: {
    main: '#001928'
  },
  background: {
    paper: '#edf0f3',
    default: '#edf0f3',
  },
  text: {
    primary: '#212121',
  },
}

const darkThemePalette: PaletteOptions = {
  secondary: {
    main: '#d5e9ff'
  },
  background: {
    paper: '#001928',
    default: '#001928'
  },
  text: {
    primary: '#d5e9ff',
    secondary: '#d5e9ff'
  },
}

const fontFamilyHeadings = "'Poppins', Segoe UI, Tahoma, sans-serif"
const fontFamilyBody = "'Source Sans Pro', Tahoma, sans-serif"

export const getTheme = (mode: PaletteMode) => {
  const themePalette = mode === 'light' ? lightThemePalette : darkThemePalette

  return {
    palette: {
      mode,
      ...themePalette,
    },
    typography: {
      fontFamily: fontFamilyHeadings,
      h1: {
        fontSize: 56,
        fontWeight: 500,
      },
      h2: {
        fontSize: 36,
        fontWeight: 400,
      },
      h3: {
        fontSize: 24,
        fontWeight: 500,
      },
      h4: {
        fontSize: 20,
        fontWeight: 500,
      },
      h5: {
        fontSize: 16,
        fontWeight: 500,
      },
      h6: {
        fontSize: 16,
        fontWeight: 500,
      },
      body1: {
        fontSize: 16,
        fontWeight: 300,
        lineHeight: 1.7,
        fontFamily: fontFamilyBody,
      },
      body2: {
        fontSize: 14,
        fontWeight: 300,
        fontFamily: fontFamilyBody
      },
      caption: {
        lineHeight: 1.7,
        ...{
          color: mode === 'dark' ? 'rgba(255, 255, 255, 0.35)' : 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            overflowY: 'scroll',
            transition: 'background .15s ease-in-out',
          },
          table: {
            '& thead': {
              textAlign: 'left',
            },
            '& tbody': {
              '& td': {
                padding: '8px 0',
                '&:first-of-type': {
                  minWidth: 100,
                  paddingRight: 24,
                  verticalAlign: 'top',
                },
              },
            },
          },
          blockquote: {
            marginInlineStart: 0,
            padding: 8,
            paddingLeft: 16,
            borderRadius: 4,
            background: '#d5e9ff',
            borderLeft: '6px solid #a8d1ff',
            ...(mode === 'dark' && {
              background: 'rgba(223, 223, 223, 0.05)',
              borderLeftColor: '#385d7c',
            }),
            p: {
              margin: 0,
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            ...(mode === 'dark' && {
              color: 'rgba(213, 233, 255, 0.5)'
            }),
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            transition: 'border .15s ease',
          }
        }
      }
    },
  }
}
