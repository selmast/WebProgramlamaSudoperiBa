<template>
  <div class="category-page">
    <!-- Sidebar -->
    <aside class="sidebar">
      <h2 class="sidebar-title">KATEGORIJE</h2>
      <ul class="category-list">
        <li v-for="category in allCategories" :key="category.id" class="category-item">
          <NuxtLink :to="`/category/${category.id}`" class="category-item">{{ category.name }}</NuxtLink>
        </li>
      </ul>

      <!-- Filters -->
      <div class="filters">
        <div class="filter-group" v-for="filter in filters" :key="filter.title">
          <h3 class="filter-title" @click="toggleFilter(filter.title)">
            {{ filter.title }}
          </h3>
          <ul
              v-show="isFilterVisible(filter.title)"
              class="filter-options"
          >
            <li
                v-for="option in filter.options"
                :key="option"
                class="filter-option"
            >
              <input
                  type="checkbox"
                  :id="option"
                  class="filter-checkbox"
              />
              <label :for="option">{{ option }}</label>
            </li>
          </ul>
        </div>
      </div>
    </aside>

    <!-- Product Section -->
    <main class="product-section">
      <h1 class="category-title">{{ categoryName }}</h1>
      <div class="product-grid">
        <div
            v-for="product in products"
            :key="product.id"
            class="product-card"
        >
          <img :src="product.imageUrl" alt="" class="product-image" />
          <h2 class="product-title">{{ product.name }}</h2>
          <p class="product-price">{{ product.price.toFixed(2) }} KM</p>
          <p class="product-discount" v-if="product.discount">
            -{{ product.discount }}%
          </p>
        </div>
      </div>
    </main>
  </div>
</template>


<script lang="ts">
import { defineComponent, onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "@/stores/productStore";
import { useCategoryStore } from "@/stores/categoryStore";

export default defineComponent({
  name: "CategoryPage",
  setup() {
    const categoryName = ref<string>('');
    const route = useRoute();
    const productStore = useProductStore();
    const categoryStore = useCategoryStore();
    const visibleFilters = ref<string[]>([]);
    const toggleFilter = (title: string) => {
      if (visibleFilters.value.includes(title)) {
        visibleFilters.value = visibleFilters.value.filter(
            (filter) => filter !== title
        );
      } else {
        visibleFilters.value.push(title);
      }
    };

    const isFilterVisible = (title: string) => {
      return visibleFilters.value.includes(title);
    };

    const fetchCategoryData = async () => {
      const categoryId = route.params.id as string;
      const category = await categoryStore.fetchCategory(categoryId); // Fetch category
      if (category) {
        categoryName.value = category.name || "Unknown Category";
      } else {
        categoryName.value = "Unknown Category";
        console.error(`Category with ID ${categoryId} not found.`);
      }
    };

    const fetchData = async () => {
      const categoryId = route.params.id as string;
      await Promise.all([
        categoryStore.fetchCategories(),
        fetchCategoryData(),
        productStore.fetchProductsByCategory(categoryId)
      ]);
    };

    const filters = ref([
      {
        title: "BRENDOVI",
        options: ["Dr Gans", "Florentina", "SANDONNA", "ULGRAN"],
      },
      {
        title: "MINIMALNA ŠIRINA ORMARIĆA",
        options: ["55CM", "60CM"],
      },
      {
        title: "OBRADA-BOJA",
        options: ["BEZ", "BIJELA", "CRNA GRANIT"],
      },
      {
        title: "MATERIJAL",
        options: ["Kamen", "Inox"],
      },
    ]);

    // Fetch data on mount and react to route changes
    watch(
        () => route.params.id,
        fetchData,
        { immediate: true }
    );

    onMounted(() => {
      fetchData();
    });

    return {
      categoryName,
      products: computed(() => productStore.products),
      allCategories: computed(() => categoryStore.categories),
      filters,
      toggleFilter,
      isFilterVisible,
    };
  },
});
</script>

<style scoped>
.category-page {
  display: flex;
  padding: 20px;
  gap: 20px;
}

/* Sidebar */
.sidebar {
  width: 20%;
  padding: 15px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
}

.sidebar-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.category-list {
  list-style: none;
  padding: 0;
}

.category-item {
  margin-bottom: 10px;
}

.category-link {
  text-decoration: none;
  color: #333;
  transition: color 0.3s;
}

.category-link:hover {
  color: #f16805;
}

.filters {
  margin-top: 20px;
}

.filter-group {
  margin-bottom: 20px;
}

.filter-title {
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 5px;
}

.filter-options {
  list-style: none;
  padding: 0;
  margin: 0;
}

.filter-option {
  margin: 5px 0;
}

.filter-checkbox {
  margin-right: 10px;
}

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
  max-width: 100%;
  height: auto;
}

.product-title {
  font-size: 16px;
  margin: 10px 0;
}

.product-price {
  font-size: 14px;
  color: #f16805;
}

.product-discount {
  font-size: 12px;
  color: red;
  margin-top: 5px;
}
</style>
