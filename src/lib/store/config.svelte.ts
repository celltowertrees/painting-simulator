import { writable } from 'svelte/store';
import { type Config } from "./config.types";

const initialPalette: Config = {
  sunlight: "#ffe74d",
  sphere: {
    base: "#00ac73",
  },
  square: {
    base: "#dd5a7b",
    rotation: 8,
  },
  skyBase: "#c3e9ff",
  groundBase: "#187EA0",
};

const initial = writable(initialPalette);

export { initial };
