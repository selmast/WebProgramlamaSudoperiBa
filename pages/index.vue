<template>
  <div>

    <Carousel />
    <FeaturesSection />
  </div>
</template>

<script>
import Carousel from '~/components/Carousel.vue';
import FeaturesSection from '~/components/FeaturesSection.vue';

export default {
  components: {
    Carousel,
    FeaturesSection,
  },
};
</script>

<style scoped>
/* General Carousel Styling */
.carousel {
  width: 100%; /* Full width to match the header */




  padding: 0; /* Remove default padding */
  position: relative; /* For overlays or additional controls */
  z-index: 1; /* Ensure it sits below header if necessary */
}

/* Image Styling */
.carousel img {
  width: 100%; /* Ensure the images cover the full width */
  height: auto; /* Maintain aspect ratio */
  display: block; /* Remove inline spacing from images */
}

/* Aligning Carousel with Header */
.carousel-container {
  width: 100%; /* Match header width */
  margin: 0; /* Remove default margins */
  padding: 0; /* Remove default padding */
  background-color: #000; /* Match header background color */
}
</style>
