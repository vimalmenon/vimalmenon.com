import { Link } from '@mui/material';

import { AboutShort } from '@data';

import { AboutContainerStyled, AboutImageStyled, AboutDetailStyled } from './About.style';

export const About: React.FC = () => {
  return (
    <AboutContainerStyled>
      <AboutImageStyled>Image</AboutImageStyled>
      <AboutDetailStyled>
        {AboutShort}
        <section>
          <Link href="/about">About</Link>
        </section>
      </AboutDetailStyled>
    </AboutContainerStyled>
  );
};
