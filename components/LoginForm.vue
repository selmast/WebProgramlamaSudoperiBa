<template>
  <div class="login-form">
    <div class="login-form-header">
      <h2>Prijavite se</h2>
      <button @click="$emit('close')" class="close-button">&times;</button>
    </div>
    <form @submit.prevent="submitLogin">
      <!-- Email Field -->
      <div class="form-group1">
        <div class="form-group">
          <label for="email">Email</label>
          <input
              type="email"
              id="email"
              v-model="formData.email"
              placeholder="Email"
              required
          />
        </div>

        <!-- Password Field -->
        <div class="form-group">
          <label for="password">Lozinka</label>
          <div class="password-container">
            <input
                type="password"
                id="password"
                v-model="formData.password"
                placeholder="Lozinka"
                required
            />
            <button type="button" class="show-password">
              <i class="fas fa-eye"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Remember Me -->
      <div class="form-group remember-me">
        <input type="checkbox" id="remember-me" v-model="formData.rememberMe" />
        <label for="remember-me">Zapamti me</label>
      </div>

      <!-- Submit Button -->
      <button type="submit" class="btn-login">Prijavite se</button>

      <!-- Forgot Password -->
      <router-link :to="{ name: 'ForgotPassword' }" class="forgot-password">
        Zaboravili ste lozinku?
      </router-link>

      <!-- Registration Link -->
      <p>
        Još uvek nemate nalog?
        <router-link :to="{ name: 'Register' }">Registrujte se sada!</router-link>
      </p>
    </form>
  </div>
</template>


<script>
import { useAuthStore } from "@/stores/authStore";
const authStore = useAuthStore();

export default {
  name: "LoginForm",
  data() {
    return {
      formData: {
        email: "",
        password: "",
        rememberMe: false,
      },
    };
  },
  methods: {
    submitLogin() {
      authStore.login(this.formData.email, this.formData.password);
      
      watch(
        () => authStore.user,
        (newUser) => {
        if (newUser) {
          this.$emit("close"); // Close the login modal
        }
      },
      { immediate: true }
    );
    },
  },
};
</script>



<style scoped>
/* Sliding Form Styles */
.login-form {
  position: fixed;
  top: 0;
  right: 0;
  width: 370px;
  height: 100%;
  background: white;
  z-index: 1000; /* Ensure it is above the overlay */
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  padding: 20px;
  overflow-y: auto;
}

/* Form Header */
.login-form-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;

}

.login-form-header h2 {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  color: #232f3e;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;

}

.close-button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #888;
  line-height: 1;
}

/* Form Group */
.form-group1 {
  margin-top: 120px;
  margin-bottom: 20px;
}
.form-group {

  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
  color: #232f3e;
  font-weight: bold;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;

}

.form-group input {
  width: 345px;
  padding: 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
}

.form-group input::placeholder {
  color: #999;
  font-size: 14px;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;

}

/* Password Container */
.password-container {
  display: flex;
  align-items: center;
  position: relative;
}

.password-container input {
  flex: 1;
  padding-right: 40px; /* Space for the eye icon */
}

.show-password {
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #888;
}

/* Checkbox Alignment */
.remember-me {
  display: flex;
  align-items: center;
  /* Add some spacing between the checkbox and label */
  margin-left: -170px;
}

.remember-me label {
  font-size: 0.9rem;
  margin: 0;
  color: #333;
  margin-left: -160px;
}

/* Submit Button */
.btn-login {
  width: 100%;
  background-color: #f16805;
  color: white;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 0.3s;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;

}

.btn-login:hover {
  background-color: #e55b00;
}

/* Forgot Password */
.forgot-password {
  display: block;
  margin-top: 10px;
  font-size: 14px;
  color: black;
  text-decoration: underline;
  text-align: center;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
}

.forgot-password:hover {
  text-decoration: underline;
}

/* Registration Link */
p {
  font-size: 14px;
  margin-top: 20px;
  color: #232f3e;
  text-align: center;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
}

p a {
  color: #f16805;
  text-decoration: none;
  font-weight: bold;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
}

p a:hover {
  text-decoration: underline;
}

/* Adjust Alignment and Spacing */
form {
  max-width: 100%;
}

</style>

