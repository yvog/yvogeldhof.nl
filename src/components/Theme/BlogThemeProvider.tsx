import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import { useMemo } from 'react';
import { useColorModeContext } from '../../context/ColorModeContext/useColorModeContext';
import { getTheme } from './getTheme';

type BlogThemeProviderProps = {
  children: React.ReactNode;
};

export const BlogThemeProvider = (props: BlogThemeProviderProps) => {
  const { children } = props;
  const { mode } = useColorModeContext();
  const theme = useMemo(() => responsiveFontSizes(createTheme(getTheme(mode))), [mode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
