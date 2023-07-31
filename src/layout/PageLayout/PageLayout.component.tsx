import { ReactChildren } from '@types';

import { Footer } from './Footer';
import { Header } from './Header';
import { BodyContainer, MainStyled } from './PageLayout.style';

export const PageLayout: React.FC<ReactChildren> = ({ children }) => {
  return (
    <MainStyled>
      <Header />
      <BodyContainer>{children}</BodyContainer>
      <Footer />
    </MainStyled>
  );
};
