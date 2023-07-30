import { Typography } from '@mui/material';

import { FooterStyled } from './Footer.style';
import jsonData from '../../../../package.json';

export const Footer: React.FC = () => {
  return (
    <FooterStyled>
      This is footer
      <Typography variant="body2" component="span">
        v{jsonData.version}
      </Typography>
    </FooterStyled>
  );
};
