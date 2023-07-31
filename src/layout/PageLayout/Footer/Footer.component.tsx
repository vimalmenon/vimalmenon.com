import { Typography } from '@mui/material';
import Link from '@mui/material/Link';

import { FooterLinks } from '@data';

import { FooterStyled, FooterVersionStyled } from './Footer.style';
import jsonData from '../../../../package.json';

export const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <Typography variant="body2" component="span" sx={{ fontWeight: '14px' }}>
        Copyright &copy; 2023 Vimal Menon.
      </Typography>
      <Typography
        variant="body2"
        component="span"
        sx={{ fontWeight: '14px', display: 'flex', gap: 2, textDecoration: 'none' }}
      >
        {FooterLinks.map((link) => {
          return (
            <Link href={link.url} key={link.name}>
              {link.name}
            </Link>
          );
        })}
      </Typography>
      <FooterVersionStyled variant="body2">v{jsonData.version}</FooterVersionStyled>
    </FooterStyled>
  );
};
