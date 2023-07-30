import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import { HeaderStyled } from './Header.style';

export const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <AppBar component="nav">
        <Toolbar>Working on Toolbar</Toolbar>
      </AppBar>
    </HeaderStyled>
  );
};
