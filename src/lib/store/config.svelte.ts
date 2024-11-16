import { getShadow, getLight } from "../utils/mixers";
import { writable } from 'svelte/store';
import { type Config } from "./config.types";

const initialPalette: Config = {
  sunlight: "#ffdb00",
  sphere: {
    base: "#00ac73",
  },
  square: {
    base: "#dd5a7b",
    rotation: 8,
    palette: {
      // shadow: getShadow("#dd5a7b"),
      // light: getLight("#ffdb00", "#dd5a7b"),
    }
  },
  skyBase: "#c3e9ff",
  groundBase: "#187EA0",
  sky: "#c3e9ff",
};

const initial = writable(initialPalette);

export { initial };
