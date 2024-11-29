<template>
  <div class="layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <h2>Components</h2>
      <button
          v-for="item in menuItems"
          :key="item.name"
          @click="setActiveComponent(item)"
          :class="['menu-button', { active: activeMenu === item.name }]"
      >
        {{ item.name }}
      </button>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
      <div class="main-header">
      <h1>{{ activeMenu }}</h1>
      <component :is="currentComponent" />
        </div>
    </main>
  </div>
</template>

<script>
// Import all the components you want to render
import HeaderContent from '~/components/HeaderContent.vue';
//import Carousel from '~/components/Carousel.vue';
import CategoryList from '~/components/CategoryList.vue';
//import ProductGrid from '~/components/ProductGrid.vue';
import ProductCard from '~/components/ProductCard.vue';
//import LastAdded from '~/components/LastAdded.vue';
import ContactForm from '~/components/ContactForm.vue';
import SearchBar from '~/components/SearchBar.vue';
import Pagination from '~/components/Pagination.vue';
import FooterContent from '~/components/FooterContent.vue';


export default {
  components: {
    HeaderContent,
    //Carousel,
    CategoryList,
   // ProductGrid,
    ProductCard,
   // LastAdded,
   ContactForm,
    SearchBar,
    Pagination,
    FooterContent,


  },
  data() {
    return {
      menuItems: [
        { name: 'Header', component: 'HeaderContent' },
        { name: 'Carousel', component: 'Carousel' },
        { name: 'Category List', component: 'CategoryList' },
        { name: 'Product Grid', component: 'ProductGrid' },
        { name: 'Product Card', component: 'ProductCard' },
        { name: 'Last Added', component: 'LastAdded' },
        { name: 'Contact Form', component: 'ContactForm' },
        { name: 'SearchBar', component: 'SearchBar' },
        { name: 'Pagination', component: 'Pagination' },
        { name: 'Footer', component: 'FooterContent' },
      ],
      currentComponent: 'HeaderContent', // Default component
      activeMenu: 'Header', // Default menu title
    };
  },
  methods: {
    setActiveComponent(item) {
      this.currentComponent = item.component; // Update current component
      this.activeMenu = item.name; // Update active menu for display
    },
  },
};
</script>

<style scoped>
/* Keep the design the same as your project screenshot */
.layout {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 20%;
  background-color: #343a40;
  color: white;
  padding: 10px;
}

.sidebar h2 {
  margin-bottom: 20px;
  font-size: 25px;
}


.menu-button {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #495057;
  color: white;
  text-align: left;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.menu-button:hover {
  background-color: #6c757d;
}

.menu-button.active {
  background-color: #007bff;
  font-weight: bold;
}

.main-content {
  flex: 1;
  padding: 10px;

}

.main-content h1 {

  margin-top: 15px;
  margin-bottom: 20px;
  font-style: inherit;
  font-size: 35px;
}


</style>