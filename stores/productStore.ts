import { defineStore } from "pinia";
import { db } from "@/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    imageUrl: string;
    discount?: number;
}

export const useProductStore = defineStore("product", {
    state: () => ({
        products: [] as Product[],
    }),
    actions: {
        async fetchProductsByCategory(category: string) {
            try {
                const q = query(
                    collection(db, "products"),
                    where("category", "==", category)
                );
                const querySnapshot = await getDocs(q);

                this.products = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })) as Product[];

                console.log("Products fetched for category:", category, this.products);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        },
    },
});