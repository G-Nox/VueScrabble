<template>
  <select v-model="store.state.player">
    <option disabled value="">Please select a player</option>
    <option>A</option>
    <option>B</option>
  </select>
</template>

<script>
import store from "../store";

export default {
  name: "PlayerCouser",
  data() {
    return { store };
  },
  methods: {},
};
</script>

<style scoped></style>
