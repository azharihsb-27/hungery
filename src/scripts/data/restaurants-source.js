import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantsSource {
  static async restaurantLists() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LISTS);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async restaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async createReview(review) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    };

    const response = await fetch(API_ENDPOINT.REVIEW, options);
    return response.json();
  }
}

export default RestaurantsSource;
