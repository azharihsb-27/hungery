import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import RestaurantsSource from '../../data/restaurants-source';
import UrlParser from '../../routes/url-parser';
import FavoriteButtonPresenter from '../../utils/favorite-button-presenter';
import KitchenReviewInitiator from '../../utils/kitchen-review-initiator';
import { restaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <section id="detail" class="detail"></section>
      <section id="kitchenReview" class="kitchen-review"></section>
      <div id="favoriteButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await RestaurantsSource.restaurantDetail(url.id);

    const { restaurant } = restaurants;
    const detailContainer = document.querySelector('#detail');
    detailContainer.innerHTML = restaurantDetailTemplate({ restaurant });

    KitchenReviewInitiator.init({
      kitchenReviewContainer: document.querySelector('#kitchenReview'),
      restaurant,
    });

    FavoriteButtonPresenter.init({
      favoriteButtonContainer: document.querySelector(
        '#favoriteButtonContainer'
      ),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        rating: restaurant.rating,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
      },
    });
  },
};

export default Detail;
