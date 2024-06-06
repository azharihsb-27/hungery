import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({ navButon, navDrawer, content }) {
    this._navButon = navButon;
    this._navDrawer = navDrawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      navButton: this._navButon,
      navDrawer: this._navDrawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();

    const header = document.querySelector('header');
    const homeNav = ['/', '/home'];
    header.style.backgroundColor = homeNav.includes(url)
      ? 'transparent'
      : '#ed7d31';

    await page.afterRender();

    const skipToContentButton = document.querySelector('#skip-to-content');
    skipToContentButton.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#content').focus();
    });
  }
}

export default App;
