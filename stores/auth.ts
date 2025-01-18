import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import {
signInWithEmailAndPassword,
createUserWithEmailAndPassword,
signOut,
onAuthStateChanged,
User,
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '~/plugins/firebase';

export const useAuthStore = defineStore('auth', () => {
const user = ref<User | null>(null);
const errorMessage = ref<string>('');
const successMessage = ref<string>('');

// Auth state dinleme
onAuthStateChanged(auth, (currentUser: User | null) => {
    user.value = currentUser;
  });

  // Kullanıcı giriş yapma
  const login = async (email: string, password: string): Promise<User | null> => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      user.value = userCredential.user;
      successMessage.value = 'Giriş başarılı!';
      errorMessage.value = '';
      return user.value;
    } catch (error: any) {
      errorMessage.value = `Giriş hatası: ${error.message}`;
      successMessage.value = '';
      throw error;
    }
  };

  // Kullanıcı kaydı oluşturma
  const register = async (email: string, password: string): Promise<User | null> => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      user.value = userCredential.user;
      successMessage.value = 'Kayıt başarılı!';
      errorMessage.value = '';
      return user.value;
    } catch (error: any) {
      errorMessage.value = `Kayıt hatası: ${error.message}`;
      successMessage.value = '';
      throw error;
    }
  };

  // Kullanıcı çıkışı
  const logout = async (): Promise<void> => {
    try {
      await signOut(auth);
      user.value = null;
    } catch (error: any) {
      console.error(`Çıkış hatası: ${error.message}`);
      throw error;
    }
  };

  // Kullanıcı verisi Firestore'dan çekme
  const getUserData = async (): Promise<any | null> => {
    if (!user.value) return null;
    const docRef = doc(db, 'users', user.value.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log('Kullanıcı verisi bulunamadı.');
      return null;
    }
  };

  const isAuthenticated = computed<boolean>(() => !!user.value);

  return {
    user,
    errorMessage,
    successMessage,
    isAuthenticated,
    login,
    register,
    logout,
    getUserData,
  };
});
