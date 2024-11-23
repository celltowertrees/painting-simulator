import chroma from 'chroma-js';

// export function Mixer(config) {
//   this.config = config;
//   return {

//   }
// }

export function getLight(light: string, baseColor: string) {
  return chroma.mix(light, baseColor, 0.8, 'lab').brighten(0.1);
}

export function getShadow(light: string, baseColor: string) {
  const complement = chroma(light).set('hsl.h', '+180'); 

  return chroma.mix(complement, baseColor, 0.7, 'lab').darken();

  // return chroma(baseColor).darken();
}