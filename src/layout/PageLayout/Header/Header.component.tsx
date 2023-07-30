import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';

import { SocialMedias } from '@data';

import { HeaderStyled, HeaderSocialMediaStyled, ToolbarStyled } from './Header.style';

export const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <AppBar component="nav">
        <ToolbarStyled>
          <div></div>
          <HeaderSocialMediaStyled>
            {SocialMedias.map((media) => {
              const { Icon, url, name } = media;
              return (
                <Link href={url} target="_blank" rel="noreferrer" key={name}>
                  <Tooltip title={name}>
                    <IconButton size="small">
                      <Icon />
                    </IconButton>
                  </Tooltip>
                </Link>
              );
            })}
          </HeaderSocialMediaStyled>
        </ToolbarStyled>
      </AppBar>
    </HeaderStyled>
  );
};
