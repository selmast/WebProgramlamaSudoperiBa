<template xmlns:width="http://www.w3.org/1999/xhtml">
  <div class="register-container">
    <h2>Kreirajte svoj nalog</h2>
    <div class="tabs">
      <button
          :class="{ active: isIndividual }"
          @click="setIndividual"
      >
        Fizičko lice
      </button>
      <button
          :class="{ active: !isIndividual }"
          @click="setCompany"
      >
        Firma
      </button>
    </div>

    <form @submit.prevent="submitForm">
      <!-- Email and Password -->
      <div class="form-group">

        <input class="email"
            type="email"
            id="email"
            v-model="formData.email"
            placeholder="Email"

            required
        />
      </div>
      <div class="form-group">

        <input
            type="password"
            id="password"
            v-model="formData.password"
            placeholder="Lozinka"
            required
        />
      </div>

      <!-- Name and Phone -->
      <div v-if="isIndividual">
        <div class="form-group">

          <input
              type="text"
              id="name"
              v-model="formData.name"
              placeholder="Ime i prezime"
              required
          />
        </div>
        <div class="form-group">

          <input
              type="text"
              id="phone"
              v-model="formData.phone"
              placeholder="Telefon"
          />
        </div>
      </div>

      <!-- Address -->
      <div class="form-group">

        <input
            type="text"
            id="address"
            v-model="formData.address"
            placeholder="Adresa"
        />
      </div>

      <!-- Country and City -->
      <div class="form-group">

        <select
            id="country"
            v-model="formData.country"
        >
          <option value="Srbija">Srbija</option>
          <option value="Hrvatska">Hrvatska</option>
          <option value="Bosna i Hercegovina">Bosna i Hercegovina</option>
        </select>
      </div>
      <div class="form-group">

        <input
            type="text"
            id="city"
            v-model="formData.city"
            placeholder="Grad"
        />
      </div>

      <!-- Agreements -->
      <div class="form-group1">
        <input
            type="checkbox"
            id="promotions"
            v-model="formData.promotions"
        />
        <label for="promotions">Budite u toku sa svim promocijama i novim proizvodima!</label>
      </div>
      <div class="form-group1">
        <input
            type="checkbox"
            id="terms"
            v-model="formData.terms"
            required
        />
        <label  for="terms">
          Slažem se sa
          <a href="#">Uslovima korišćenja</a> i
          <a href="#">Politikom Privatnosti</a>.
        </label>
      </div>
    </form>
      <!-- Submit -->
      <div class="submit">
      <button type="submit" class="btn-submit">Kreirajte nalog</button>


    <p class="login-link">
       <router-link to="/login">Imate nalog?</router-link>
    </p>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "Register",
  setup() {
    const formData = reactive({
      email: "",
      password: "",
      name: "",
      phone: "",
      address: "",
      country: "Bosna i Hercegovina",
      city: "",
      promotions: false,
      terms: false,
    });

    const isIndividual = ref(true);

    const setIndividual = () => (isIndividual.value = true);
    const setCompany = () => (isIndividual.value = false);

    const submitForm = () => {
      alert("Nalog uspešno kreiran!");
      console.log(formData);
    };

    return {
      formData,
      isIndividual,
      setIndividual,
      setCompany,
      submitForm,
    };
  },
});
</script>

<style scoped>
.register-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  //box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;

}

h2 {
  //text-align: center;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  margin-bottom: 20px;
}

.tabs {
  //display: flex;
  justify-content: center;
  margin-left: -10px;
  margin-bottom: 20px;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;

}

.tabs button {
  flex: 1;
  padding: 10px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s;

}

.tabs button.active {
  background: transparent;
  color: black;
  text-decoration: underline;
  text-decoration-color: #f16805;
  text-decoration-thickness: 2px;
}
.tabs button:hover{
  text-decoration: underline;
  text-decoration-color: #f16805;
  text-decoration-thickness: 2px;
}
.tabs button:not(:last-child) {
  border-right: 1px solid white;
}

.form-group {

  margin-bottom: 20px;
}

.form-group1 {
  display: flex;
  margin-bottom: 20px;
  width:700px;
  height: 20px;
  margin-left: -300px;


}
.form-group1 label{
  width: 500px;
  margin-bottom: 20px;
  height: 20px;
  margin-left: -280px;
  margin-right: -70px;
  margin-bottom: 20px;
}

.form-group1 a {
  color: black;

}

.form-group label {
//display: block;
  margin-bottom: 5px;

}

input, select {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn-submit {
  background-color: #f16805;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  width: 300px;
  height: 40px;
  //margin-top: 30px;
}

.btn-submit:hover {
  background-color: #e55b00;
}

.login-link {
  text-align: center;
  margin-top: 20px;
}

.login-link a {
  color: black;
  text-decoration: underline;

}
.submit {
  display: flex;
  gap: 200px;

  margin-top: 30px
}
</style>
