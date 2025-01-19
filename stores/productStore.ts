import { defineStore } from "pinia";
import { db } from "@/firebase";
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";

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
        async fetchProductsByCategory(categoryId: string) {
            try {
                const q = query(
                    collection(db, "products"),
                    where("category", "==", categoryId)
                );
                const querySnapshot = await getDocs(q);

                this.products = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })) as Product[];

                console.log("Products fetched for category:", categoryId, this.products);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        },
        async fetchProductById(id: string) {
            try {
                const docRef = doc(db, "products", id);
                const docSnap = await getDoc(docRef);
        
                if (docSnap.exists()) {
                    const product: Product = {
                        id: docSnap.id,
                        ...docSnap.data(),
                    } as Product;
        
                    console.log("Product fetched for id:", id, product);
        
                    this.products = [product];
                    return product;
                } else {
                    console.error("No product found with id:", id);
                    return null;
                }
            } catch (error) {
                console.error("Error fetching product by id:", error);
                throw error;
            }
        },
    },
});
