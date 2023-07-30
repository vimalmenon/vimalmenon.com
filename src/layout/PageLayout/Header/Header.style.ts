import Toolbar from '@mui/material/Toolbar';
import styled from 'styled-components';

export const HeaderStyled = styled('header')(() => ({
  display: 'flex',
}));

export const HeaderSocialMediaStyled = styled('section')(() => ({
  display: 'flex',
}));

export const ToolbarStyled = styled(Toolbar)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));
