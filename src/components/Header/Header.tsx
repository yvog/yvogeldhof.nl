import { Avatar, Box, Link as MuiLink, Theme } from '@mui/material';
import Link from 'next/link';
import { ColorModeToggle } from '../ColorModeToggle/ColorModeToggle';

export type HeaderProps = {
  buttons?: React.ReactNode;
}

export const Header = ({ buttons }: HeaderProps) =>
  <Box component='header' sx={(theme: Theme) => ({
    margin: `${theme.spacing(2)} 0 ${theme.spacing(2)} 0`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  })}>
    <Box sx={(theme: Theme) => ({
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(2),
    })}>
      <Avatar alt="Yvo Geldhof" src="/images/author.jpg" sx={{
        width: 40,
        height: 40
      }} />
      <Link href="/" passHref>
        <MuiLink variant="h4" underline="hover" color="primary">
          <span>Yvo Geldhof</span>
        </MuiLink>
      </Link>
    </Box>

    <div>
      {buttons}
      <ColorModeToggle />
    </div>
  </Box>
