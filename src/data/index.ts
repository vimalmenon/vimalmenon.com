import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const YouTube = {
  name: 'YouTube',
  url: 'https://www.youtube.com/@i_am_vimalmenon',
  Icon: YouTubeIcon,
};
const Twitter = {
  name: 'Twitter',
  url: 'https://twitter.com/i/flow/login?redirect_after_login=%2FVimalMenon14',
  Icon: TwitterIcon,
};
const Linkedin = {
  name: 'Linkedin',
  url: 'https://www.linkedin.com/in/vimal-menon-72ab931a/',
  Icon: LinkedInIcon,
};

export const SocialMedias = [YouTube, Twitter, Linkedin];

const AboutPage = {
  name: 'About',
  url: '/about',
};
const ContactPage = {
  name: 'Contact',
  url: '/contact',
};
export const FooterLinks = [AboutPage, ContactPage];
