<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Left Section -->
      <div class="footer-section">
        <h3>SUDOPERI.BA</h3>
        <p>
          <strong>Napomene:</strong><br />
          Cijene prikazane na WEB SHOPU ne moraju odgovarati cijenama u našim maloprodajnim objektima.<br />
          Prikazani artikli u prodavnici su dio naše stalne ponude i ne podrazumijeva se da su svi artikli uvijek dostupni.<br />
          Ukoliko proizvode naručujete online u slučaju da neki artikal nije dostupan administrator web shopa će Vas obavijestiti.
        </p>
      </div>

      <!-- Links Section -->
      <div class="footer-section">
        <h3>O NAMA</h3>
        <ul>
          <li><a href="#">Uslovi korištenja</a></li>
          <li><a href="#">Politika Privatnosti</a></li>
          <li><a href="#">Mapa sajta</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>PODRŠKA</h3>
        <ul>
          <li><a href="#">Kontaktirajte nas</a></li>
          <li><a href="#">Najčešće postavljana pitanja</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>NALOG KORISNIKA</h3>
        <ul>
          <li><a href="#">Moj nalog</a></li>
          <li><a href="#">Registrujte se</a></li>
          <li><a href="#">Porudžbine</a></li>
          <li><a href="#">Omiljeni proizvodi</a></li>
          <li><a href="#">Načini plaćanja</a></li>
          <li><a href="#">Isporuka i povraćaj</a></li>
        </ul>
      </div>

      <!-- Newsletter Section -->
      <div class="footer-section">
        <h3>NEWSLETTER</h3>
        <p>Budite u toku sa svim promocijama i novim proizvodima!</p>
        <form>
          <input type="email" placeholder="Email" />
          <button type="submit">Prijavite se</button>
        </form>
      </div>
    </div>

    <!-- Bottom Section -->
    <div class="footer-bottom">
      <p>© Sudoperi.ba 2025</p>
      <p>
        Online E-commerce Rešenje MerchantPro
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterContent",
};
</script>
<style scoped>
.footer {
  background-color: #232f3e; /* Dark blue */
  color: #fff; /* White text */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  padding: 20px 40px;
  margin-left: -10px;
  margin-right: -10px;
  margin-bottom: -10px;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
}

.footer-section {
  flex: 1;
  min-width: 200px;
  max-width: 250px;

}

.footer-section h3 {
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: #f8f9fa;
  font-weight: 100;

}

.footer-section p {
  font-size: 0.9rem;
  line-height: 1.5;
  color: #d1d5db;
  font-weight: 100;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  font-weight: 100;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section ul li a {
  color: #d1d5db;
  text-decoration: none;
  font-size: 0.9rem;
}

.footer-section ul li a:hover {
  text-decoration: underline;
}

.footer-section form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-section input {
  padding: 8px;
  font-size: 0.9rem;
  border: none;
  border-radius: 4px;
}

.footer-section button {
  background-color: #f60; /* Orange button */
  color: white;
  padding: 8px;
  font-size: 0.9rem;
  border: none;
  border-radius: 4px;
  width: 150px;
  cursor: pointer;
}

.footer-section button:hover {
  background-color: #e55;
}

.footer-bottom {
  text-align: center;
  margin-top: 20px;
  font-size: 0.8rem;
  border-top: 1px solid #d1d5db;
  padding-top: 15px;
  color: #d1d5db;
}
</style>