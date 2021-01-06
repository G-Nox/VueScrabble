<template>
    <v-container v-if="show" class="my-2">
        <v-row>
            <v-col>
                <v-btn
                    block
                    elevation="2"
                    class="my-1"
                    @click="newgame"
                >
                    <v-icon>
                        mdi-plus-box
                    </v-icon>
                    new game
                </v-btn>


                <div class="dropdown show btn-block">
                    <a
                        class="btn dropdown-toggle btn-primary btn-block text-left"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="currentColor"
                            class="bi bi-grid-3x3-gap-fill"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"
                            />
                        </svg>
                        Resize
                    </a>
                    <div
                        class="dropdown-menu btn-block"
                        aria-labelledby="dropdownMenuLink"
                    >
                        <button class="dropdown-item" @click="resize(3)">3x3</button>
                        <button class="dropdown-item" @click="resize(9)">9x9</button>
                        <button class="dropdown-item" @click="resize(15)">15x15</button>
                    </div>
                </div>
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
        // resize(size) {
        //   $.ajax({
        //     method: "GET",
        //     url: "/scrabble/resize/" + size,
        //   });
        // },
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

<style scoped></style>
