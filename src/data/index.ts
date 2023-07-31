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

// All the Pages
const HomePage = {
  name: 'Home',
  url: '/',
  isReady: true,
};
const AboutPage = {
  name: 'About',
  url: '/about',
  isReady: true,
};
const ContactPage = {
  name: 'Contact',
  url: '/contact',
  isReady: true,
};
const IdeasPage = {
  name: 'Ideas',
  url: '/ideas',
  isReady: true,
};
export const FooterLinks = [HomePage, AboutPage, ContactPage, IdeasPage];

export const AboutShort = `
  My name is Vimal Menon, I am a developer, I stay in HK and work for a bank.
  I have developed many applications from the scratch in web, mobile, cloud, Web3 and many more.
  This is best thing that I think i got into as there is lots of creative opportunities and idea I can try.

  I have a small YouTube Channel, where I talk about coding, life, health, vlogging and many other topics.

  I am big Web3 believer, there are lots of real use case problem that block chain can be fix.
`;
