<template>
  <div>
    <ProductDetail v-if="product" :product="product" />
    <p v-else>Učitavanje detalja o proizvodu...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "@/stores/productStore";
import ProductDetail from "@/components/ProductDetail.vue";

export default defineComponent({
  name: "ProductDetailPage",
  components: {
    ProductDetail,
  },
  setup() {
    const route = useRoute();
    const productStore = useProductStore();
    const product = ref(null); // Product starts as null

    const fetchProductData = async () => {
      try {
        const productId = route.params.id as string;
        product.value = await productStore.fetchProductById(productId);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    watch(
      () => route.params.id,
      fetchProductData,
      { immediate: true }
    );

    onMounted(() => {
      fetchProductData();
    });

    return {
      product,
    };
  },
});
</script>

  
  <style scoped>
  </style>
  