import { HideImageOutlined } from '@mui/icons-material';
import { Box, Grid, Theme } from '@mui/material';

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
            ...(!imageUrl && {
                border: `1px dashed ${theme.palette.divider}`
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
            <Box>
                {imageUrl && <Box component='img' src={imageUrl} alt={title} sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }} />}
                {!imageUrl && <HideImageOutlined fontSize='medium' sx={(theme: Theme) => ({
                    color: theme.palette.divider,
                    transform: 'translateX(-2px)',
                    [theme.breakpoints.down('sm')]: {
                        transform: 'translateY(3px)',
                    }
                })} />}
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
