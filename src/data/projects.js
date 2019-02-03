import lmi from '../assets/lmi.png';
import spotify from '../assets/spotify.png';
import animals from '../assets/animals.png';

const PROJECTS = [
  {
    id: 1,
    title: 'Loudoun Music Instruction',
    description: 'Loudoun Music Instruction is a small business music instruction school in Lovettsville, Virginia. The site was constructed with a custom Wordpress theme, built from the ground up with PHP, Bootstrap, Javascript, jQuery, HTML & CSS, featuring a fully functional blog, event calendars, registration form, contact form, custom branding/design/photography, and all info necessary for any small business.',
    link: 'http://loudounmusic.com/',
    linkDesc: 'loudounmusic.com',
    image: lmi
  },
  {
    id: 2,
    title: 'React + Spotify',
    description: 'React + Spotify is a web app built using React and Node.js, interacting with the Spotify API. Users log in and authenticate their account with Spotify, then search for their favorite artist, view key info and listen to top tracks.',
    link: 'https://mcmanus-spotify-react-app.herokuapp.com/',
    linkDesc: 'Heroku',
    image: spotify
  },
  {
    id: 3,
    title: 'World Animal Protection',
    description: 'World Animal Protection is a global non-profit organization dedicated to improving the well-being of animals. This donation site was part of a TV ad campaign designed to drive monthly donations to help its mission. This was built using Blackbaud Luminate forms and I jumped into this existing project, learned the CMS and re-designed the page, fixed issues, and made everything mobile-responsive.',
    link: 'http://protecttheanimals.org/',
    linkDesc: 'protecttheanimals.org',
    image: animals
  }
];

export default PROJECTS;
