<template>
    <v-container class="info">
        <v-row class="my-2">
            <v-col class="pr-1">
                <v-card
                    class="pa-3"
                    :class="{ active: isPlayerA }"
                >
                    Player A: <span class="playerpoint">{{ point.A }}</span>
                </v-card>
            </v-col>
            <v-col class="pl-1">
                <v-card
                    class="pa-3"
                    :class="{ active: !isPlayerA }"
                >
                    Player B: <span class="playerpoint">{{ point.B }}</span>
                </v-card>
            </v-col>
        </v-row>
        <div class="card bg-white my-2 p-3">
            <p>cards in stack: {{ pile }}</p>
            <p>you are player: {{ player }}</p>
            <PlayerChooser/>
        </div>
         <VButtons/>
    </v-container>
</template>

<script>
import PlayerChooser from "./v-player-chooser.vue";
import VButtons from "../components/v-buttons.vue";

export default {
    name: "Info",
    components: {
        PlayerChooser,
        VButtons,
    },
    methods: {},
    computed: {
        isPlayerA() {
            return this.$store.state.turn === "A";
        },
        point() {
            return this.$store.state.point
        },
        pile() {
            return this.$store.state.pile
        },
        player() {
            return this.$store.state.player
        }
    },
};
</script>

<style scoped>
.active {
    color: red;
}
</style>
