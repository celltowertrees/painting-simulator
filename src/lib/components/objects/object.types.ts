import chroma from 'chroma-js';
// TODO we are switching to using palette instead of individual props
export type Component = {
  base?: string;
  shadow?: string;
  light?: string;
  palette?: Record<string, chroma.Color>;
  name: string;
  rotation?: number;
};
