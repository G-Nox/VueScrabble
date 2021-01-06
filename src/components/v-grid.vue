<template>
    <v-card class="myGrid my-2">
        <div class="myRow">
            <div class="myCell myLabel"></div>
            <div v-for="n in size" class="myCell myLabel" :key="n">
                {{ n }}
            </div>
        </div>
        <div v-for="(n, i) in size" class="myRow" :key="n">
            <div class="myCell myLabel">{{ n }}</div>
            <div v-for="(m, index) in cells[i]" :key="index">
                <div v-if="m.value" class="myCell myCard">
                    <div class="myCharacter">{{ m.value }}</div>
                    <div class="myPoint">{{ point(m.value) }}</div>
                </div>
                <div v-else>
                    <div v-if="m.kind === 'n'" class="myCell normal">
                        {{ m.value }}
                    </div>
                    <div v-if="m.kind === 'd'" class="myCell double">
                        {{ m.value }}
                    </div>
                    <div v-if="m.kind === 't'" class="myCell triple">
                        {{ m.value }}
                    </div>
                </div>
            </div>
        </div>
    </v-card>
</template>

<script>

export default {
    name: "Grid",
    computed: {
        size() {
            return this.$store.state.size
        },
        cells() {
            return this.$store.state.cells
        },
    },
    methods: {
        point(card) {
            return this.$store.getters.getPoint(card)
        },
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
