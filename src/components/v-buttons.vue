<template>
  <div v-if="store.state.player === store.state.turn" class="my-2">
    <div class="row">
      <div class="col">
        <button
          type="button"
          class="btn btn-primary btn-block text-left"
          @click="newgame"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            class="bi bi-plus-square-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
            />
          </svg>
          new game
        </button>
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
        <button
          type="button"
          class="btn btn-secondary btn-block text-left"
          @click="undo"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            class="bi bi-arrow-left-square-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.5 8.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"
            />
          </svg>
          undo
        </button>
        <button
          type="button"
          class="btn btn-secondary btn-block text-left"
          @click="redo"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            class="bi bi-arrow-right-square-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 8.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"
            />
          </svg>
          redo
        </button>
        <button
          type="button"
          class="btn btn-dark btn-block text-left"
          @click="switch_card"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            class="bi bi-arrow-repeat"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"
            />
            <path
              fill-rule="evenodd"
              d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
            />
          </svg>
          switch cards
        </button>
        <button
          type="button"
          class="btn btn-success btn-block text-left"
          @click="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            class="bi bi-check-square-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
            />
          </svg>
          submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";

export default {
  name: "Buttons",
  data() {
    return { store };
  },
  methods: {
    // newgame: function(ev) {
    //   $.ajax({
    //     method: "GET",
    //     url: "/scrabble/new",
    //   });
    // },
    // resize(size) {
    //   $.ajax({
    //     method: "GET",
    //     url: "/scrabble/resize/" + size,
    //   });
    // },
    // undo() {
    //   $.ajax({
    //     method: "GET",
    //     url: "/scrabble/undo",
    //   });
    // },
    // redo() {
    //   $.ajax({
    //     method: "GET",
    //     url: "/scrabble/redo",
    //   });
    // },
    // switch_card() {
    //   $.ajax({
    //     method: "GET",
    //     url: "/scrabble/switch/" + this.player,
    //   });
    // },
    // submit() {
    //   $.ajax({
    //     method: "GET",
    //     url: "/scrabble/submit",
    //   });
    // },
  },
};
</script>

<style scoped></style>
