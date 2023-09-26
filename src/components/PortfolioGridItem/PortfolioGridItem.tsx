
import HideImageOutlined from "@mui/icons-material/HideImageOutlined";
import { Theme, alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { PortfolioItem } from "../PortfolioGrid/PortfolioGrid";

type PortfolioGridItemProps = PortfolioItem & {
    onClick?: () => void;
}

export const PortfolioGridItem = ({
    imageUrl,
    title,
    featured,
    important,
    description,
    onClick
}: PortfolioGridItemProps) => {
    return (
        <Grid item sx={(theme: Theme) => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            aspectRatio: '1',
            overflow: 'hidden',
            position: 'relative',
            borderRadius: theme.spacing(2),
            transition: 'transform .5s cubic-bezier(.25, .1, .25, 1), box-shadow .5s cubic-bezier(.25, .1, .25, 1)',
            boxShadow: theme.palette.mode === 'light' ? `0 2px 12px -8px ${alpha(theme.palette.common.black, 0.5)}` : undefined,

            '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: theme.palette.mode === 'light' ? `0 8px 12px -8px ${alpha(theme.palette.common.black, 0.5)}` : undefined,
                cursor: 'pointer',

                '& figcaption': {
                    opacity: 1,
                    bottom: 0
                },

                '&:after': {
                    opacity: 1
                }
            },

            ...(imageUrl && {
                '&:after': {
                    content: '""',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    opacity: 0,
                    transition: 'opacity .5s ease',
                    background: `linear-gradient(transparent 25%, ${alpha(theme.palette.grey[700], 0.3)} 100%)`
                }
            }),

            ...(!imageUrl && {
                border: `1px dashed ${theme.palette.divider}`,
                boxShadow: 'none',

                '&:hover': {
                    //
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
            onClick={onClick}
        >
            <Box component='figure' sx={{
                ...(!imageUrl && {
                    width: 22,
                    height: 22
                })
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
                    height: '100%',
                    py: 1,
                    px: 1.5,
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',

                    opacity: 0,
                    transition: 'bottom .5s ease, opacity .5s ease',
                    zIndex: 1,

                    '& > span': {
                        fontSize: 12,
                        fontWeight: 600,
                        color: theme.palette.common.white,
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        maxWidth: 'max-content',
                        display: 'block'
                    }
                })}>
                    <span>
                        {title}
                    </span>
                </Typography>
            </Box>
        </Grid>
    )
}