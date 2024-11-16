import chroma from 'chroma-js';

export type Config = {
  sunlight: string,
  sphere: {
    base: string,
  },
  square: {
    base: string,
    rotation: number,
    palette: Record<string, chroma.Color>,
  },
  skyBase: string,
  groundBase: string,
  sky: string,
};
