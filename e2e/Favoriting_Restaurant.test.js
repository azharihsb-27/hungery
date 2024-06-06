const assert = require('assert');

Feature('Favoriting Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Showing empty favorited restaurant', ({ I }) => {
  I.seeElement('#favorite-kitchen');

  I.see('Favorite Kitchens Not Found', '.favorite-kitchen_not-found');
});

Scenario('Favoriting one restaurant', async ({ I }) => {
  I.see('Favorite Kitchens Not Found', '.favorite-kitchen_not-found');

  I.amOnPage('/');

  I.waitForElement('restaurant-list', 3);
  I.seeElement('restaurant-list');

  I.waitForElement('restaurant-item', 3);
  I.seeElement('restaurant-item');

  I.seeElement('.kitchen-name');
  const firstRestaurant = locate('.kitchen-name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('restaurant-item');
  const favoritedRestaurantName = await I.grabTextFrom('.kitchen-name');

  assert.strictEqual(firstRestaurantName, favoritedRestaurantName);
});

Scenario('Unfavoriting one restaurant', async ({ I }) => {
  I.see('Favorite Kitchens Not Found', '.favorite-kitchen_not-found');

  I.amOnPage('/');

  I.waitForElement('restaurant-list', 3);
  I.seeElement('restaurant-list');

  I.waitForElement('restaurant-item', 3);
  I.seeElement('restaurant-item');

  I.seeElement('.kitchen-name');
  const firstRestaurant = locate('.kitchen-name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('restaurant-item');
  const favoritedRestaurantName = await I.grabTextFrom('.kitchen-name');

  assert.strictEqual(firstRestaurantName, favoritedRestaurantName);

  I.seeElement('.kitchen-name');
  I.click('.kitchen-name');

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.see('Favorite Kitchens Not Found', '.favorite-kitchen_not-found');
});
