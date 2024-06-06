import FavoriteButtonInitiator from '../src/scripts/utils/favorite-button-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Favoriting a restaurant', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
  };

  beforeEach(() => {
    addFavoriteButtonContainer();
  });

  it('should show the favorite button when the restaurant has not been favorited before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="favorite this restaurant"]')
    ).toBeTruthy();
  });

  it('should not show the favorite button when the restaurant has not been favorited before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="unfavorite this restaurant"]')
    ).toBeFalsy();
  });

  it('should be able to favorite the restaurant', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    // Memastikan restaurant berhasil disukai
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });

    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it("should not add a restaurant again when it's already favorited", async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    // Tambahkan restaurant dengan ID 1 ke daftar restaurant yang disukai
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });

    // Simulasikan pengguna menekan tombol suka restaurant
    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([{ id: 1 }]);

    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({});

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });
});
