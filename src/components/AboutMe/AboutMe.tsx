import { Theme } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export const AboutMe = () => (
  <Box
    sx={(theme: Theme) => ({
      display: 'flex',
      columnGap: theme.spacing(2),
      alignItems: 'center',
      marginTop: theme.spacing(4),
    })}
  >
    <Avatar
      alt="Yvo Geldhof"
      src="/images/author.jpg"
      sx={{
        boxShadow: 2,
        width: 80,
        height: 80,
      }}
    />

    <div>
      <Typography
        variant="body2"
        fontWeight="bold"
        sx={(theme: Theme) => ({
          margin: `0 0 ${theme.spacing(0.5)} 0`,
        })}
      >
        Yvo Geldhof - Front-end Developer @{' '}
        <Link href="https://npo.nl" target="_blank" underline="hover">
          Nederlandse Publieke Omroep (NPO)
        </Link>
      </Typography>

      <Typography
        variant="body2"
        sx={(theme: Theme) => ({
          maxWidth: '75%',
          [theme.breakpoints.down('sm')]: {
            maxWidth: 'unset',
          },
        })}
      >
        writes about front-end development, game development and everything in between
        as long as it is about tech.
      </Typography>
    </div>
  </Box>
);
