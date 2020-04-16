<template>
  <div class="container">
    <img
      src="/v.png"
      alt="Vuetify.js"
      class="mb-5"
    ><br>
    <p>{{ day }}</p>
    <div>
      <vue-typer text="PortFolio" />
    </div><br>
    <nuxt-link v-scroll-to="{el: '#test'}" to="">
      click
    </nuxt-link>
    <div class="tops">
      <div v-rellax="{speed:1}" class="hello">
        Hello
      </div>
      <div v-rellax="{speed: 3}" class="world">
        world
      </div>
      <div v-rellax="{speed: 4}" class="thank">
        Thank you
      </div>
    </div>

    <div class="wrapper">
      <div v-rellax="{speed:-1}" class="hello">
        Hello
      </div>
      <div class="world">
        world
      </div>
      <div v-rellax="{speed:-3}" class="thank">
        Thank you
      </div>
    </div>

    <footer id="test" />
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data () {
    return {
      rellax: {
        speed: -10
      },
      day: null
    }
  },
  mounted () {
    const date = new Date()
    const day = moment(date).format('YYYY.MM.DD')
    this.day = day
  }

}
</script>

<style scoped>

.container {
  margin: 0 auto;
  background-color:aliceblue;
  min-height: 300vh;
}
img {
  display:block;
  text-align: center;
  margin: 0 auto;
}
.tops {
  margin-top:180px;
  display: flex;
}
.wrapper {
  margin: 50px 50px;
  margin-top: 400px;
  display: flex;
}
.world {
  width: 300px;
  height: 250px;
  background-color: lightcoral;
  margin:30px;

}
.hello {
  width: 300px;
  height: 250px;
  background-color: lightpink;
  margin:30px;
}
.thank {
  width: 300px;
  height: 250px;
  background-color: lightskyblue;
  margin:30px;
}
</style>
