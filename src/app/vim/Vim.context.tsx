'use client';

import { VimContext as Context } from './Vim.service';
import { IReactChildren, FormMode, ICommand } from '@types';
import { useState } from 'react';

export const VimContext: React.FC<IReactChildren> = ({ children }) => {
  const [mode, setMode] = useState<FormMode>('VIEW');
  const [command, setCommand] = useState<ICommand | undefined>();
  return (
    <Context.Provider
      value={{
        mode,
        setMode,
        command,
        setCommand,
      }}
    >
      {children}
    </Context.Provider>
  );
};
