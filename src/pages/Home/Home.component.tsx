import React from 'react';

import { About } from './About';
import { Experience } from './Experience';

export const Home: React.FC = () => {
  return (
    <div>
      <About />
      <Experience />
    </div>
  );
};
