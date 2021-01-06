<template>
  <div
    v-if="store.state.player === store.state.turn"
    class="myHand rounded my-2"
  >
    <div v-if="store.state.player === 'A'">
      <div
        v-for="card in store.hand.A"
        class="myCard inHand"
        @click="chooseCard"
        :key="`playerA${card}`"
      >
        <div class="myCharacter">{{ card.value }}</div>
        <div class="myPoint">{{ card_point[card.value] }}</div>
      </div>
    </div>
    <div v-if="store.state.player === 'B'">
      <div
        v-for="card in hand.B"
        class="myCard inHand"
        @click="chooseCard"
        :key="`playerB${card}`"
      >
        <div class="myCharacter">{{ card.value }}</div>
        <div class="myPoint">{{ card_point[card.value] }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store/store";

export default {
  name: "Hand",
  data() {
    return { store };
  },
  methods: {
    // chooseCard: function(ev) {
    //   return recolor(ev.currentTarget, $(".inHand"));
    // },
  },
};
</script>

<style scoped></style>
