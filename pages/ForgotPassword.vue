<template>
  <div class="forgot-password-container">
    <h2 class="forgot-password-title">Zaboravili ste lozinku</h2>
    <p class="forgot-password-text">
      Molimo unesite svoju email adresu. Poslaćemo vam link za resetovanje lozinke.</p>
    <form @submit.prevent="submitEmail" class="forgot-password-form">
      <!-- Email Field -->
      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Email"
            required
            class="form-input"
        />
      </div>

      <!-- Buttons -->
      <div class="form-actions">
        <button type="submit" class="btn-submit">Pošaljite</button>
        <button type="button" class="btn-cancel" @click="cancel">Otkažite</button>
      </div>
    </form>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "ForgotPassword",


  setup() {
    const router = useRouter();
    const email = ref("");

    const submitEmail = () => {
      if (email.value.trim()) {
        alert(`Reset password link sent to ${email.value}`);
        email.value = ""; // Clear the email input
      } else {
        alert("Molimo unesite ispravan email.");
      }
    };

    const cancel = () => {
      router.push("/"); // Navigate back to the home page
    };

    return {
      email,
      submitEmail,
      cancel,
    };
  },
});
</script>


<style scoped>
.forgot-password-container {
  max-width: 400px;
  margin-top: 120px ;
  margin-left: 530px;
  margin-bottom: 200px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  //box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;

}
h2{
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;

}
.forgot-password-title {

  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;

  margin-bottom: 15px;
  color: #232f3e;

}

.forgot-password-text {
  font-size: 1rem;
  color: #555;
  margin-bottom: 25px;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;

}

.forgot-password-form {
  width: 100%;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;

}

.form-group {
  margin-bottom: 20px;
  text-align: left;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;

}

.form-label {
  display: block;
  font-size: 0.9rem;
  margin-bottom: 5px;
  color: #232f3e;
  font-weight: bold;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;

}

.form-input {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
}

.form-input:focus {
  border-color: #007bff;
  box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
}

.form-actions {
  display: flex;
  justify-content: space-between;
}

.btn-submit {
  background-color: #f16805;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-submit:hover {
  background-color: #e55b00;
}

.btn-cancel {
  background-color: transparent;
  color: #333;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: underline;
}

.btn-cancel:hover {
  background-color: transparent;
}
</style>
