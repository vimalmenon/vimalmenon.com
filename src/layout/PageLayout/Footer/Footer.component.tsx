import { Typography } from '@mui/material';

import { FooterStyled, FooterVersionStyled } from './Footer.style';
import jsonData from '../../../../package.json';

export const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <Typography variant="body2" component="span" sx={{ fontWeight: '14px' }}>
        Copyright &copy; 2023 Vimal Menon.
      </Typography>
      <FooterVersionStyled variant="body2">v{jsonData.version}</FooterVersionStyled>
    </FooterStyled>
  );
};
