import { Typography } from '@mui/material';
import styled from 'styled-components';

export const FooterStyled = styled('footer')(() => ({
  display: 'flex',
  gridAutoFlow: 'row',
  margin: '0 24px',
  justifyContent: 'space-between',
}));

export const FooterVersionStyled = styled(Typography)(() => ({
  display: 'flex',
  fontSize: '12px',
  alignItems: 'end',
}));

export const FooterLinkStyled = styled(Typography)(() => ({
  fontWeight: '14px',
  display: 'flex',
  gap: '16px',
}));
