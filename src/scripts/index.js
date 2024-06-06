import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/responsive.scss';
import './components/index';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  navButon: document.querySelector('.nav-btn'),
  navDrawer: document.querySelector('.navbar'),
  content: document.querySelector('.content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
