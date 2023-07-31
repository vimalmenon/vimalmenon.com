import React from 'react';

import { About } from './About';
import { Experience } from './Experience';
import { YouTube } from './YouTube';

export const Home: React.FC = () => {
  return (
    <div>
      <About />
      <Experience />
      <YouTube />
    </div>
  );
};
