class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="app-bar">
        <div class="app-bar__menu">
          <button id="hamburgerButton" aria-label="button hamburger for mobile">
            <strong><i class="material-icons">menu</i></strong>
          </button>
        </div>
        <div class="app-bar__brand">
          <strong>
            <p class="app-bar__brand-text">her</p>
          </strong>
        </div>
        <nav id="navigationDrawer" class="app-bar__navigation">
          <ul>
            <li><a href="#/list-restaurant">Home</a></li>
            <li><a href="#/favorite">Favorite</a></li>
            <li><a href="https://www.instagram.com/heriyanto.17/">About</a></li>
          </ul>
        </nav>
      </div>
    `;
  }
}

customElements.define('app-bar', AppBar);
