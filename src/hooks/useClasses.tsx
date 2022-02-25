import { CSSObject } from '@emotion/react'
import { Theme, useTheme } from '@mui/material'

type ClassesWithThemeFunc = (theme: Theme) => ClassNames

export type ClassNames = Record<string, CSSObject>

/*
  Use classes similar to useStyles in Material UI v4,
  but in a more primitive 'native Emotion' way
  instead of using tss-react package.

  Why? tss-react is causing a FOUC in combination with Next.js.
*/
export function useClasses(classes: ClassesWithThemeFunc): ClassNames {
  const theme = useTheme()

  /*
    If style overrides are needed:
    * use Emotion's way of merging styles, or
    * allow optional "overrides: ClassNames" argument
      * if given, merge classes with overrides using 'merge-deep' npm package.
  */

  return classes(theme)
}
