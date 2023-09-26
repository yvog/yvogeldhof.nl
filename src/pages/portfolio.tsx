import { PageLayout } from '../components/PageLayout/PageLayout';
import { PageMeta } from '../components/PageMeta/PageMeta';
import { PortfolioGrid, PortfolioItem } from '../components/PortfolioGrid/PortfolioGrid';

type PortfolioPageProps = {
    portfolioItems: PortfolioItem[];
}

export default function PortfolioPage(props: PortfolioPageProps) {
    const { portfolioItems } = props

    return (
        <PageLayout>
            <PageMeta title="Portfolio" keywords={['portfolio', 'projects']} />
            <PortfolioGrid items={portfolioItems} />
        </PageLayout>
    )
}

export async function getStaticProps() {
    return {
        props: {
            portfolioItems: [
                {},
                {
                    id: 'circle-rally-party',
                    title: 'Circle Rally Party',
                    imageUrl: '/images/circle_rally_party.png',
                    description: "A challenging, family-friendly, 1 to 4 players local multiplayer party game with mini games about doing donuts with cars. Use your car's unique attack at the right time, and collect power-ups to improve your odds. Traffic rules do not apply!",
                    featured: true,
                    buttons: [{
                        text: 'Play in browser',
                        href: 'https://games.yvogeldhof.nl/circle-rally-party/',
                    }, {
                        text: 'Download on itch.io',
                        href: 'https://yvogdev.itch.io/circle-rally-party',
                        bgColor: '#FF2449',
                        textColor: '#FFF',
                    }, {
                        text: 'Download on STEAM',
                        href: 'https://store.steampowered.com/app/992950/Circle_Rally_Party/',
                        bgColor: '#222',
                        textColor: '#FFF',
                    }]
                },
                {
                    id: 'coins-pwa',
                    title: 'Coins PWA',
                    description: "Make your (euro) coin collection portable using this app.",
                    imageUrl: '/images/coins_pwa.png',
                    githubUrl: 'https://github.com/yvog/coins-pwa'
                },
                {},
                {},
                {},
                {},
                {
                    id: 'anhacore-engine',
                    title: 'AnhaCore Engine',
                    description: "A 2D game engine written in TypeScript and WebGL.",
                    imageUrl: '/images/anhacore_engine.png',
                    important: true,
                },
                {
                    important: true
                },
                {},
                {
                    id: 'ukelele-gitaarles',
                    title: 'Ukelele-Gitaarles',
                    description: "New company website for Ukelele-Gitaarles",
                    imageUrl: '/images/ukelele_gitaarles.png',
                    githubUrl: 'https://github.com/yvog/ukelele-gitaarles-v2',
                    websiteUrl: 'https://ukelele-gitaarles.nl'
                },
                {},
                {},
                {}
            ]
        }
    }
}
