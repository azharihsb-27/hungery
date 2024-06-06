import CONFIG from './config';

const API_ENDPOINT = {
  RESTAURANT_LISTS: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  SEARCH_RESTAURANT: (query) => `${CONFIG.BASE_URL}/search?q=${query}`,
  REVIEW: `${CONFIG.BASE_URL}/review`,
  SMALL_RESOLUTION_PICTURE: (pictureId) =>
    `${CONFIG.BASE_PICTURE_URL}/small/${pictureId}`,
  LARGE_RESOLUTION_PICTURE: (pictureId) =>
    `${CONFIG.BASE_PICTURE_URL}/large/${pictureId}`,
};

export default API_ENDPOINT;
