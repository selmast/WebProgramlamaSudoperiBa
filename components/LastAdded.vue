<template>
  <section class="product-grid">
    <div class="product-grid-container">
      <div
          v-for="(product, index) in products"
          :key="index"
          class="product-card"
      >
        <!-- Etiketler -->
        <div class="product-labels">
          <div v-if="product.isNew" class="label novo">NOVO</div>
          <div v-if="product.discount" class="label discount">{{ product.discount }}%</div>
        </div>

        <!-- Ürün Resmi -->
        <img :src="product.image" :alt="product.name" class="product-image" />

        <!-- Ürün Detayları -->
        <div class="product-details">
          <!-- Favori Butonu -->
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

<script>
export default {
  name: "ProductGrid",
  data() {
    return {
      products: [
        {
          name: "Granitni sudoper SanDonna Lena",
          price: "279,00",
          oldPrice: "319,00",
          discount: 12,
          isNew: true,
          image: "https://c.cdnmp.net/438641527/p/m/3/set-sudoper-ulgran-u507-u-kombinaciji-sa-lucnom-inox-slavinom~2073.jpg", // Örnek resim
          isFavorite: false,
        },
        {
          name: "SUDOPER SANDONNA JOANNA",
          price: "279,00",
          oldPrice: "319,00",
          discount: 12,
          isNew: true,
          image: "https://c.cdnmp.net/438641527/p/t/1/granitni-sudoper-ulgran-u607-lucna-slavina-inox~2071.jpg", // Örnek resim
          isFavorite: false,
        },
        {
          name: "Granitni sudoper SanDonna Selena",
          price: "279,00",
          oldPrice: "318,00",
          discount: 12,
          isNew: true,
          image: "https://c.cdnmp.net/438641527/p/t/8/granitni-sudoper-ulgran-u104-boja-crna-u-kombinaciji-sa-lucnom-inox~2068.jpg", // Örnek resim
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavorite(product) {
      product.isFavorite = !product.isFavorite;
    },
  },
};
</script>

<style scoped>
/* Genel Stil */
.product-grid {
  padding: 20px 0;
  background-color: #f9f9f9;
  text-align: center;
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
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
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

/* Favori Butonu */
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