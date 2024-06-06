import RestaurantsSource from '../data/restaurants-source';
import { kitchenReviewTemplate } from '../views/templates/template-creator';

const KitchenReviewInitiator = {
  async init({ kitchenReviewContainer, restaurant }) {
    this._kitchenReviewContainer = kitchenReviewContainer;
    this._restaurant = restaurant;

    await this._renderKitchenReview();
  },

  async _renderKitchenReview() {
    this._kitchenReviewContainer.innerHTML = kitchenReviewTemplate({
      restaurant: this._restaurant,
    });

    const form = document.querySelector('form');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const reviewerName = document.getElementById('name').value;
      const reviewMessage = document.getElementById('review').value;

      const review = {
        id: this._restaurant.id,
        name: reviewerName,
        review: reviewMessage,
      };

      const reviewButton = document.getElementById('createReviewButton');
      reviewButton.innerText = 'Terima kasih telah memberi review!';
      setTimeout(() => {
        reviewButton.innerText = 'Kirim review';
      }, 1500);

      await RestaurantsSource.createReview(review);
    });
  },
};

export default KitchenReviewInitiator;
