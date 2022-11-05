class FootBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <p>Copyright &copy; 2020 - her, Inc</p>
    `;
  }
}

customElements.define('foot-bar', FootBar);
