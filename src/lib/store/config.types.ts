import chroma from 'chroma-js';

export type Config = {
  sunlight: string,
  sphere: {
    base: string,
  },
  square: {
    base: string,
    rotation: number,
  },
  skyBase: string,
  groundBase: string,
  tree: {
    leavesBase: string,
    trunkBase: string,
  },
  rock: {
    base: string,
  },
};

export type ColorPalette = {
  [key: string]: {
    light: chroma.Color,
    shadow: chroma.Color,
  },
}