import { ContainerProps } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { mergeSx } from '../../util/mergeSx';
import { AboutMe } from '../AboutMe/AboutMe';
import { Footer } from '../Footer/Footer';
import { Header, HeaderProps } from '../Header/Header';

type PageLayoutProps = Omit<ContainerProps, 'maxWidth'> & Pick<HeaderProps, 'buttons'>;

export const PageLayout = ({
  children,
  buttons,
  ...containerProps
}: PageLayoutProps) => (
  <Container
    maxWidth="md"
    {...containerProps}
    sx={mergeSx(
      {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      },
      containerProps.sx
    )}
  >
    <Header buttons={buttons} />
    <Divider />
    <Box
      sx={{
        flex: 1,
      }}
    >
      {children}
    </Box>
    <Divider />
    <AboutMe />
    <Footer />
  </Container>
);
