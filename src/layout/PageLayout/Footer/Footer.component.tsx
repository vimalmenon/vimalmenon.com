import { Typography } from '@mui/material';

import { FooterStyled } from './Footer.style';
import jsonData from '../../../../package.json';

export const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <Typography variant="body2" component="span"></Typography>
      <Typography
        variant="body2"
        component="span"
        sx={{ display: 'flex', fontSize: '12px', alignItems: 'end' }}
      >
        v{jsonData.version}
      </Typography>
    </FooterStyled>
  );
};
