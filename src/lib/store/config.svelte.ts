import { type Config } from "./config.types";

const initial: Config = $state({
  sunlight: "#ffdb00",
  sphere: {
    base: "#00ac73",
  },
  square: {
    base: "#dd5a7b",
    rotation: 8,
  },
  skyBase: "#c3e9ff",
  groundBase: "#187EA0",
});

export default initial;
