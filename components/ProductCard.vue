<template>
  <div class="product-card">
    <!-- Product Image Container -->
    <div class="product-image-container">
      <!-- Product Image -->
      <img src="/product.webp" :alt="product.name" class="product-image" />

      <!-- Tags -->
      <div class="product-tags">
        <span v-if="product.isNew" class="tag new">New</span>
        <span v-if="product.discount" class="tag discount">-{{ product.discount }}%</span>
      </div>

      <!-- Heart Icon -->
      <button class="favorite-icon" >
        <i class="fas fa-heart"></i>
      </button>
    </div>

    <!-- Product Info -->
    <div class="product-info">
      <h2 class="product-name">{{ product.name }}</h2>
      <p class="product-description">{{ product.description }}</p>


      <!-- Price Section -->
      <div class="product-price">
        <span v-if="product.price" class="original-price">
          {{ product.price }} KM
        </span>
        <span class="discounted-price">
          {{ discountedPrice }} KM
        </span>
      </div>

      <!-- Action Buttons -->
      <div class="product-actions">
        <button class="btn add-to-cart">Add to Cart</button>
        <button class="btn view-details">View Details</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  data() {
    return {
      product: {
        id: 1,
        name: "SET: Sudoper + Slavina",
        description: "SUDOPER SANDONNA JOANNA - PODGRADNI + CAMI tuš slavina",
        price: 499.99,
       // image: "https://via.placeholder.com/300x200", // Replace with a real image URL
        isNew: true, // Example tag
        discount: 30, // Discount percentage
      },
    };
  },
  computed: {
    discountedPrice() {
      // Calculate the discounted price
      return (
          this.product.price -
          (this.product.price * this.product.discount) / 100
      ).toFixed(2);
    },
  },

};
</script>

<style scoped>
/* Product Card Container */
.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  margin: 0 auto;
}

/* Product Image Container */
.product-image-container {
  position: relative; /* Enables positioning of tags and icons */
  width: 100%;
  margin-bottom: 15px;
}

.product-image {
  width: 100%;
  border-radius: 8px;
}

/* Tags */
.product-tags {
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.tag {
  background-color: #f16805;
  margin-left: 230px;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 5px 8px;
  border-radius: 4px;
  text-transform: uppercase;
}

.tag.discount {

  background-color: #f16805; /* Red for discount */
}

.tag.new {
  background-color: #f16805; /* Green for new */
}

/* Favorite Icon */
.favorite-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  margin-top: 280px;
  margin-right: -5px;
  background: white;
  border: #6c757d;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
}


.favorite-icon i {

  font-size: 1.2rem;
}

.favorite-icon:hover {
  background-color: #f8d7da;
}

/* Product Info */
.product-info {
  text-align: center;
}

.product-name {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.product-description {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 15px;
}

.product-price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #f16805;
  margin-bottom: 20px;
}

/* Action Buttons */
.product-actions {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.btn {
  padding: 10px 20px;
  font-size: 0.9rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn.add-to-cart {
  background-color: #f16805;
  color: white;
}

.btn.add-to-cart:hover {
  background-color: #f16960;
}

.btn.view-details {
  background-color: #6c757d;
  color: white;
}

.btn.view-details:hover {
  background-color: #495057;
}

/* Price Section */
.product-price {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: baseline;
}

.original-price {
  text-decoration: line-through; /* Cross out the original price */
  color: #6c757d;
  font-size: 1rem;
}

.discounted-price {
  color: black;
}
</style>