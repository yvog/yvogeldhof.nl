import { HideImageOutlined } from '@mui/icons-material';
import { Box, Grid, Theme, Typography, alpha } from '@mui/material';

export type PortfolioItem = {
    id: string;
    imageUrl: string;
    title: string;
    description: string;
    featured?: boolean;
    important?: boolean;
};

type PortfolioGridProps = {
    items: PortfolioItem[];
};

const PortfolioGridItem = ({
    imageUrl,
    title,
    featured,
    important,
    description
}: PortfolioItem) => {
    return (
        <Grid item sx={(theme: Theme) => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            aspectRatio: '1',
            overflow: 'hidden',
            position: 'relative',
            borderRadius: theme.spacing(2),
            boxShadow: `0 0 ${theme.spacing(2)} 0 ${alpha(theme.palette.primary.main, 0.2)}`,
            transition: 'transform .25s ease',

            '&:hover': {
                transform: 'scale(1.05)',

                '& figcaption': {
                    bottom: 0
                }
            },

            ...(!imageUrl && {
                border: `1px dashed ${theme.palette.divider}`,
                boxShadow: 'none',

                '&:hover': {
                    transform: 'scale(1)'
                }
            }),

            ...(featured && {
                gridColumn: '1 / span 3',
                gridRow: '1 / span 3',
            }),

            ...(important && {
                gridColumn: 'auto / span 2',
                gridRow: 'auto / span 2',
            })
        })}
        >
            <Box component='figure' sx={{
                ...(!imageUrl && {
                    width: 22,
                    height: 22
                }),
            }}>
                {imageUrl && <Box component='img' src={imageUrl} alt={title} sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }} />}

                {!imageUrl && <HideImageOutlined fontSize='medium' sx={(theme: Theme) => ({
                    color: theme.palette.divider
                })} />}

                <Typography component='figcaption' variant='caption' sx={(theme: Theme) => ({
                    position: 'absolute',
                    left: 0,
                    bottom: '-100%',
                    width: '100%',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    background: alpha(theme.palette.common.white, 0.85),
                    color: theme.palette.grey[700],
                    fontSize: 12,
                    py: 1,
                    px: 1.5,
                    transition: 'bottom .25s .025s ease',
                })}>
                    {title}
                </Typography>
            </Box>
        </Grid>
    )
}

export const PortfolioGrid = ({
    items
}: PortfolioGridProps) => {
    const desktopTileSize = 104;
    const mobileTileSize = 72;

    return (
        <Grid
            container
            sx={(theme: Theme) => ({
                my: 4,
                gap: 2,
                display: 'grid',
                gridTemplateColumns: `repeat(auto-fit, minmax(${desktopTileSize}px, 1fr))`,
                gridAutoRows: `minmax(${desktopTileSize}px, 1fr)`,
                gridAutoFlow: 'dense',
                [theme.breakpoints.down('sm')]: {
                    gridTemplateColumns: `repeat(auto-fit, minmax(${mobileTileSize}px, 1fr))`,
                    gridAutoRows: `minmax(${mobileTileSize}px, 1fr)`,
                    gap: 1,
                }
            })}
        >
            {items.map((itemProps) => <PortfolioGridItem key={itemProps.id} {...itemProps} />)}
        </Grid>
    );
}
