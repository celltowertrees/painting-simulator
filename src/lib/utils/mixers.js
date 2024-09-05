import chroma from 'chroma-js';

export function getLight(light, baseColor) {
// if ambient background is lighter than n
// return brightened color mixed with background
// else return brightened color
    return chroma.mix(light, baseColor, 0.85, 'lab').brighten();
}

export function getShadow(baseColor) {
    // if ambient background is darker than n
    // return darkened color mixed with background
    // else return darkened color

    return chroma(baseColor).darken();
}