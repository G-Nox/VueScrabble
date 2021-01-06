<template>
  <div class="myGrid bg-white rounded card my-2">
    <div class="myRow">
      <div class="myCell myLabel"></div>
      <div v-for="n in store.size" class="myCell myLabel" :key="`myLabel${n}`">
        {{ n }}
      </div>
    </div>
    <div v-for="(n, i) in store.size" class="myRow" :key="`myRow${n}`">
      <div class="myCell myLabel">{{ n }}</div>
      <div v-for="m in store.cells[i]" :key="`boundCell${m}`">
        <div v-if="m.value" class="myCell myCard" @click="test">
          <div class="myCharacter">{{ m.value }}</div>
          <div class="myPoint">{{ card_point[m.value] }}</div>
        </div>
        <div v-else>
          <div v-if="m.kind === 'n'" class="myCell normal" @click="test">
            {{ m.value }}
          </div>
          <div v-if="m.kind === 'd'" class="myCell double" @click="test">
            {{ m.value }}
          </div>
          <div v-if="m.kind === 't'" class="myCell triple" @click="test">
            {{ m.value }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store/store";

export default {
  name: "Grid",
  data() {
    return { store };
  },
  methods: {
    // test: function(ev) {
    //   if (!ev.currentTarget.classList.contains("activeDiv")) {
    //     return recolor(ev.currentTarget, $(".myCell"));
    //   } else {
    //     return setCard();
    //   }
    // },
  },
};
</script>

<style scoped></style>
