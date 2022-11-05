import UrlParser from '../../routes/url-parser';
import RestaurantApiSource from '../../data/restaurantapi-source';
import {
  createRestaurantDetailTemplate,
  createRestaurantDetailCategoriesTemplate,
  createRestaurantDetailFoodsTemplate,
  createRestaurantDetailDrinksTemplate,
  createRestaurantDetailReviewsTemplate,
  createRequestFailedDetailTemplate,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-presenter';
import popup from '../../data/popup';

const Detail = {
  async render() {
    return `
      <div id="contentDetail"></div>
    `;
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await RestaurantApiSource.detailRestaurant(url.id);

      const restaurantContainer = document.querySelector('#contentDetail');
      restaurantContainer.appendChild(createRestaurantDetailTemplate(restaurant));

      await LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('.box__favorite__color'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          rating: restaurant.rating,
          city: restaurant.city,
          description: restaurant.description,
          pictureId: restaurant.pictureId,
        },
      });

      this.renderContentRestaurant(restaurant);

      this.renderRateRestaurant(url);
    } catch {
      popup.showAlert('Please check your internet connection');
      const restaurantContainer = document.querySelector('#contentDetail');
      restaurantContainer.innerHTML = createRequestFailedDetailTemplate();
    }
  },

  renderContentRestaurant(restaurant) {
    const categoriesContainer = document.querySelector('.categories');
    categoriesContainer.innerHTML = createRestaurantDetailCategoriesTemplate(restaurant);

    const foodsContainer = document.querySelector('.foods');
    foodsContainer.innerHTML = createRestaurantDetailFoodsTemplate(restaurant);

    const drinksContainer = document.querySelector('.drinks');
    drinksContainer.innerHTML = createRestaurantDetailDrinksTemplate(restaurant);

    const reviewsContainer = document.querySelector('.reviews');
    reviewsContainer.innerHTML = createRestaurantDetailReviewsTemplate(restaurant);
  },

  renderRateRestaurant(url) {
    const inputName = document.querySelector('#name');
    const inputReview = document.querySelector('#review');
    const btnPostReview = document.querySelector('#btn__post__review');
    btnPostReview.addEventListener('click', async () => {
      if (inputName.value.length > 0 && inputReview.value.length > 0) {
        const confirmPost = popup.showConfirm('Do you want to post your review?');
        if (confirmPost) {
          const review = {
            id: url.id,
            name: inputName.value,
            review: inputReview.value,
          };
          await RestaurantApiSource.postReview(JSON.stringify(review));
          setTimeout(() => {
            popup.showAlert('Reload to see your post!');
            location.reload();
          }, 300);
        }
      } else {
        popup.showAlert('Please check your input!');
      }
    });
  },
};

export default Detail;
