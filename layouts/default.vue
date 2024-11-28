<template>
  <div class="layout">
    <!-- Static Navbar -->
    <nav class="navbar">
      <h2 class="navbar-title">Components</h2>
      <ul class="navbar-list">
        <li
            v-for="(component, index) in components"
            :key="index"
            :class="{ active: currentComponent === component }"
        >
          <button @click="changeComponent(index)">
            {{ componentNames[index] }}
          </button>
        </li>
      </ul>
    </nav>

    <!-- Dynamic Content -->
    <div class="dynamic-content">
      <h1>{{ currentComponentName }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      components: ["Header", "Carousel", "CategoryList",  "ProductGrid", "ProductCard", "LastAdded" , "ContactForm", "SearchBar", "Pagination", "Footer"],
      componentNames: ["Header", "Carousel", "Category List", "Product Grid",  "Product Card", "Last Added" , "Contact Form", "SearchBar", "Pagination", "Footer"],
      currentComponent: "Header", // Default component
      currentComponentName: "Header",
    };
  },
  methods: {
    changeComponent(index) {
      this.currentComponent = this.components[index];
      this.currentComponentName = this.componentNames[index];
    },
  },
};
</script>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
  color: #343a40;
}

/* Navbar */
.navbar {
  width: 20%;
  background-color: #343a40;
  color: white;
  padding: 20px;
}

.navbar-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.navbar-list {
  list-style: none;
  padding: 0;
}

.navbar-list li {
  margin-bottom: 10px;
}

.navbar-list button {
  width: 100%;
  padding: 10px;
  background-color: #495057;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: left;
}

.navbar-list button:hover {
  background-color: #007bff;
}

.navbar-list .active button {
  background-color: #0056b3;
  font-weight: bold;
}

/* Dynamic Content */
.dynamic-content {
  flex: 1;
  padding: 20px;
  background-color: white;
  overflow-y: auto;
}

.dynamic-content h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}
</style>