'use client';

import { AboutShort } from '@data';

import { AboutContainerStyled, AboutImageStyled, AboutDetailStyled } from './About.style';

export const About: React.FC = () => {
  return (
    <AboutContainerStyled>
      <AboutImageStyled>Image</AboutImageStyled>
      <AboutDetailStyled>{AboutShort}</AboutDetailStyled>
    </AboutContainerStyled>
  );
};
