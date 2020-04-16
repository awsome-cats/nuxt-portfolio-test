<template>
  <div class="wrapper-index">
    <v-container>
      <v-card
        max-width="400"
        class="mx-auto"
      >
        <v-system-bar
          color="pink darken-2"
          dark
        >
          <v-spacer />

          <v-icon>mdi-window-minimize</v-icon>

          <v-icon>mdi-window-maximize</v-icon>

          <v-icon>mdi-close</v-icon>
        </v-system-bar>

        <v-app-bar
          dark
          color="pink"
        >
          <v-app-bar-nav-icon />

          <v-toolbar-title>My Portfolio</v-toolbar-title>

          <v-spacer />

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-app-bar>

        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-card
                color="#385F73"
                dark
              >
                <v-card-title class="headline">
                  Blog
                </v-card-title>

                <v-card-subtitle>プログラミングについてのささやかな技術ブログです。</v-card-subtitle>

                <v-card-actions>
                  <v-btn text>
                    Entry Now
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>

            <v-col
              v-for="(item, i) in items"
              :key="i"
              cols="12"
              :to="items.href"
            >
              <v-card
                :color="item.color"
                dark
              >
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title
                      class="headline"
                      v-text="item.title"
                    />
                    <v-card-subtitle v-text="item.artist" />
                  </div>

                  <v-avatar
                    class="ma-3"
                    size="125"
                    tile
                  >
                    <v-img :src="item.src" />
                  </v-avatar>
                </div>
              </v-card>
            </v-col>
            <nuxt-link to="/inspire" class="mx-auto">
              <v-btn class="primary mx-auto">
                click
              </v-btn>
            </nuxt-link>
          </v-row>
        </v-container>
      </v-card>
      <div class="hello">
        <h2 data-aos="zoom-in">
          Hello World
        </h2>
        <h2 data-aos="zoom-out">
          Thank you
        </h2>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'メールMagazine',
        artist: 'My Calendar Of Dialies',
        to: '/blog'
      },
      {
        color: '#952175',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'Portfolio',
        artist: 'Salty',
        to: '/inspire'
      }
    ]
  })
}
</script>

<style scoped>
.wrapper-index {
  min-height: 200vh;
  width:100%;
}
.hello {
  margin-top: 300px;
  width: 300px;
  height:400px;
  background-color: rgb(216, 174, 174);
  position:relative;
}
h2 {
  text-align: center;
  top:50%;
  left: 50%;
}
</style>
