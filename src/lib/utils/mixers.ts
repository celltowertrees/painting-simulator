import chroma from 'chroma-js';

export function getLight(light: string, baseColor: string) {
  return chroma.mix(light, baseColor, 0.9, 'lab').brighten();
}

export function getShadow(light: string, baseColor: string) {
  const complement = chroma(light).set('hsl.h', '+180'); 

  return chroma.mix(complement, baseColor, 0.5, 'lab').darken();

  // return chroma(baseColor).darken();
}