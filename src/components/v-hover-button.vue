<template>
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
</template>

<script>
export default {
    name: "v-hover-button",
    props: {
        icons: "",

    }
}
</script>

<style scoped>

</style>