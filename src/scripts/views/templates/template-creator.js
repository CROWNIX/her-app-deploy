import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => {
  const { description } = restaurant;
  const filterDescription = description.substr(0, 170);
  return `
      <a href="${`/#/detail/${restaurant.id}`}">
        <div class="wrapper">
            <div class="box__picture">
                <img class="lazyload" src="./images/skeleton/placeholder.png" data-src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="${restaurant.name}">
            </div>
            <div class="box__name"><b>${restaurant.name}</b></div>
            <div class="box__description description__listrestaurant"><p>${filterDescription}</p></div>
            <div class="box__rating"><p>&#9733; ${restaurant.rating}</p></div>
            <div class="box__city"><p>${restaurant.city}</p></div>
        </div>
      </a>
    `;
};

const createSkeletonRestaurantTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
      <skeleton-ui></skeleton-ui>
    `;
  }
  return template;
};

const createRestaurantDetailTemplate = (restaurant) => {
  const contentDetailElement = document.createElement('content-detail');
  contentDetailElement.restaurant = restaurant;
  return contentDetailElement;
};

const createRestaurantDetailCategoriesTemplate = (restaurant) => {
  let category = '';
  let i = 0;
  while (i < restaurant.categories.length) {
    category += `${restaurant.categories[i].name} `;
    i += 1;
  }
  return `<figcaption>${category}</figcaption>`;
};

const createRestaurantDetailFoodsTemplate = (restaurant) => {
  let foods = '';
  let i = 0;
  while (i < restaurant.menus.foods.length) {
    foods += `<li class="box__menu"><p>${restaurant.menus.foods[i].name}</p></li>`;
    i += 1;
  }
  return `${foods}`;
};

const createRestaurantDetailDrinksTemplate = (restaurant) => {
  let drinks = '';
  let i = 0;
  while (i < restaurant.menus.drinks.length) {
    drinks += `<li class="box__menu"><p>${restaurant.menus.drinks[i].name}</p></li>`;
    i += 1;
  }
  return `${drinks}`;
};

const createRestaurantDetailReviewsTemplate = (restaurant) => {
  let review = '';
  let i = 0;
  while (i < restaurant.customerReviews.length) {
    review += `
      <li class="box__review">
        <div class="box__review__header">
          <p><b>${restaurant.customerReviews[i].name}</b></p>
          <p class="review__date">${restaurant.customerReviews[i].date}</p>
        </div>
        <div class="box__review__body">
          <p>${restaurant.customerReviews[i].review}</p>
        </div>
      </li>
    `;
    i += 1;
  }
  return `${review}`;
};

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton">
    <i class="material-icons">favorite_border</i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton">
    <i class="material-icons">favorite</i>
  </button>
`;

const createRequestFailedTemplate = () => `
  <div class="request__failed">
    <i class="material-icons">perm_scan_wifi</i>
    <p class="info__failed">Failed to load data</p>
    <p>Please check your internet connection</p>
  </div>
`;

const createRequestFailedDetailTemplate = () => `
  <div class="request__failed failed__detail">
    <i class="material-icons">perm_scan_wifi</i>
    <p class="info__failed">Failed to load data</p>
    <p>Please check your internet connection</p>
  </div>
`;

const createFavoriteEmptyTemplate = () => `
  <a href="#/list-restaurant" aria-label="find a restaurant now">
    <div class="favorite__empty">
      <i class="material-icons">playlist_add</i>
      <p>Your don't have a favorite restaurant yet</p>
    </div>
  </a>
`;

export {
  createRestaurantItemTemplate,
  createSkeletonRestaurantTemplate,
  createRestaurantDetailTemplate,
  createRestaurantDetailCategoriesTemplate,
  createRestaurantDetailFoodsTemplate,
  createRestaurantDetailDrinksTemplate,
  createRestaurantDetailReviewsTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createRequestFailedTemplate,
  createRequestFailedDetailTemplate,
  createFavoriteEmptyTemplate,
};
