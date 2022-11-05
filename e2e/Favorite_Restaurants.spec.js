const assert = require('assert');

Feature('Favorite Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');

  I.see("Your don't have a favorite restaurant yet", '.favorite__empty');

  I.amOnPage('/');

  I.seeElement('#content a');
});

Scenario('Liking one restaurant', async ({ I }) => {
  const firstRestaurant = locate('#content a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.wait(3);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#favoriteContent');

  I.wait(3);

  I.seeElement('.wrapper');
  const likedRestaurantTitle = await I.grabTextFrom('.wrapper');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking one restaurant', async ({ I }) => {
  const firstLikingRestaurant = locate('#content a').first();
  const firstLikingRestaurantText = await I.grabTextFrom(firstLikingRestaurant);
  I.click(firstLikingRestaurant);

  I.wait(3);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#favoriteContent');

  I.wait(3);

  I.seeElement('.wrapper');
  const favoriteRestaurantText = await I.grabTextFrom('.wrapper');

  assert.strictEqual(firstLikingRestaurantText, favoriteRestaurantText);

  const firstFavoriteRestaurant = locate('#favoriteContent a').first();
  const firstFavoriteRestaurantTitle = await I.grabTextFrom(firstFavoriteRestaurant);
  I.click(firstFavoriteRestaurant);

  assert.strictEqual(firstLikingRestaurantText, firstFavoriteRestaurantTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#favoriteContent');

  I.see("Your don't have a favorite restaurant yet", '.favorite__empty');
});

Scenario('Add a review to review list', async ({ I }) => {
  const myName = 'FRI3NDS';
  const myReview = 'E2E TEST';

  I.click(locate('#content a').first());

  I.seeElement('.rate');
  I.seeElement('#name');
  I.seeElement('#review');
  I.seeElement('#btn__post__review');

  I.fillField('#name', myName);
  I.fillField('#review', myReview);

  I.click('#btn__post__review');

  I.wait(3);

  I.acceptPopup();

  I.seeElement('.box__review');

  const myNameReviewContainer = await I.grabTextFrom(locate('.box__review__header b').last());
  const myReviewContainer = await I.grabTextFrom(locate('.box__review__body p').last());

  assert.strictEqual(myName, myNameReviewContainer);
  assert.strictEqual(myReview, myReviewContainer);
});
