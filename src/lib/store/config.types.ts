import chroma from 'chroma-js';

export type Config = {
  sunlight: string,
  sphere: {
    base: string,
    shadow: chroma.Color,
    light: chroma.Color,
  },
  square: {
    base: string,
    shadow: chroma.Color,
    light: chroma.Color,
    rotation: number,
  },
  skyBase: string,
  groundBase: string,
  sky: string,
  ground: chroma.Color,
};
