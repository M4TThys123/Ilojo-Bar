<template>
  <section>
    <div>kanker</div>
    <picture>
      <source srcset="/images/ilojo-logo-square-white.webp" type="image/webp">
      <source srcset="/images/ilojo-logo-square-white.png" type="image/png">
      <img src="/images/ilojo-logo-square-white.png" class="home-logo" alt="logo Ilojo bar">
    </picture>
  </section>
</template>

<script>
export default {
  name: "HomepageView"
}
</script>

<style scoped>
.home-logo{
  width: 100%;
  max-width: 250px;
  height: auto !important;
}

</style>