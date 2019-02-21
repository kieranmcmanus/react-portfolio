import lmi from '../assets/lmi.png';
import spotify from '../assets/spotify.png';
import news from '../assets/news.png';

const PROJECTS = [
  {
    id: 1,
    title: 'The McManus Report.',
    description: 'Loudoun Music Instruction is a small business music instruction school in Lovettsville, Virginia. The site was constructed with a custom Wordpress theme, built from the ground up with PHP, Bootstrap, Javascript, jQuery, HTML & CSS, featuring a fully functional blog, event calendars, registration form, contact form, custom branding/design/photography, and all info necessary for any small business.',
    link: 'https://the-mcmanus-report.herokuapp.com/',
    linkDesc: 'Heroku',
    image: news
  },
  {
    id: 2,
    title: 'React + Spotify',
    description: 'React + Spotify is a web app built using React and Node.js, interacting with the Spotify API. Users can search for their favorite artist, view key info, and listen to top tracks.',
    link: 'https://mcmanus-spotify-app.herokuapp.com/',
    linkDesc: 'Heroku',
    image: spotify
  },
  {
    id: 3,
    title: 'Loudoun Music Instruction',
    description: 'Loudoun Music Instruction is a small business music instruction school in Lovettsville, Virginia. The site was constructed with a custom Wordpress theme, built from the ground up with PHP, Bootstrap, Javascript, jQuery, HTML & CSS, featuring a fully functional blog, event calendars, registration form, contact form, custom branding/design/photography, and all info necessary for any small business.',
    link: 'http://loudounmusic.com/',
    linkDesc: 'loudounmusic.com',
    image: lmi
  }
];

export default PROJECTS;
