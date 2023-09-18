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
                    featured: true,
                },
                {
                    id: 'coins-pwa',
                    title: 'Coins PWA',
                    imageUrl: '/images/coins_pwa.png',
                },
                {},
                {},
                {},
                {},
                {
                    id: 'anhacore-engine',
                    title: 'AnhaCore Engine',
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
                    imageUrl: '/images/ukelele_gitaarles.png',
                },
                {},
                {},
                {}
            ]
        }
    }
}
