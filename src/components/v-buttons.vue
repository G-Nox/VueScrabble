<template>
    <v-container v-if="show" class="my-2">
        <v-row>
            <v-col class="pa-0">
                <v-select
                    v-model="select"
                    :items="sizes"
                    item-text="name"
                    item-value="val"
                    label="Resize"
                    solo
                    hide-details
                    prepend-icon="mdi-grid">
                </v-select>
                <v-hover v-slot="{ hover }">
                    <v-btn
                        elevation="2"
                        rounded
                        block
                        large
                        class="d-flex pa-4 my-2"
                        @click="newgame"
                    >
                        <v-icon class="text-left">
                            mdi-plus-box
                        </v-icon>
                        <v-expand-x-transition>
                            <div
                                v-if="hover"
                                class="darken-3 black--text font-weight-bold"
                            >
                                new game
                            </div>
                        </v-expand-x-transition>
                    </v-btn>
                </v-hover>
                <v-btn
                    block
                    elevation="2"
                    class="my-1"
                    @click="undo"
                >
                    <v-icon>mdi-arrow-left-bold-box</v-icon>
                    undo
                </v-btn>

                <v-btn
                    block
                    elevation="2"
                    class="my-1"
                    @click="redo"
                >
                    <v-icon>mdi-arrow-right-bold-box</v-icon>
                    redo
                </v-btn>
                <v-btn
                    block
                    elevation="2"
                    class="my-1"
                    @click="switch_card"
                >
                    <v-icon>mdi-reload</v-icon>
                    switch cards
                </v-btn>
                <v-btn
                    block
                    elevation="2"
                    class="my-1"
                    @click="submit"
                >
                    <v-icon>mdi-checkbox-marked</v-icon>
                    submit
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
    name: "Buttons",
    data() {
        return {
            select: {},
            sizes: [
                {name: '3x3', val:'3'},
                {name: '9x9', val:'9'},
                {name: '15x15', val:'15'},
            ]
        }
    },
    watch: {
        select: function (newSize) {
            this.resize(newSize)
        }
    },
    computed: {
        player() {
            return this.$store.state.player
        },
        show() {
            return this.$store.state.turn === this.player
        }
    },
    methods: {
        newgame() {
            this.$store.state.socket.send("new")
        },
        resize(size) {
            this.$store.state.socket.send("resize/"+size)
        },
        undo() {
            this.$store.state.socket.send("undo")
        },
        redo() {
            this.$store.state.socket.send("redo")
        },
        switch_card() {
            this.$store.state.socket.send("switch/"+this.player)
        },
        submit() {
            this.$store.state.socket.send("submit")
        },
    },
};
</script>

<style scoped>
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
}
.v-btn{
    justify-content: left;
}
</style>
