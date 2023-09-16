import { Avatar, Box, List, ListItem, Theme } from '@mui/material';
import React from 'react';
import { ColorModeToggle } from '../ColorModeToggle/ColorModeToggle';
import { RouteLink } from '../RouteLink/RouteLink';

export type HeaderProps = {
  buttons?: React.ReactNode;
}

export const Header = ({ buttons }: HeaderProps) => {
  return <Box component='header' sx={(theme: Theme) => ({
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
      <RouteLink href='/' variant="h4">
        Yvo Geldhof
      </RouteLink>
    </Box>

    <Box sx={{
      display: 'flex',
      alignItems: 'center'
    }}>
      <Box component='nav'>
        <List
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}>
          <ListItem>
            <RouteLink href='/' isActive={(router) =>
              (router.route === '/' && router.asPath === '/' || router.asPath.startsWith('/?')) ||
              router.route === '/posts/[...url]'
            }>
              Blog
            </RouteLink>
          </ListItem>
          <ListItem>
            <RouteLink href='/portfolio' isActive={(router) =>
              router.asPath === '/portfolio'
            }>
              Portfolio
            </RouteLink>
          </ListItem>
        </List>
      </Box>

      <div>
        {buttons}
        <ColorModeToggle />
      </div>
    </Box>
  </Box>;
}
