// Tu código aquí.

import {
  createApp,
  ref,
  computed,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  setup() {
    const counter = ref(0);

    const updateColor = computed(() => {
      if (counter.value < 0) return "text-danger";
      if (counter.value > 0) return "text-success";
    });

    return {
      counter,
      updateColor,
    };
  },
}).mount("#app");
