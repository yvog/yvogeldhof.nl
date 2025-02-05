import { NotFound } from '../components/NotFound/NotFound';
import { PageLayout } from '../components/PageLayout/PageLayout';
import { PageMeta } from '../components/PageMeta/PageMeta';

export default function NotFoundPage() {
  return (
    <PageLayout>
      <PageMeta title="404 - Not Found" robots="nofollow, noindex" />
      <NotFound />
    </PageLayout>
  );
}
