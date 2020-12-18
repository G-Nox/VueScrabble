const store = {
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
        card_point: {
            "=": 1,
            "+": 1,
            "-": 1,
            "*": 2,
            "/": 3,
            "1": 1,
            "2": 1,
            "3": 2,
            "4": 2,
            "5": 3,
            "6": 2,
            "7": 4,
            "8": 2,
            "9": 2,
            "0": 1
        }
    },
    setGrid(size, cells) {
        this.state.size = size
        this.state.cells = cells
    },
    setPlayer(player) {
        this.state.player = player
    },
    setHandAndPoint(playerA, playerB) {
        this.state.hand.A = playerA.hand
        this.state.hand.B = playerB.hand
        this.state.point.A = playerA.point
        this.state.point.B = playerB.point
    },
    setPile(pile){
        this.state.pile = pile.tilepile.length
    },
    setTurn(turn) {
        if (turn !== "pB") {
            this.state.turn = "A"
        } else {
            this.state.turn = "B"
        }
    }
}

export default store;
