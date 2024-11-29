<template>
  <div class="pagination-container">
    <!-- Results Information -->
    <p class="results-info">
      Pogledaj rezultate {{ resultsStart }} to {{ resultsEnd }} od {{ totalResults }}
    </p>

    <!-- Pagination -->
    <div class="pagination">
      <!-- Previous Button -->
      <button
          :disabled="currentPage === 1"
          class="page-button"
          @click="changePage(currentPage - 1)"
      >
        <i class="fas fa-chevron-left"></i>
      </button>

      <!-- Page Numbers -->
      <button
          v-for="page in totalPages"
          :key="page"
          :class="['page-button', { active: currentPage === page }]"
          @click="changePage(page)"
      >
        {{ page }}
      </button>

      <!-- Next Button -->
      <button
          :disabled="currentPage === totalPages"
          class="page-button"
          @click="changePage(currentPage + 1)"
      >
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      currentPage: 1,
      totalPages: 5, // Example total number of pages
      resultsPerPage: 24, // Number of results per page
      totalResults: 106, // Total number of results
    };
  },
  computed: {
    resultsStart() {
      return (this.currentPage - 1) * this.resultsPerPage + 1;
    },
    resultsEnd() {
      return Math.min(this.currentPage * this.resultsPerPage, this.totalResults);
    },
  },
  methods: {
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
        // Update or fetch new data based on the current page
      }
    },
  },
};
</script>

<style scoped>
.pagination-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  font-family: Arial, sans-serif;
}

.results-info {
  font-size: 0.9rem;
  color: #555;
  text-align: center;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.page-button {
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  //font-weight: bold;
  color: black;
  background-color: #cfd1d3;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.page-button:hover {
  background-color: #6c757d;
  color: white;
}

.page-button:disabled {
  background-color: #f8f9fa;
  color: #ccc;
  cursor: not-allowed;
}

.page-button.active {
  background-color: #6c757d;
  color: white;
  //border-color: black;
}
</style>

