<template>
  <div class="search-bar">
    <h2 class="search-title">Pretražite proizvode</h2>
    <form @submit.prevent="submitSearch">
      <div class="form-group">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Unesite ključne riječi"
          required
        />
        <button type="submit" class="btn-search">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </form>
    <!-- Search Results Placeholder -->
    <div v-if="searchResults.length > 0" class="search-results">
      <h3>Rezultati pretrage:</h3>
      <ul>
        <li v-for="(result, index) in searchResults" :key="index">
          {{ result }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      searchQuery: "",
      searchResults: [], // Simulate search results
    };
  },
  methods: {
    submitSearch() {
      // Simulate search logic
      this.searchResults = [
        'Rezultat za "${this.searchQuery}" - 1',
        'Rezultat za "${this.searchQuery}" - 2',
        'Rezultat za "${this.searchQuery}" - 3',
      ];
      this.searchQuery = ""; // Clear the search bar
    },
  },
};
</script>

<style scoped>
.search-bar {
  max-width: 500px;
  margin: 0 auto;
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

.search-title {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333;
}

.form-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

.form-group input {
  flex: 1;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.btn-search {
  background-color: #f16805;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 1.2rem;
}

.btn-search:hover {
  background-color: #f16963;
}

.search-results {
  margin-top: 20px;
}

.search-results h3 {
  font-size: 1.2rem;
  color: #333;
}

.search-results ul {
  list-style: none;
  padding: 0;
}

.search-results li {
  padding: 10px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
}
</style>