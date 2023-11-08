// Tu código aquí.

import {
  createApp,
  ref,
  computed
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  setup() {
    const counter = ref(0);
    const addCount = () => {
      counter.value++;
    };
    const lowerCount = () => {
      counter.value--;
    };

    const updateColor = computed(() => {
      if (counter.value < 0) {
        return "text-danger";
      } else if (counter.value > 0) {
        return "text-success";
      }
    });

    return {
      counter,
      addCount,
      lowerCount,
      updateColor,
    };
  },
}).mount("#app");
