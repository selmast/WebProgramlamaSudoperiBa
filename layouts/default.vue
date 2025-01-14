<template>
  <div class="layout">
    <HeaderContent />
    <CategoryList />
    <main>
      <nuxt-page />
    </main>
    <FooterContent />
  </div>
</template>

<script>
import HeaderContent from '~/components/HeaderContent.vue';
import CategoryList from "~/components/CategoryList.vue";
import FooterContent from '~/components/FooterContent.vue';

export default {
  components: {
    HeaderContent,
    CategoryList,
    FooterContent,
  },
};
</script>

<style scoped>
/* Reset for body and layout */
html, body {
  margin: 0;
  padding: 0;
  height: 100%; /* Ensures the body takes up the full height of the window */
  width: 100%;  /* Ensures the body takes up the full width of the window */
  overflow-x: hidden; /* Prevents horizontal scrollbars caused by unwanted elements */
}
.layout {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  margin: 0;
  padding: 0;
}

header, footer {

  background-color: #000; /* Example background color */
  margin: 0;
  padding: 0;
}
</style>
