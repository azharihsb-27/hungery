import { allRestaurantItemTemplate } from '../views/templates/template-creator';

class RestaurantItem extends HTMLElement {
  _style = null;
  _restaurant = {
    id: null,
    name: null,
    description: null,
    pictureId: null,
    city: null,
    rating: null,
  };
  constructor() {
    super();

    this._style = document.createElement('style');
  }

  set restaurant(value) {
    this._restaurant = value;

    this.render();
  }

  get restaurant() {
    return this._restaurant;
  }

  _emptyContent() {
    this.innerHTML = '';
  }

  _styling() {
    this._style.textContent = `
      .all-kitchen_item {
        height: 100%;
        border: #4f4a45 2px solid;
        border-radius: 8px;
        position: relative;
        background-color: #f6f1ee;
        transition: all 0.2s ease-out;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
      }

      .all-kitchen_item_img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 4px 4px 0 0;
      }

      .all-kitchen_item_rating {
        position: absolute;
        top: 0;
        right: 0;
        padding: 4px 8px;
        background-color: #4f4a45;
        color: #f6f1ee;
        font-size: 0.8rem;
        border-bottom-left-radius: 4px;
      }
      .all-kitchen_item_rating p {
        margin: 0;
      }

      .all-kitchen_item_description {
        padding: 0 16px;
        margin: 10px 0;
      }
      .all-kitchen_item_description .kitchen-name {
        font-size: 1rem;
        font-weight: 500;
        padding: 11px 0;
        font-family: 'Poppins', sans-serif;
        text-decoration: none;
        color: #ed7d31;
      }
      .all-kitchen_item_description .kitchen-city {
        margin: 0 0 8px 0;
        font-size: 0.7rem;
        margin-top: 4px;
        font-weight: 400;
        color: #6c5f5b;
      }

      .all-kitchen_item:hover {
        transform: translateY(-5px);
      }
      
      @media screen and (min-width: 1024px) {
        .all-kitchen_item .all-kitchen_item_description .kitchen-name {
          font-size: 1.4rem;
        }
      }

      @media screen and (min-width: 1440px) {
        .all-kitchen_item .all-kitchen_item_description .kitchen-name {
          font-size: 1.4rem;
        }
      }
    `;
  }

  render() {
    this._emptyContent();
    this._styling();

    this.appendChild(this._style);
    this.innerHTML += allRestaurantItemTemplate(this._restaurant);
  }
}

customElements.define('restaurant-item', RestaurantItem);
