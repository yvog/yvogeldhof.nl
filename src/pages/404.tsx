import { NotFound } from '../components/NotFound/NotFound';
import { PageLayout } from '../components/PageLayout/PageLayout';
import { PageMeta } from '../components/PageMeta/PageMeta';
import { getAllPosts } from '../util/posts';

export default function NotFoundPage() {
  return (
    <PageLayout>
      <PageMeta title="404 - Not Found" robots="nofollow, noindex" />
      <NotFound />
    </PageLayout>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
