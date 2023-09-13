import { Avatar, Box, Link, Theme, Typography } from '@mui/material'

export const AboutMe = () =>
  <Box sx={(theme: Theme) => ({
    display: 'flex',
    columnGap: theme.spacing(2),
    alignItems: 'center',
    marginTop: theme.spacing(4)
  })}>
    <Avatar alt="Yvo Geldhof" src="/images/author.jpg" sx={{
      width: 80,
      height: 80,
    }} />

    <div>
      <Typography variant="body2" fontWeight="bold" sx={(theme: Theme) => ({
        margin: `0 0 ${theme.spacing(0.5)} 0`,
      })}>
        Yvo Geldhof (Technical Front-end Developer @{' '}
        <Link href="https://macaw.nl" target="_blank" underline="hover">
          Macaw
        </Link>
        )
      </Typography>

      <Typography variant="body2" sx={(theme: Theme) => ({
        maxWidth: '75%',
        [theme.breakpoints.down('sm')]: {
          maxWidth: 'unset',
        },
      })}>
        writes about front-end development, game development and everything in between
        as long as it is about tech.
      </Typography>
    </div>
  </Box>
