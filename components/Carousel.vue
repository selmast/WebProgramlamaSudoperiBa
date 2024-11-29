<template>
  <div class="carousel">
    <div class="carousel-container">
      <!-- Carousel Items -->
      <div
          v-for="(item, index) in carouselItems"
          :key="index"
          class="carousel-item"
          :class="{ active: currentIndex === index }"
          :style="{ transform: 'translateX(' + (-100 * currentIndex) + '%)' }"
      >
        <img :src="item.image" :alt="item.title" class="carousel-image" />
        <div class="carousel-caption">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>

      <!-- Left arrow -->
      <button @click="prevSlide" class="carousel-nav prev">&#10094;</button>
      <button @click="nextSlide" class="carousel-nav next">&#10095;</button>

    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      currentIndex: 0,
      carouselItems: [
        {
          //title: "Product 1",
          //description: "Description for Product 1",
          image: "https://c.cdnmp.net/438641527/bms/5a36da87-f21f-4a77-8693-be45e1e33bd1.png?rv=1712480299",
        },
        {
          //title: "Product 2",
          //description: "Description for Product 2",
          image: "https://c.cdnmp.net/438641527/bms/0f991d61-64cc-4c2f-ae08-22e0bd9d906e.png?rv=1712479783",
        },
      ],
    };
  },
  methods: {
    nextSlide() {
      // Go to the next slide, wrap around to the beginning if needed
      this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
    },
    prevSlide() {
      // Go to the previous slide, wrap around to the end if needed
      this.currentIndex = (this.currentIndex - 1 + this.carouselItems.length) % this.carouselItems.length;
    },
  },
};
</script>

<style scoped>
.carousel {
  max-width: max-content;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  position:relative;
}

.carousel-container {
  display: flex;
  transition: transform 0.5s ease-in-out; /* Smooth transition for sliding */
  overflow: hidden;
}

.carousel-item {
  flex: 0 0 100%; /* Makes each item take up 100% of the width */
  text-align: center;
}

.carousel-image {
  width: 100%;
  height: auto;
  border:none;
}

.carousel-caption {
  margin-top: 10px;
}

.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0); /* Semi-transparent background for better visibility */
  color: white; /* Icon color */
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 50%;z-index:10
}

.carousel-nav.prev {
  left: 20px; /* Adjust distance from the left side */
}

.carousel-nav.next {
  right: 20px; /* Adjust distance from the right side */
}

.carousel-nav img {
  width: 30px;
  height: 30px;
  filter: invert(1); /* İkon rengini beyaz yapmak için */
}
</style>