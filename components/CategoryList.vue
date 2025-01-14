<template>
  <div class="category-list">
    <ul class="categories">
      <li
          v-for="category in categories"
          :key="category.id"
          class="category-item"
      >
        <a href="#" class="category-link">{{ category.name }}</a>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "CategoryList",
  data() {
    return {
      categories: [
        { id: 1, name: "SET: Sudoper i Slavina" },
        { id: 2, name: "GRANITNI SUDOPERI" },
        { id: 3, name: "INOX SUDOPERI" },
        { id: 4, name: "SLAVINE" },
        { id: 5, name: "ZIDNI PANELI" },
        { id: 6, name: "Dodaci za Sudopere i REPRO" },
        { id: 7, name: "SPECIJALNE PONUDE" },
        { id: 8, name: "NOVI PROIZVODI" },
      ],
    };
  },
};
</script>


<style scoped>
.category-list {
  display: flex;
  justify-content: center;
  background-color: #fff; /* Match background color */

  border-bottom: 2px solid #ddd;



}

.categories {
  display: flex;
  list-style: none;
  padding: -10px;
  margin-left: -150px;
  gap: 30px; /* Space between items */
}

.category-item {
  position: relative;

}

.category-link {
  text-decoration: none;
  font-size: 14px;
  font-weight: 550;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  color: #212529;
  text-transform: uppercase;
  transition: color 0.3s, transform 0.3s;
  text-align: match-parent;
}

.category-link:hover {

  transform: scale(1.1); /* Slight zoom on hover */
}

.category-item::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;

  transition: width 0.3s;
}

.category-item:hover::after {
  width: 100%; /* Underline effect on hover */
}
</style>

