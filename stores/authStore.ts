import { defineStore } from "pinia";
import { auth } from "@/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";

import type { User } from "firebase/auth";

interface UserData {
  email: string;
  password: string;
  userType: 'individual' | 'company';
  name: string;
  phone?: string;
  address?: string;
  country?: string;
  city?: string;
  promotions: boolean;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as User | null,
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async register(userData: UserData) {
      this.loading = true;
      this.error = null;

      try {
        // Create authentication user
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          userData.email,
          userData.password
        );

        // Update user profile
        if (userCredential.user) {
          await updateProfile(userCredential.user, {
            displayName: userData.name
          });

          // Store additional user data in Firestore
          await setDoc(doc(db, 'users', userCredential.user.uid), {
            email: userData.email,
            userType: userData.userType,
            name: userData.name,
            phone: userData.phone || '',
            address: userData.address || '',
            country: userData.country || '',
            city: userData.city || '',
            promotions: userData.promotions,
            createdAt: new Date().toISOString(),
          });

          this.user = userCredential.user;
        }
      } catch (error) {
        console.error('Registration error:', error);
        this.error = error instanceof Error ? error.message : 'Registration failed';
        throw error;
      } finally {
        this.loading = false;
      }
    },
    async login(email: string, password: string) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        this.user = userCredential.user;
        console.log("User logged in:", this.user);
      } catch (error) {
        console.error("Error during login:", error);
        throw error;
      }
    },
    async logout() {
      try {
        await signOut(auth);
        this.user = null;
        console.log("User logged out");
      } catch (error) {
        console.error("Error during logout:", error);
        throw error;
      }
    },
    listenForAuthChanges() {
      onAuthStateChanged(auth, (user) => {
        this.user = user; // Update user state on auth state change
        if (user) {
          console.log("User is logged in:", user);
        } else {
          console.log("User is logged out");
        }
      });
    },
  },
});