<template>
  <div class="category-list">
    <ul>
      <li v-for="category in categories" :key="category.id" class="category-item">
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
        {
          id: 1,
          name: "SET: Sudoper i Slavina",

        },
        {
          id: 2,
          name: "GRANITNI SUDOPERI",

        },
        {
          id: 3,
          name: "INOX SUDOPERI",

        },
        {
          id: 4,
          name: "SLAVINE",

        },
        {
          id: 5,
          name: "ZIDNI PANELI",

        },
        {
          id: 6,
          name: "Dodaci za Sudopere i REPRO",

        },


      ],
    };
  },
};
</script>

<style scoped>
.category-list {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
}

.category-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.category-item {
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd; /* Add line under category */
  transition: all 0.3s;
}

.category-link {
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  color: #212529;
  transition: color 0.3s, transform 0.3s;
}

.category-link:hover {
  color: #0056b3;
  transform: translateX(5px); /* Subtle movement effect */
}



/* Hover Effect for Entire Category */
.category-item:hover {

  cursor: pointer;
}
</style>
