import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
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
              <Link href={media.url} target="_blank" rel="noreferrer" key={media.name}>
                {media.name}
              </Link>
            );
          })}
        </Toolbar>
      </AppBar>
    </HeaderStyled>
  );
};
