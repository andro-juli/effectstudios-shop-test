<template>
  <div class="single__details">
    <div>
      <p class="product-name">{{ product.product_name }}</p>
      <div class="stats-panel flex items-center justify-between">
        <div class="flex items-center gap-4">
          <p class="price">€{{ product.variants[0].price }}</p>
          <p v-if="saved !== 'No compare price'" class="initial-price">€{{ product.variants[0].compare_at_price }}</p>
          <p v-if="saved !== 'No compare price'" class="discount">Save {{ saved }}%</p>
        </div>
        <button class="add-to-fav flex items-center"> <span><img :src="heart" alt="heart-icon" /></span> <span
            class="add-to-fav-text">Add to
            Favorites</span> </button>
      </div>
      <div v-html="product.description" class="product-description">
      </div>
      <div class="read-more" @click="readMore">Read More!!!</div>

      <div class="form__area">
        <div class="form_row">
          <div class="flex items-center">
            <p class="row-name">Size</p>
          </div>
          <div class="form_row-right grid-item flex">
            <div class="dropdown flex items-center">
              <input placeholder="Select a shirt size" />
              <SvgDown />
            </div>
            <button class="view-size-chart">View Size Chart</button>
          </div>
        </div>
        <div class="form_row">
          <div class="flex items-center">
            <p class="row-name">Name</p>
          </div>
          <div class="form_row-right flex">
            <div class="dropdown flex items-center">
              <input placeholder="What name would you want in the shirt?" />
            </div>
          </div>
        </div>
        <div class="form_row">
          <div class="flex items-center">
            <p class="row-name">Number on Shirt</p>
          </div>
          <div class="form_row-right flex">
            <div class="dropdown flex items-center">
              <input placeholder="Enter a number between 0 and 99" />
            </div>
          </div>
        </div>
        <div class="form_row">
          <div class="flex items-center">
            <p class="row-name">Patch</p>
          </div>
          <div class="form_row-right flex">
            <div class="dropdown flex items-center">
              <input placeholder="Select a patch" />
              <SvgDown />
            </div>
          </div>
        </div>
        <div class="form_row">
          <div class="flex items-center">
            <p class="row-name">Quantity</p>
          </div>
          <div class="form_row-right flex">
            <div class="dropdown quantity flex items-center">
              <input placeholder="1" type="number" min="1" />
            </div>
          </div>
        </div>
      </div>
      <div role="button" class="add-to-cart" @click="store.increment">
        <div class="add-to-cart-text">
          <p>Add to Cart</p>
        </div>
        <div class="shopping-cart grid place-content-center">
          <img :src="cart" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import heart from "@/assets/icons/svg/heart-outline.svg";
import cart from "@/assets/icons/png/shopping-cart-white.png";
import { useGetPrice } from "~/composables/useGetPrice";
import { useAddToCartStore } from "~/store/cart";
const props = defineProps({
  product: {
    type: Object,
  }
});

const store = useAddToCartStore();

const { getInfo } = useGetPrice()

function readMore() {
  const label = document.querySelector(".product-description");
  label.classList.toggle("product-description--readMore");
};

const product = computed(() => props.product);
const saved = computed(() => getInfo(props.product));

</script>

<style lang="scss" scoped>
.single__details {
  margin: auto;

  .product-name {
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;

    @media (min-width: 600px) {
      font-size: 22px;
      line-height: 36px;
    }
  }

  .price {
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;

    @media (min-width: 600px) {
      font-size: 24px;
      line-height: 38px;
    }
  }

  .initial-price {
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: line-through;
    color: var(--red);
  }

  .discount {
    padding: 4px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: var(--white);
    background: #23C353;

    @media (min-width: 600px) {
      padding: 4px 8px;
    }
  }

  .add-to-fav {
    font-size: 12px;
    line-height: 16px;
    gap: 10px;
    color: var(--dark-grey);
    padding: 12px 18px;
    background: var(--white);
    border: 1px solid #EAEAEC;
    backdrop-filter: blur(8px);

    &-text {
      display: none;

      @media (min-width: 768px) {
        display: block;
      }
    }
  }

  .stats-panel {
    margin: 1rem 0 2.5rem;
  }

  .product-description {
    font-size: 14px;
    line-height: 24px;
    color: var(--black);
    opacity: 0.8;
    max-height: 70px;
    overflow: hidden;

    p {
      font-weight: 400;
    }

    &--readMore {
      max-height: max-content;
      overflow: visible;
    }
  }

  .read-more {
    color: var(--red);
    font-weight: 500;
  }

  .form__area {
    margin-top: 2.5rem;

    .dropdown {
      background: var(--white);
      border: 1px solid #EAEAEC;
      backdrop-filter: blur(8px);
      padding: .75rem 1.125rem;
      justify-content: space-between;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: var(--black);

      input {
        width: 100%;
      }
    }

    .quantity {
      max-width: 5rem;
    }

    .view-size-chart {
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      padding: .75rem 1.125rem;
      color: var(--black);
      background: #F5F5F6;
      border: 1px solid #EAEAEC;
      backdrop-filter: blur(8px);
    }

    .form_row {
      display: grid;
      grid-template-columns: 20% 80%;
      margin-bottom: 1rem;

      &-right {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
      }

      .grid-item {
        display: grid;
        grid-template-columns: 1fr max-content;
        gap: .5rem;
      }

      .row-name {
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        color: var(--black);
      }
    }
  }

  .add-to-cart {
    display: grid;
    grid-template-columns: 1fr 3.5rem;
    cursor: pointer;

    &:hover {
      transform: scale(0.99);
    }

    &-text {
      background: var(--primary);
      backdrop-filter: blur(11.2px);
      font-weight: 600;
      font-size: 16.8px;
      line-height: 24px;
      padding: 1rem 1.5rem;
    }

    .shopping-cart {
      background: var(--black);
      padding: 1.125rem;
    }
  }
}
</style>