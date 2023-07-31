import { NextPage } from 'next/types';

import { PageLayout } from '@layout';
import { Home as HomePage } from '@pages';

const Home: NextPage = () => {
  return (
    <PageLayout>
      <HomePage />
    </PageLayout>
  );
};

export default Home;
