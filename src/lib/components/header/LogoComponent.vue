<template>
  <picture>
    <source srcset="/images/ilojo-icon-rectangular-white.webp" type="image/webp">
    <source srcset="/images/ilojo-icon-rectangular-white.png" type="image/png">
    <img src="/images/ilojo-20icon-rectangular-white.png" class="header-logo" alt="logo Ilojo bar">
  </picture>
</template>


<script>
export default {
  name: "LogoComponent",
  props: {
    fill: {
      type: String,
      default: '#14151a',
    },
  },
  computed: {
    fillColor() {
      return this.fill;
    }
}
}
</script>

<style scoped>
.header-logo{
  width: 128px;
  height: 43px !important;
}

</style>