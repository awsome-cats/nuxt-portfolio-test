<template>
  <div class="container">
    <img
      src="/v.png"
      alt="Vuetify.js"
      class="mb-5"
    ><br>
    <vue-typer text="PortFolio" />
    <div class="rellax">
      Hello
    </div>
    <div>world</div>
    <div>Thank you</div>
    <footer />
  </div>
</template>

<script>

// import VueRellax from 'vue-rellax'

export default {
  mounted () {
    // const VueRellax = new VueRellax('.rellax', { options })
  },
  rellax: {
    speed: -1
  }
}
</script>

<style scoped>

.container {
  margin: 0 auto;
  background-color:aliceblue;
}
img {
  display:block;
  text-align: center;
  margin: 0 auto;
}
</style>
