import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import { SocialMedias } from '@data';

import { HeaderStyled } from './Header.style';

export const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <AppBar component="nav">
        <Toolbar>
          {SocialMedias.map((media) => {
            return (
              <a href={media.url} target="_blank" rel="noreferrer" key={media.name}>
                {media.name}
              </a>
            );
          })}
        </Toolbar>
      </AppBar>
    </HeaderStyled>
  );
};
