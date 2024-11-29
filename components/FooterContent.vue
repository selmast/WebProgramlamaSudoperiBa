<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Notes Section -->
      <div class="footer-links">
        <div class="footer-column">
          <p>
            Napomene: Cijene prikazane na WEB SHOPU ne moraju odgovarati cijenama u našim maloprodajnim objektima. Prikazani artikli u prodavnici su dio naše stalne ponude i ne podrazumijeva se da su svi artikli uvijek dostupni.
          </p>
        </div>


        <!-- Navigation Links -->

        <div class="footer-column">
          <h4>O nama</h4>
          <ul>
            <li><a href="#">Uslovi korišćenja</a></li>
            <li><a href="#">Politika Privatnosti</a></li>
            <li><a href="#">Mapa sajta</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Podrška</h4>
          <ul>
            <li><a href="#">Kontaktirajte nas</a></li>
            <li><a href="#">Najčešće postavljana pitanja</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Nalog korisnika</h4>
          <ul>
            <li><a href="#">Moj nalog</a></li>
            <li><a href="#">Registrujte se</a></li>
            <li><a href="#">Porudžbine</a></li>
            <li><a href="#">Omiljeni proizvodi</a></li>
            <li><a href="#">Načini plaćanja</a></li>
            <li><a href="#">Isporuka i povraćaj</a></li>
          </ul>
        </div>
      </div>

      <!-- Newsletter Subscription -->
      <div class="footer-newsletter">
        <h4>Newsletter</h4>
        <p>Budite u toku sa svim promocijama i novim proizvodima!</p>
        <form>
          <input type="email" v-model="email" placeholder="Email" required />
          <button type="submit">Prijavite se</button>
        </form>
      </div>

      <!-- Copyright -->
      <div class="footer-copyright">
        <p>&copy; Sudoperi.ba 2024</p>
        <p>Online E-commerce Rešenje MerchantPro</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterContent",
  data() {
    return {
      email: "",
    };
  },

};
</script>

<style scoped>
.footer {
  background-color: #343a40;
  color: white;
  padding: 20px 0;
  text-align: center;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}



.footer-links {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.footer-column {
  margin: 10px 0;
}

.footer-column h4 {
  margin-bottom: 10px;
  font-size: 1.1rem;
  color: #ffffff;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column ul li {
  margin-bottom: 5px;
}

.footer-column ul li a {
  color: #ffffff;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s;
}

.footer-column ul li a:hover {
  color: #007bff;
}

.footer-newsletter {
  margin-bottom: 20px;
}

.footer-newsletter h4 {
  margin-bottom: 10px;
  font-size: 1.1rem;
  color: #ffffff;
}

.footer-newsletter p {
  margin-bottom: 10px;
  font-size: 0.9rem;
  color: #aaaaaa;
}

.footer-newsletter form {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.footer-newsletter input[type="email"] {
  padding: 10px;
  border: none;
  border-radius: 4px;
  margin-right: 10px;
  margin-bottom: 10px;
  flex: 1;
  min-width: 200px;
}

.footer-newsletter button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #f16805;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 10px;
}

.footer-newsletter button:hover {
  background-color: #f16805;

  opacity: 0.8;
}

.footer-copyright {
  font-size: 0.8rem;
  color: #aaaaaa;
}
</style>
