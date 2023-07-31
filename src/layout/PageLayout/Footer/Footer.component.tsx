import { Typography } from '@mui/material';
import Link from '@mui/material/Link';

import { FooterLinks } from '@data';

import { FooterLinkStyled, FooterStyled, FooterVersionStyled } from './Footer.style';
import jsonData from '../../../../package.json';

export const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <Typography variant="body2" component="span" sx={{ fontWeight: '14px' }}>
        Copyright &copy; 2023 Vimal Menon.
      </Typography>
      <FooterLinkStyled variant="body2">
        {FooterLinks.map((link) => {
          if (link.isReady) {
            return (
              <Link href={link.url} key={link.name} sx={{ textDecoration: 'none' }}>
                {link.name}
              </Link>
            );
          }
          return null;
        })}
      </FooterLinkStyled>
      <FooterVersionStyled variant="body2">v{jsonData.version}</FooterVersionStyled>
    </FooterStyled>
  );
};
