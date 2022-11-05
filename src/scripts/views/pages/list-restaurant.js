import RestaurantApiSource from '../../data/restaurantapi-source';
import {
  createRestaurantItemTemplate,
  createRequestFailedTemplate,
  createSkeletonRestaurantTemplate,
} from '../templates/template-creator';
import popup from '../../data/popup';

const ListRestaurant = {
  async render() {
    return `
    <img class="heros heros-list lazyload"
      src="./images/skeleton/placeholder.png"
      data-src="./images/heros-build/hero-image_4-large.jpg"
      data-srcset="./images/heros-build/hero-image_4-small.jpg 480w, ./images/heros-build/hero-image_4-large.jpg 920w"
      data-sizes="(max-width: 600px) 480px, 920px"
      alt="">
    <p>List Restaurant</p>

    <div class="fragment">
      <a href="#/list-restaurant" aria-label="Add to home">
        <div class="box__fragment">
            <i class="material-icons icon">home</i>
            <figcaption>Home</figcaption>
        </div>
      </a>
      <a href="#/favorite" aria-label="Add to favorite">
        <div class="box__fragment">
            <i class="material-icons icon">favorite</i>
            <figcaption>Favorite</figcaption>
        </div>
      </a>
      <a href="https://www.instagram.com/heriyanto.17/" aria-label="Add to about us">
        <div class="box__fragment">
            <i class="material-icons icon">info</i>
            <figcaption>About us</figcaption>
        </div>
      </a>
    </div>

    <div id="content">
      ${createSkeletonRestaurantTemplate(20)}
    </div>
    `;
  },

  async afterRender() {
    try {
      const restaurants = await RestaurantApiSource.listRestaurant();
      const restaurantsContainer = document.querySelector('#content');
      restaurantsContainer.innerHTML = '';
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch {
      popup.showAlert('Please check your internet connection');
      const restaurantsContainer = document.querySelector('#content');
      restaurantsContainer.innerHTML = createRequestFailedTemplate();
    }
  },
};

export default ListRestaurant;
