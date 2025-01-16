<template>
  <client-only>
    <nav class="category-nav">
      <ul class="category-list">
        <li v-for="category in categories" :key="category.id" class="category-item">
          <a href="#" class="category-link">{{ category.name }}</a>
        </li>
      </ul>
    </nav>
  </client-only>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import { useCategoryStore } from "@/stores/categoryStore";

export default defineComponent({
  name: "CategoryList",
  setup() {
    const categoryStore = useCategoryStore();

    // Fetch categories when the component is mounted
    onMounted(() => {
      categoryStore.fetchCategories();
    });

    // Debugging: Watch for updates to the store
    const categories = computed(() => categoryStore.categories);

    return {
      categories,
    };
  },
});
</script>




<style scoped>
/* Add styling for your navbar */
.category-nav {
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  text-align: center;
}

.category-list {
  display: flex;
  justify-content: center;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.category-item {
  font-size: 15px;

}

.category-link {
  text-decoration: none;
  color: #212529;
  text-transform: uppercase;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;

}

.category-link:hover {
  color: black;
}
</style>
