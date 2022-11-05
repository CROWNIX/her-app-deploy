import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import {
  createRestaurantItemTemplate,
  createFavoriteEmptyTemplate,
} from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <img class="heros heros-favorite lazyload"
        src="./images/skeleton/placeholder.png"
        data-src="./images/heros-build/hero-image_2-large.jpg"
        data-srcset="./images/heros-build/hero-image_2-small.jpg 480w, ./images/heros-build/hero-image_2-large.jpg 920w"
        data-sizes="(max-width: 600px) 480px, 920px"
        alt="">
      <p>Favorite Restaurant</p>

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

      <div id="favoriteContent">
        <div class="loader"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#favoriteContent');
    const loader = document.querySelector('.loader');
    if (restaurants.length > 0) {
      setTimeout(() => {
        restaurantsContainer.innerHTML = '';
        restaurants.forEach((restaurant) => {
          restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
        loader.style.display = 'none';
      }, 200);
    } else {
      setTimeout(() => {
        restaurantsContainer.innerHTML = createFavoriteEmptyTemplate();
        loader.style.display = 'none';
      }, 200);
    }
  },
};

export default Favorite;
