class RestaurantList extends HTMLElement {
  _style = null;

  constructor() {
    super();

    this._style = document.createElement('style');
  }

  connectedCallback() {
    this.render();
  }

  _emptyContent() {
    this.innerHTML = '';
  }

  _styling() {
    this._style.textContent = `
      .all-kitchen_list {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 12px;
        padding: 24px 0;
      }

      .skeleton {
        position: relative;
      }
      .skeleton-message {
        color: ##6C5F5B;
      }
      .skeleton::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 30%;
        height: 100%;
        z-index: 99;
        background: linear-gradient(90deg, #eee, #f9f9f9, #eee);
        background-size: 200%;
        animation: skeleton 1s infinite reverse;
      }
      .skeleton:last-child::before {
        width: 20%;
      }
      @keyframes skeleton {
        0% {
          background-position: -100% 0;
        }
        100% {
          background-position: 100% 0;
        }
      }

      
      @media screen and (min-width: 768px) {
        .all-kitchen_list {
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
      }

      @media screen and (min-width: 1024px) {
        .all-kitchen_list {
          grid-template-columns: repeat(3, 1fr);
        }
      }
    `;
  }

  render() {
    this._emptyContent();
    this._styling();

    this.appendChild(this._style);
    this.innerHTML += `
        <div class="all-kitchen_list"></div>
    `;
  }
}

customElements.define('restaurant-list', RestaurantList);
