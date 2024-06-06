import API_ENDPOINT from '../../globals/api-endpoint';

const allRestaurantItemTemplate = (restaurant) => `
    <div class="all-kitchen_item" key=${restaurant.id}>
        <picture>
          <source media="(max-width: 680px)" data-srcset=${API_ENDPOINT.SMALL_RESOLUTION_PICTURE(
            restaurant.pictureId
          )} class="all-kitchen_item_img">
          <img
            data-src=${API_ENDPOINT.LARGE_RESOLUTION_PICTURE(
              restaurant.pictureId
            )}
            alt="${restaurant.name} Image"
            class="all-kitchen_item_img lazyload"
          />
        </picture>
        <span class="all-kitchen_item_rating">
            <p>⭐️ ${restaurant.rating}</p>
        </span>
        <div class="all-kitchen_item_description">
            <a class="kitchen-name" href="/#/detail/${restaurant.id}">${
  restaurant.name || '-'
}</a>
            <p class="kitchen-city">${restaurant.city || '-'}</p>
        </div>
    </div>
`;

const skeletonRestaurantItemTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
    <div class="all-kitchen_item">
        <img
        src="./placeholder.jpg"
        alt="skeleton"
        width="100%" height="150px"
        class="all-kitchen_item_img skeleton"
        />
        <div class="all-kitchen_item_description">
            <p class="skeleton-message">Mohon tunggu...</p>
            <p class="skeleton">Lorem</p>
        </div>
    </div>
  `;
  }
  return template;
};

const restaurantDetailTemplate = ({ restaurant }) => `
    <div class="kitchen-detail_wrapper">
        <h1 class="kitchen-detail_title">
          ${restaurant.name} Restaurant
        </h1>
        <picture>
          <source media="(max-width: 680px)" data-srcset=${API_ENDPOINT.SMALL_RESOLUTION_PICTURE(
            restaurant.pictureId
          )} class="all-kitchen_item_img">
          <img
            data-src=${API_ENDPOINT.LARGE_RESOLUTION_PICTURE(
              restaurant.pictureId
            )}
            class="kitchen-detail_img lazyload"
            alt="${restaurant.name} Image"
          />
        </picture>
        <div class="kitchen-detail_description">
          <div class="kitchen-address-rating">
            <p class="kitchen-address">
              ${restaurant.address} <span>${restaurant.city}</span>
            </p>
            <p class="kitchen-rating">⭐️ ${restaurant.rating}</p>
          </div>
          <p class="kitchen-description">${restaurant.description}</p>
          <div class="kitchen-menu">
            <h2 class="kitchen-menu_title">Menus</h2>
            <div class="kitchen-menu_foods">
              <h3>Foods</h3>
              <ul class="food-list">
                ${restaurant.menus.foods
                  .map(
                    (food) => `
                <li class="food-item">${food.name}</li>
                `
                  )
                  .join('')}
              </ul>
            </div>
            <div class="kitchen-menu_drinks">
              <h3>Drinks</h3>
              <ul class="food-list">
                ${restaurant.menus.drinks
                  .map(
                    (drink) => `
                <li class="food-item">${drink.name}</li>
                `
                  )
                  .join('')}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
`;

const kitchenReviewTemplate = ({ restaurant }) => `
  <div class="kitchen-review_wrapper">
    <h2 class="kitchen-review_title">Reviews</h2>
    <form class="kitchen-review_user-form">
      <div class="form-group">
        <div class="form-input">
          <input type="text" name="name" id="name" aria-describedby="nameValidation" required>
          <label>Nama</label>
        </div>
        <div class="form-input">
          <textarea name="review" id="review" aria-describedby="reviewValidation" required></textarea>
          <label>Review</label>
        </div>
        <button id="createReviewButton">Kirim review</button>
      </div>
    </form>
    <ul class="kitchen-review_list">
      ${restaurant.customerReviews
        .map(
          (review) => `
      <li class="kitchen-review_item">
        <h4 class="kitchen-review_item_name">${review.name}</h4>
        <p class="kitchen-review_item_review">${review.review}</p>
      </li>
      `
        )
        .join('')}
    </ul>
  </div>
`;

const favoriteRestaurantButtonTemplate = () => `
  <button aria-label="favorite this restaurant" id="favoriteButton" class="favorite">
    <i class="far fa-heart"></i>
  </button>
`;

const unfavoritRestaurantButtonTemplate = () => `
  <button aria-label="unfavorite this restaurant" id="favoriteButton" class="favorite">
   <i class="fas fa-heart"></i>
  </button>
`;

export {
  allRestaurantItemTemplate,
  restaurantDetailTemplate,
  kitchenReviewTemplate,
  favoriteRestaurantButtonTemplate,
  unfavoritRestaurantButtonTemplate,
  skeletonRestaurantItemTemplate,
};
