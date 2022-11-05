import CONFIG from '../../../globals/config';

class ContentDetail extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    const { description } = this._restaurant;
    const filter = description.substr(0, 300);
    this.innerHTML = `
      <div class="wrapper__heros">
        <img class="heros__detail lazyload"
          src="./images/skeleton/placeholder.png"
          data-src="${CONFIG.BASE_IMAGE_URL_MEDIUM}/${this._restaurant.pictureId}"
          data-srcset="${CONFIG.BASE_IMAGE_URL}/${this._restaurant.pictureId} 480w, ${CONFIG.BASE_IMAGE_URL_MEDIUM}/${this._restaurant.pictureId} 920w"
          data-sizes="(max-width: 600px) 480px, 920px"
          alt="${this._restaurant.name}">
      </div>
      <div class="wrapper__detail__page">
        <div class="box__title">
          <div class="box__detail__title">
            <p><span class="title__detail">${this._restaurant.name}</span><br>${this._restaurant.address}, ${this._restaurant.city}</p>
          </div>
          <div class="box__favorite__detail">
            <div class="box__favorite__color"></div>
          </div>
        </div>
        <div class="box__fragment__detail">
          <div class="box__fragment__detail__single">
            <i class="material-icons icon__detail">star</i>
            <figcaption>Rating ${this._restaurant.rating}</figcaption>
          </div>
          <div class="box__fragment__detail__single">
            <i class="material-icons icon__detail">place</i>
            <figcaption>${this._restaurant.city}</figcaption>
          </div>
          <div class="box__fragment__detail__single">
            <i class="material-icons icon__detail">storefront</i>
            <div class="categories"></div>
          </div>
        </div>
        <div class="box__description__detail description__detail">
          <p>${filter}</p>
        </div>
        <div class="box__menus">
          <p>Food Menu</p>
          <ul class="menus foods"></ul>
        </div>
        <div class="box__menus">
          <p>Drink Menu</p>
          <ul class="menus drinks"></ul>
        </div>
      </div>
      <div class="wrapper__customerReviews">
        <p>Reviews</p>
        <ul class="reviews"></ul>
      </div>
      <div class="wrapper__customerReviews">
        <p>Please rate this restaurant</p>
        <div class="rate">
          <div class="rate__input">
            <input id="name" type="text" placeholder="Name" class="rate__input__name">
            <label for="name">Please input your name</label>
            <input id="review" type="text" placeholder="Review" class="rate__input__review">
            <label for="review">Please input your review</label>
            <button id="btn__post__review">Post</button>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('content-detail', ContentDetail);
