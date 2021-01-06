<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          contain
          src="./assets/logo_long.png"
          transition="scale-transition"
          max-width="200"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <LandingPage />
      <ScrabblePage />
    </v-main>
  </v-app>
</template>

<script>
import LandingPage from "./views/LandingPage";
import ScrabblePage from "./views/ScrabblePage.vue";

export default {
  name: "App",

  components: {
    LandingPage,
    ScrabblePage,
  },

  data: () => ({
    //
  }),

    computed:{
        theme(){
            return (this.$vuetify.theme.dark) ? 'dark' : 'light'
        }
    }
};
</script>
