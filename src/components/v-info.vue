<template>
  <div class="info">
    <div class="my-2 row">
      <div class="col pr-1">
        <!-- <div          class="card p-3 bg-white rounded"          :class="{ active: store.isPlayerA }"        > -->
        Player A: xxx
        <!-- Player A: <span class="playerpoint">{{ store.point.A }}</span> -->
        <!-- </div> -->
      </div>
      <div class="col pl-1">
        <!-- <div          class="card p-3 bg-white rounded"          :class="{ active: !store.isPlayerA }"        > -->
        Player B: xxx
        <!-- Player B: <span class="playerpoint">{{ store.point.B }}</span> -->
        <!-- </div> -->
      </div>
    </div>
    <div class="card bg-white my-2 p-3">
      <p>cards in stack: {{ store.state.pile }}</p>
      <p>you are player: {{ store.state.player }}</p>
      <PlayerCouser />
    </div>
    <!-- <Buttons /> -->
  </div>
</template>

<script>
import store from "../store/store";
import PlayerCouser from "../components/v-player-cooser.vue";
// import Buttons from "../components/v-buttons.vue";

export default {
  name: "Info",
  data() {
    return { store };
  },
  components: {
    PlayerCouser,
    // Buttons,
  },
  methods: {},
  computed: {
    // isPlayerA() {
    //   return this.turn === "A";
    // },
  },
};
</script>

<style scoped></style>
