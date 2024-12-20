import type { Metadata, NextPage } from 'next';
import { Highlight } from '@components';
import Box from '@mui/material/Box';
import { TmuxCommands } from '@data';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'TMUX Tutorial | Vimal Menon',
  description: 'This is my personal website',
};

const TmuxPage: NextPage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <div>TMUX Commands:</div>
      {TmuxCommands.map((data, index) => {
        return (
          <Fragment key={index}>
            <Box component="p" sx={{ margin: 0.5 }}>
              {data.describe}
            </Box>
            <Highlight code={data.command} language={data.language} />
          </Fragment>
        );
      })}
    </Box>
  );
};

export default TmuxPage;
