// import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Favorite = {
  async render() {
    return `
        <section id="favorite-kitchen" class="content favorite-kitchen">
          <h1 class="favorite-kitchen_title">Favorite Kitchens<span>.</span></h1>
          <restaurant-list></restaurant-list>
        </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const allRestaurantContainer = document.querySelector('restaurant-list');

    if (restaurants.length) {
      const restaurantItems = restaurants.map((restaurant) => {
        const restaurantItem = document.createElement('restaurant-item');
        restaurantItem.restaurant = restaurant;
        return restaurantItem;
      });

      allRestaurantContainer.innerHTML = '';
      allRestaurantContainer.append(...restaurantItems);
    } else {
      allRestaurantContainer.innerHTML =
        '<h2 class="favorite-kitchen_not-found">Favorite Kitchens Not Found</h2>';
    }
  },
};

export default Favorite;
