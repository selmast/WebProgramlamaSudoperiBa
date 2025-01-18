<template>
  <section class="product-grid">
    <div class="category-filter">
      <label for="category-select">Kategori Seç:</label>
      <select id="category-select" v-model="selectedCategory" @change="filterProducts">
        <option value="">Tüm Kategoriler</option>
        <option v-for="category in categories" :key="category.id" :value="category.name">
          {{ category.name }}
        </option>
      </select>
    </div>
    <div class="product-grid-container">
      <div
        v-for="(product, index) in filteredProducts"
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
import { useCategoryStore } from "@/stores/categoryStore";
import { computed, ref, onMounted } from "vue";

export default {
  name: "ProductGrid",
  setup() {
    const categoryStore = useCategoryStore();
    const selectedCategory = ref("");
    const products = ref([
      {
        name: "Granitni sudoper SanDonna Lena",
        price: "499,00",
        oldPrice: "558,00",
        discount: 10,
        isNew: true,
        category: "Mutfak",
        image: "https://c.cdnmp.net/438641527/p/t/9/sudoper-sandonna-joanna-podgradni-cami-tus-slavina~2029.jpg",
        isFavorite: false,
      },
      {
        name: "SUDOPER SANDONNA JOANNA",
        price: "339,00",
        oldPrice: "378,00",
        discount: 10,
        isNew: true,
        category: "Banyo",
        image: "https://c.cdnmp.net/438641527/p/t/1/granitni-sudoper-sandonna-selena-bez-lucna-mat-slavina-boja-bez~2021.jpg",
        isFavorite: false,
      },
      {
        name: "Granitni sudoper SanDonna Selena",
        price: "339,00",
        oldPrice: "378,00",
        discount: 10,
        isNew: true,
        category: "Mutfak",
        image: "https://c.cdnmp.net/438641527/p/t/8/granitni-sudoper-sandonna-selena-siva-lucna-mat-slavina-boja-siva~2018.jpg",
        isFavorite: false,
      },
    ]);

    const filteredProducts = computed(() => {
      if (!selectedCategory.value) {
        return products.value;
      }
      return products.value.filter(
        (product) => product.category === selectedCategory.value
      );
    });

    const toggleFavorite = (product) => {
      product.isFavorite = !product.isFavorite;
    };

    const filterProducts = () => {
      // Filtreleme zaten computed ile yapılıyor.
    };

    onMounted(async () => {
      if (categoryStore.categories.length === 0) {
        await categoryStore.fetchCategories();
      }
    });

    return {
      products,
      filteredProducts,
      selectedCategory,
      categories: categoryStore.categories,
      toggleFavorite,
      filterProducts,
    };
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