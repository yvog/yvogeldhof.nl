import Close from "@mui/icons-material/Close";
import GitHub from "@mui/icons-material/GitHub";
import Launch from "@mui/icons-material/Launch";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import IconButton from "@mui/material/IconButton";
import Typography from '@mui/material/Typography';
import { Theme, lighten } from '@mui/material/styles';
import { PortfolioItem } from '../PortfolioGrid/PortfolioGrid';

type PortfolioItemDrawerProps = Omit<DrawerProps, 'PaperProps' | 'onClose' | 'open'> & {
  portfolioItem: PortfolioItem;
  opened: boolean;
  onClose: () => void;
}

export const PortfolioItemDrawer = ({
  portfolioItem,
  opened,
  onClose,
  ...drawerProps
}: PortfolioItemDrawerProps) => {
  const { title, description, imageUrl, githubUrl, websiteUrl, buttons } = portfolioItem;
  const iconButtonSxProps = {
    sx: (theme: Theme) => ({
      transform: `translateX(-${theme.spacing(1)})`,
    })
  };

  return (
    <Drawer
      {...drawerProps}
      open={opened}
      anchor="bottom"
      onClose={(event, reason) => {
        onClose();
      }}
      PaperProps={{
        sx: (theme: Theme) => ({
          borderTopLeftRadius: theme.spacing(2),
          borderTopRightRadius: theme.spacing(2),
          boxSizing: 'border-box',
          maxWidth: `calc(100%- (${theme.spacing(4)} * 2))`,
          margin: '0 auto',
          maxHeight: 'minmax(500, 100vh)',
          backgroundImage: 'unset',

          [theme.breakpoints.up('md')]: {
            borderBottomLeftRadius: theme.spacing(2),
            borderBottomRightRadius: theme.spacing(2),
            maxWidth: 720,
            marginBottom: theme.spacing(8),
          },
        }),
      }}
    >
      <IconButton onClick={onClose} aria-label="Close pop-up" color="secondary" sx={(theme: Theme) => ({
        position: 'absolute',
        right: theme.spacing(3),
        top: theme.spacing(3)
      })}>
        <Close />
      </IconButton>

      <Box
        sx={{
          p: 4,
          display: 'flex',
          gap: 4,
        }}
      >
        <Box component='img' src={imageUrl} alt={title} sx={(theme: Theme) => ({
          width: 80,
          height: 80,
          borderRadius: theme.spacing(2),
          objectFit: 'cover',
        })} />

        <div>
          <Typography variant="h4" component="h2" mb={2}>
            {title}
          </Typography>

          <Typography variant="body1" component="p" sx={{
            wordBreak: 'break-word',
          }}>
            {description}
          </Typography>

          <Box sx={{
            mt: 2,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
          }}>
            {githubUrl && <IconButton href={githubUrl} aria-label="View project on GitHub" color="primary"
              target="_blank" {...iconButtonSxProps}>
              <GitHub />
            </IconButton>}

            {websiteUrl && <IconButton href={websiteUrl} aria-label="View website" color="primary"
              target="_blank" {...iconButtonSxProps}>
              <Launch />
            </IconButton>}

            {buttons?.map((button) => <Button
              key={button.text}
              sx={(theme: Theme) => ({
                background: button.bgColor,
                color: button.textColor,
                textTransform: 'none',
                borderRadius: theme.spacing(2),
                px: 2,
                whiteSpace: 'nowrap',

                ...(button.bgColor && {
                  '&:hover': {
                    background: lighten(button.bgColor, 0.15)
                  }
                })
              })}
              href={button.href}
              target='_blank'
            >
              {button.text}
            </Button>)}
          </Box>
        </div>
      </Box>
    </Drawer >
  )
}
