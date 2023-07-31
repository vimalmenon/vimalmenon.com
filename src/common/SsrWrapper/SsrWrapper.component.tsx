import React from 'react';

import NoSsr from '@mui/base/NoSsr';

import { ReactChildren } from '@types';

export const SsrWrapper: React.FC<ReactChildren> = ({ children }) => {
  if (process.env.NODE_ENV === 'development') {
    return <NoSsr>{children}</NoSsr>;
  } else {
    return <React.Fragment>{children}</React.Fragment>;
  }
};
