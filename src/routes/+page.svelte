<script>
  import chroma from 'chroma-js';
  import { onMount } from 'svelte';

  let initial = {
    sphere: '#00ac73',
    background: '#c3e9ff', // this would affect the ambient light
    ground: '#671f1f',
  }

  function getLight(baseColor) {
    // if ambient background is lighter than n
    // return brightened color mixed with background
    // else return brightened color
    return chroma.mix(initial.background, baseColor, 0.85, 'lab').brighten();
  }

  function getShadow(baseColor) {
    // if ambient background is darker than n
    // return darkened color mixed with background
    // else return darkened color

    return chroma(baseColor).darken();
  }

  $: shadows = {
    sphere: chroma.mix(initial.ground, getShadow(initial.sphere), 0.85, 'lab'), // account for reflection of ground here IF bg is brighter than object
    ground: chroma.mix(initial.sphere, getShadow(initial.ground), 0.85, 'lab'), // account for reflection of sphere here
  }

  $: light = {
    sphere: getLight(initial.sphere),
    ground: getLight(initial.ground),
  }

  $: palette = [
    light.sphere,
    initial.sphere,
    shadows.sphere,
    light.ground,
    initial.ground,
    shadows.ground,
    initial.background,
  ];

</script>

<svelte:head>
  <title>PAINTING SIMULATOR</title>
</svelte:head>

<div class="background" style="--background: {initial.background};">
    <div class="sphere" style="
    --sphere-light: {light.sphere};
    --sphere: {initial.sphere};
    --sphere-shadow: {shadows.sphere};
  "></div>

  <div class="ground" style="
    --ground-light: {light.ground};
    --ground: {initial.ground};
    --ground-dark: {shadows.ground};
  ">
    <div class="ground-shadow" style="--ground-shadow: {shadows.ground}"></div>
  </div>
</div>

<div class="palette">
  {#each palette as color}
    <div class="color" style="background: {color};"></div>
  {/each}
</div>

<style>
.background {
  background-color: var(--background);
  position: relative;
  height: 70vh;
  width: 100%;
}

.ground {
  background: linear-gradient(
    -230deg,
    var(--ground-light) 0%,
    var(--ground) 35%,
    var(--ground) 85%,
    var(--ground-dark) 100%
  );
  /* background-color: var(--ground); */
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 45vh;
  z-index: 0;
}

.ground-shadow {
  z-index: 1;
  position: absolute;
  top: 9vh;
  left: 43vw;
  width: 350px;
  height: 50px;
  border-radius: 100%;
  background: linear-gradient(100deg, var(--ground-shadow) 0%, var(--ground) 100%), url('/svg/noise.svg');
}
.sphere {
  z-index: 2;
  position: absolute;
  top: 12vh;
  left: 40vw;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  margin: 0 auto;
  background: linear-gradient(
    -230deg, var(--sphere-light) 0%, var(--sphere) 45%, var(--sphere-shadow) 100%
  );
}

.palette {
  display: flex;
}

.palette .color {
  height: 50px;
  width: 50px;
}

</style>