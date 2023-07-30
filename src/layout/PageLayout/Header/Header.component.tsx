import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
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
            const { Icon, url, name } = media;
            return (
              <Link href={url} target="_blank" rel="noreferrer" key={name}>
                <IconButton size="small">
                  <Icon />
                </IconButton>
              </Link>
            );
          })}
        </Toolbar>
      </AppBar>
    </HeaderStyled>
  );
};
