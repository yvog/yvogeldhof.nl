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
            <PageMeta title="Portfolio" keywords={['portfolio']} />
            <PortfolioGrid items={portfolioItems} />
        </PageLayout>
    )
}

export async function getStaticProps() {
    return {
        props: {
            portfolioItems: [
                // todo: actual data
                {},
                {
                    featured: true,
                },
                {},
                {},
                {},
                {},
                {},
                {
                    important: true,
                },
                {
                    important: true
                },
                {},
                {},
                {},
                {},
                {}
            ]
        }
    }
}
