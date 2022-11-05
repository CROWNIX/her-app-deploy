class SkeletonUi extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="wrapper">
        <div class="box__picture__skeleton"></div>
        <div class="box__name__skeleton skeleton"><p>Name Restaurant</p></div>
        <div class="box__description__skeleton description__listrestaurant skeleton">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur.</p>
        </div>
        <div class="box__rating__skeleton skeleton"><p>4.5</p></div>
        <div class="box__city__skeleton skeleton"><p>Jakarta</p></div>
      </div>
    `;
  }
}

customElements.define('skeleton-ui', SkeletonUi);
