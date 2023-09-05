<template>
  <HeaderComponent></HeaderComponent>

  <main>
    <section class="home-content">
      <div class="home-row">
    <picture>
      <source srcset="/images/ilojo-logo-square-white.webp" type="image/webp">
      <source srcset="/images/ilojo-logo-square-white.png" type="image/png">
      <img src="/images/ilojo-logo-square-white.png" class="home-logo" alt="logo Ilojo bar">
    </picture>

      <span class="home-sub__title">
        Discover 9 stories about the shattered bar of Lagos
      </span>
      </div>
    </section>
  </main>
</template>

<script>
import HeaderComponent from "@/lib/components/header/Header.vue";

export default {
  name: 'App',
  components: {
    HeaderComponent,
  }
}
</script>

<style>
.home-row{
  display: flex;
  flex-direction: column;
  /*justify-content: center;*/
  align-items: center;

  margin-top: 5em;
}
.home-logo{
  width: 250px;
  height: auto !important;
}
.home-sub__title{
  font-size: 1.4em;
  text-shadow: 0 0 5px rgb(0 0 0 / .4);
}
</style>