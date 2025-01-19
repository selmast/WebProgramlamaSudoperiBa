<template>
  <section class="features">
    <div class="feature-item">
      <img src="https://c.cdnmp.net/438641527/bms/41146aea-d5c2-11ec-842d-4cd98fbf6c3d.png?rv=1652779083" alt="Brza isporuka" class="feature-icon" />
      <div class="feature-content">
        <div class="feature-item-icon-title">BRZA ISPORUKA !</div>
        <div class="feature-item-icon-text">Na Vašoj adresi u roku 24-48h</div>
      </div>
    </div>
    <div class="feature-item">
      <img src="https://c.cdnmp.net/438641527/bms/4115f25d-d5c2-11ec-842d-4cd98fbf6c3d.png?rv=1652779083" alt="Garancija" class="feature-icon" />
      <div class="feature-content">
        <div class="feature-item-icon-title">Garancija!</div>
        <div class="feature-item-icon-text">Garancija kvaliteta.</div>
      </div>
    </div>
    <div class="feature-item">
      <img src="https://c.cdnmp.net/438641527/bms/41172596-d5c2-11ec-842d-4cd98fbf6c3d.png?rv=1652779083" alt="Sigurno plaćanje" class="feature-icon" />
      <div class="feature-content">
        <div class="feature-item-icon-title">Sigurno plaćanje</div>
        <div class="feature-item-icon-text">Plati online ili pouzećem. Sigurno</div>
      </div>
    </div>
    <div class="feature-item">
      <img src="https://c.cdnmp.net/438641527/bms/41186383-d5c2-11ec-842d-4cd98fbf6c3d.png?rv=1652779083" alt="Profesionalna podrška" class="feature-icon" />
      <div class="feature-content">
        <div class="feature-item-icon-title">Profesionalna podrška</div>
        <div class="feature-item-icon-text">Naš Tim stoji na raspolaganju za sva pitanja!</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeaturesSection",
};
</script>

<style scoped>
.features {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 20px 40px; /* Add padding for spacing inside */
  background-color: #f8f9fa; /* Light gray background */
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for elevation */
  margin-top: -25px;
  height: 90px;

}

.feature-item {
  display: flex;
  align-items: center;
  text-align: left;
  gap: 15px; /* Space between icon and text */
  flex: 1;
}

.feature-icon {
  width: 60px; /* Icon size */
  height: 60px;
  object-fit: contain;
}

.feature-content {
  display: flex;
  flex-direction: column;
}

.feature-item-icon-title {
  font-size: 1.5rem;
  font-weight: 200;
  color: #333;
  margin-bottom: 5px;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
}

.feature-item-icon-text {
  font-size: 0.875rem;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  color: #333;
}
</style>