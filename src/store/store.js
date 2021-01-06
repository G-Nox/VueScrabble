import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        size: 15,
        cells: [],
        turn: "",
        player: "",
        hand: {
            A: [],
            B: [],
        },
        point: {
            A: 0,
            B: 0,
        },
        pile: 10,
        card_point: [
            {"card": "=", "point": 1},
            {"card": "+", "point": 1},
            {"card": "-", "point": 1},
            {"card": "*", "point": 2},
            {"card": "/", "point": 3},
            {"card": "1", "point": 1},
            {"card": "2", "point": 1},
            {"card": "3", "point": 2},
            {"card": "4", "point": 2},
            {"card": "5", "point": 3},
            {"card": "6", "point": 2},
            {"card": "7", "point": 4},
            {"card": "8", "point": 2},
            {"card": "9", "point": 2},
            {"card": "0", "point": 1}
        ]
    },
    mutation: {
        setGrid(state, size, cells) {
            state.size = size
            state.cells = cells
        },
        setPlayer(state, player) {
            state.player = player
        },
        setHandAndPoint(state, playerA, playerB) {
            state.hand.A = playerA.hand
            state.hand.B = playerB.hand
            state.point.A = playerA.point
            state.point.B = playerB.point
        },
        setPile(state, pile){
            state.pile = pile.tilepile.length
        },
        setTurn(state, turn) {
            if (turn !== "pB") {
                state.turn = "A"
            } else {
                state.turn = "B"
            }
        }
    },
    actions: {
        async test() {

        },
    },

});

export default store;