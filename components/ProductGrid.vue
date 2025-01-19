<template>
  <section class="product-grid">
    <div class="product-grid-container">
      <div
          v-for="(product, index) in products"
          :key="index"
          class="product-card"
      >
        <!-- Labels -->
        <div class="product-labels">
          <div v-if="product.isNew" class="label novo">NOVO</div>
          <div v-if="product.discount" class="label discount">{{ product.discount }}%</div>
        </div>

        <!-- Product Image -->
        <NuxtLink :to="`/product/${product.id}`"> 
          <img :src="product.imageUrl" :alt="product.name" class="product-image" />
        </NuxtLink>            
        <!-- Product Details -->
        <div class="product-details">
          <button class="favorite-btn" @click="toggleFavorite(product)">&#9825;</button>
          <h3 class="product-name">{{ product.name }}</h3>
          <div class="product-pricing">
            <span v-if="product.oldPrice" class="old-price">{{ product.oldPrice }} KM</span>
            <span class="new-price">{{ product.price }} KM</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "ProductGrid",
  props: {
    products: {
      type: Array as PropType<Array<{
        name: string;
        price: number;
        oldPrice?: number;
        discount?: number;
        isNew?: boolean;
        image: string;
        isFavorite?: boolean;
      }>>,
      required: true,
    },
  },
  methods: {
    toggleFavorite(product: any) {
      product.isFavorite = !product.isFavorite;
    },
  },
});
</script>

<style scoped>
/* Product Section */
.product-section {
  flex: 1;
}

.category-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.product-card {
  border: 1px solid #ddd;
  padding: 10px;
  background-color: #fff;
  text-align: center;
}

.product-image {
  width: 190px;
  height: 190px;
  margin: 0 auto 10px;
  display: block;
  object-fit: cover;
}

.product-title {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333333;
}

.product-pricing {
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 5px;
}

.old-price {
  font-size: 0.9rem;
  color: #999999;
  text-decoration: line-through;
}

.new-price {
  font-size: 1.1rem;
  font-weight: bold;
  color: black;
}


.product-discount {
  font-size: 12px;
  color: red;
  margin-top: 5px;
}


.product-grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Kart Stili */
.product-card {
  position: relative;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.3s;
  padding: 10px;
}

.product-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Etiketler Sağ Üstte */
.product-labels {
  position: absolute;
  top: 10px;
  right: 10px;
  display: inline;
  gap: 55px;
}

.label {
  background-color: #f16805;
  color: white;
  font-size: 0.9rem;
  font-weight: bold;
  padding: 5px 8px;
  border-radius: 4px;

}

.label.novo {
  border-radius: 2px;


}

.label.discount {
  border-radius: 2px;
}

/* Resim Stili */
.product-image {
  width: 190px;
  height: 190px;
  margin: 0 auto 10px;
  display: block;
  object-fit: cover;
}

/* Ürün Detayları */
.product-details {
  position: relative;
  text-align: center;
}

.product-name {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333333;
}

.product-pricing {
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 5px;
}

.old-price {
  font-size: 0.9rem;
  color: #999999;
  text-decoration: line-through;
}

.new-price {
  font-size: 1.1rem;
  font-weight: bold;
  color: #f16805;
}

.favorite-btn {
  position: absolute;
  top: -25px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #ccc;
  cursor: pointer;
  transition: color 0.3s;
}

.favorite-btn:hover {
  color: #f16805;
}
</style>