<template>
  <header class="header">
    <div class="header-container">
      <div class="logo">
        <a href="#" class="logo-link" title="Home">
          <img src="/logo.webp" alt="Logo" />
        </a>
      </div>
      <!-- Icons for Actions -->
      <div class="actions">
        <!-- Favorites Icon -->
        <a href="#" class="action-icon" title="Favorites">
          <i class="fas fa-heart"></i>
        </a>

        <!-- Profile Icon -->
        <a href="#" class="action-icon" title="Profile" >
          <i class="fas fa-user"></i>
        </a>

        <!-- Basket Icon -->
        <a href="#" class="action-icon" title="Basket">
          <i class="fas fa-shopping-cart"></i>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderContent",
};
</script>

<style scoped>
.header {
  background-color: #232f3e;
  color: white;
  padding: 10px 20px;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  height: 40px;
  transition: transform 0.3s, opacity 0.3s;
}

.logo-link:hover img {
  transform: scale(1.1); /* Slightly enlarge the logo on hover */
  opacity: 0.8; /* Dim slightly */
}



.actions {
  display: flex;
  gap: 20px;
}

.action-icon {
  color: white;

  font-size: 20px;
  text-decoration: none;
  transition: color 0.3s;
}

.action-icon:hover {
  color: #ffd700; /* Highlight on hover */
}
</style>