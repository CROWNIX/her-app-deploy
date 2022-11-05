import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.css';
import '../styles/list-restaurant.css';
import '../styles/favorite.css';
import '../styles/detail.css';
import '../styles/responsive.css';
import './views/components/app-shell/app-bar';
import './views/components/app-shell/foot-bar';
import './views/components/contents/skip-link';
import './views/components/contents/skeleton-ui';
import './views/components/contents/content-detail';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
