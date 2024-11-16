import { writable } from 'svelte/store';
import chroma from 'chroma-js';
import { type Config } from "./config.types";
import { getLight, getShadow } from '$lib/utils/mixers';

const initialPalette: Config = {
  sunlight: "#ffdb00",
  sphere: {
    base: "#00ac73",
    shadow: getShadow("#00ac73"),
    light: getLight("#ffdb00", "#00ac73"),
  },
  square: {
    base: "#dd5a7b",
    shadow: getShadow("#dd5a7b"),
    light: getLight("#ffdb00", "#dd5a7b"),
    rotation: 8,
  },
  skyBase: "#c3e9ff",
  groundBase: "#187EA0",
  sky: "#c3e9ff",
  ground: chroma("#187EA0").alpha(0.8),
};

const initial = writable(initialPalette);

export { initial };
