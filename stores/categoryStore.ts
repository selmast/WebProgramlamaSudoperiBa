// stores/categoryStore.ts
import { defineStore } from "pinia";
import { db } from "@/firebase";
import { collection, getDocs, QueryDocumentSnapshot } from "firebase/firestore";

interface Category {
    id: string;
    name: string;
}

export const useCategoryStore = defineStore("category", {
    state: () => ({
        categories: [] as Category[],
    }),
    actions: {
        async fetchCategories() {
            if (this.categories.length > 0) {
                console.log("Categories already loaded");
                return;
            }

            try {
                const querySnapshot = await getDocs(collection(db, "categories"));
                this.categories = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    name: doc.data().name || "Unnamed Category",
                }));
                console.log("Categories fetched:", this.categories);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        },
        async fetchCategory(id: string) {
            if (this.categories.length === 0) {
                await this.fetchCategories();
            }
            const category = this.categories.find((cat) => cat.id === id);
            if (!category) {
                console.error("Category not found");
                return null;
            }
            return category;
        }
    },
});