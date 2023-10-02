import { Theme } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { PortfolioGridItem } from "../PortfolioGridItem/PortfolioGridItem";
import { PortfolioItemDrawer } from "../PortfolioItemDrawer/PortfolioItemDrawer";

export type PortfolioItem = {
    id: string;
    imageUrl: string;
    title: string;
    description: string;
    period: string;
    featured?: boolean;
    important?: boolean;
    githubUrl?: string;
    websiteUrl?: string;
    buttons?: PortfolioItemButton[];
};

export type PortfolioItemButton = {
    text: string;
    href: string;
    bgColor?: string;
    textColor?: string;
};

type PortfolioGridProps = {
    items: PortfolioItem[];
};

export const PortfolioGrid = ({
    items
}: PortfolioGridProps) => {
    const [activePortfolioItem, setActivePortfolioItem] = useState<PortfolioItem>({} as PortfolioItem);
    const [drawerOpened, setDrawerOpened] = useState<boolean>(false);

    const desktopTileSize = 104;
    const mobileTileSize = 72;

    return (
        <>
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
                {items.map((itemProps) => <PortfolioGridItem
                    key={itemProps.id}
                    {...itemProps}
                    {...(itemProps.imageUrl && {
                        onClick: () => {
                            setActivePortfolioItem(itemProps);
                            setDrawerOpened(true);
                        }
                    })}
                />)
                }
            </Grid>

            <PortfolioItemDrawer onClose={() => setDrawerOpened(false)} opened={drawerOpened} portfolioItem={activePortfolioItem} />
        </>
    );
}
