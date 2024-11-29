<template>
  <div class="contact-form">
    <h2 class="form-title">Kontaktirajte nas</h2>
    <form @submit.prevent="submitForm">
      <!-- Name Field -->
      <div class="form-group">
        <label for="name">Ime i Prezime *</label>
        <input
            type="text"
            id="name"
            v-model="formData.name"
            placeholder="Unesite vaše ime i prezime"
            required
        />
      </div>

      <!-- Email Field -->
      <div class="form-group">
        <label for="email">Email *</label>
        <input
            type="email"
            id="email"
            v-model="formData.email"
            placeholder="Unesite vaš email"
            required
        />
      </div>

      <!-- Phone Field -->
      <div class="form-group">
        <label for="phone">Telefon</label>
        <input
            type="tel"
            id="phone"
            v-model="formData.phone"
            placeholder="Unesite vaš broj telefona"
        />
      </div>

      <!-- Subject Field -->
      <div class="form-group">
        <label for="subject">Naslov *</label>
        <input
            type="text"
            id="subject"
            v-model="formData.subject"
            placeholder="Unesite naslov poruke"
            required
        />
      </div>

      <!-- Message Field -->
      <div class="form-group">
        <label for="message">Poruka *</label>
        <textarea
            id="message"
            v-model="formData.message"
            placeholder="Unesite vašu poruku"
            required
        ></textarea>
      </div>

      <!-- Submit Button -->
      <div class="form-actions">
        <button type="submit" class="btn-submit">Pošalji Poruku</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      alert(`Poruka uspješno poslata od: ${this.formData.name}`);
      // Reset the form fields
      this.formData = {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      };
    },
  },
};
</script>

<style scoped>
.contact-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

.form-title {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #555;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.form-group textarea {
  resize: vertical;
  height: 100px;
}

.form-actions {
  text-align: center;
  margin-top: 20px;
}

.btn-submit {
  background-color: #f16805;
  color: white;
  font-size: 1rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-submit:hover {
  background-color: #f16960;
  color: #212529;
}
</style>

