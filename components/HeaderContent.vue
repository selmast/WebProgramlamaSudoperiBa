<template>
  <header class="header">
    <div class="header-container">
      <!-- Logo -->
      <div class="logo">
        <router-link to="/" class="logo-link" title="Home">
          <img src="/logo.webp" alt="Logo" />
        </router-link>
      </div>

      <!-- Search Bar -->
      <div class="search-bar-container">
        <input
            type="text"
            v-model="searchQuery"
            placeholder="Pretraži proizvode..."
            class="search-input"
        />
        <button class="search-button" @click="handleSearch">
          <i class="fas fa-search"></i>
        </button>
      </div>

      <!-- Icons for Actions -->
      <div class="actions">
        <!-- Favorites Icon -->
        <a href="#" class="action-icon" title="Favorites">
          <img src="/heart.png" alt="Favorites" class="icon-image" />
        </a>


        <!-- Profile Icon -->
        <a @click="showLoginForm" class="action-icon" title="Profile">
          <img src="/profile.png" alt="Profile" class="icon-image" />
        </a>

        <!-- Basket Icon -->
        <a href="#" class="action-icon" title="Basket">
          <img src="/cart.png" alt="Basket" class="icon-image" />
        </a>
      </div>


    </div>

    <!-- Background Overlay -->
    <div
        v-if="isLoginVisible"
        class="overlay"
        @click="hideLoginForm"
    ></div>

    <!-- Login Form Modal -->
    <LoginForm v-if="isLoginVisible" :isVisible="isLoginVisible" @close="hideLoginForm" />

  </header>
</template>


<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import LoginForm from "@/components/LoginForm.vue"; // Update the path if needed
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  name: "HeaderContent",
  components: { LoginForm },
  setup() {
    const searchQuery = ref(""); // Define searchQuery for v-model
    const isLoginVisible = ref(false); // State to show/hide the login form
    const router = useRouter();
    const route = useRoute();

    const handleSearch = () => {
      console.log("Search Query:", searchQuery.value);
      router.push({ name: "SearchResults", query: { q: searchQuery.value } });
    };

    watch(
        () => route.path,
        (newPath) => {
          if (newPath === '/ForgotPassword') {
            isLoginVisible.value = false; // Close the login form
          }
          if (newPath === '/Register') {
            isLoginVisible.value = false; // Close the login form
          }
        },

    );

    const showLoginForm = () => {
      isLoginVisible.value = true;
    };

    const hideLoginForm = () => {
      isLoginVisible.value = false;
    };

    return {
      searchQuery,
      isLoginVisible,
      handleSearch,
      showLoginForm,
      hideLoginForm,
    };
  },
});
</script>


<style scoped>
.header {
  background-color: #232f3e;
  color: white;
  padding: 20px;
  margin-top: -10px;
  margin-left: -10px;
  margin-right: -10px;
  height: 42px;

}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;

}

.logo img {
  height: 40px;
  transition: transform 0.3s, opacity 0.3s;
  padding-left: 80px;
}

.logo-link:hover img {
  transform: scale(1.1); /* Slightly enlarge the logo on hover */
  opacity: 0.8; /* Dim slightly */
}


.search-bar-container {
  display: flex;
  align-items: center;

  flex: 1;
  max-width: 670px;
  margin: 0 20px;
}

.search-input {
  flex: 1; /* Makes the input take up remaining space */
  padding: 10px; /* Adjust padding for better design */
  border: 1px solid #232f3e;
  border-right: none; /* Remove the border on the right to merge with the button */
  border-radius: 4px 0 0 4px; /* Rounded corners for input */
  font-size: 1rem;
  outline: none;
  height: 27px;

}

.search-input:focus {
  border-color: #007bff;
  box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
}

.search-button {
  background-color: #f16805;
  padding: 10px 20px;
  color: white;
  height: 50px;
  width: 45px;


  border: 1px solid #232f3e;
  border-left: none; /* Remove the border on the left to merge with the input */
  border-radius: 0 4px 4px 0; /* Rounded corners for button */
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
}

.search-button:hover {
  background-color: #f16963;
}

.search-button i {
  font-size: 1.2rem;
}



/* Action Icons Styles */
.actions {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-right: 80px;
}

.action-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.3s, opacity 0.3s;
}

.action-icon:hover {
  transform: scale(1.1); /* Slight zoom on hover */
  opacity: 0.8;
}

.icon-image {
  width: 24px; /* Adjust size as needed */
  height: 24px;
  object-fit: contain; /* Ensures the image scales properly */
}

/* Overlay Styles */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Dark transparent overlay */
  z-index: 999; /* Ensure it sits above other elements */
  transition: opacity 0.3s ease; /* Smooth fade-in effect */
}


</style>