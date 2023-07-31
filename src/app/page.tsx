import { ReactElement } from 'react';

import { PageLayout } from '@layout';
import { Home as HomePage } from '@pages';

export default function Home(): ReactElement {
  return (
    <PageLayout>
      <HomePage />
    </PageLayout>
  );
}
