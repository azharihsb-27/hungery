import RestaurantsSource from '../../data/restaurants-source';
import { skeletonRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <section id="hero" class="content hero">
          <div class="hero_description">
            <p>Since 2024</p>
            <h1>
              Spectacular taste from the best kitchen in <span>Nusantara</span>
            </h1>
          </div>
          <a class="explore" href="#all-kitchen">Explore Us</a>
        </section>

        <section id="about" class="about">
        <h1 class="about_title">About hungery<span>.</span></h1>
        <div class="about_description">
          <div class="about_description_content">
            <p>
              <span>hungery</span> is a revolutionary restaurant app designed to
              satisfy all your culinary cravings with ease and convenience.
              Hungery aims to revolutionize the way you dine out or order in.
            </p>
            <button>Book Table</button>
          </div>
        </div>
      </section>

        <section id="all-kitchen" class="all-kitchen">
          <h1 class="all-kitchen_title">All Kitchens<span>.</span></h1>
          <restaurant-list>${skeletonRestaurantItemTemplate(
            3
          )}</restaurant-list>
        </section>
    `;
  },

  async afterRender() {
    const allRestaurantContainer = document.querySelector('restaurant-list');
    const allRestaurantList =
      allRestaurantContainer.querySelector('.all-kitchen_list');
    const restaurants = await RestaurantsSource.restaurantLists();
    const restaurantItems = restaurants.map((restaurant) => {
      const restaurantItem = document.createElement('restaurant-item');
      restaurantItem.restaurant = restaurant;
      return restaurantItem;
    });
    allRestaurantList.innerHTML = '';
    allRestaurantList.append(...restaurantItems);
  },
};

export default Home;
