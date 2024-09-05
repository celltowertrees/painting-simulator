<script>
  import chroma from 'chroma-js';
  import { getLight, getShadow } from '../lib/utils/mixers.js';
  import Sphere from '../lib/components/sphere.svelte';

  let initial = {
    sunlight: '#ffdb00',
    sphereBase: '#00ac73',
    skyBase: '#c3e9ff',
    groundBase: '#671f1f',
  }

  $: skyBase = chroma.mix(initial.sunlight, initial.skyBase);

  $: shadows = {
    sphere: chroma.mix(initial.groundBase, getShadow(initial.sphereBase), 0.85, 'lab'), // account for reflection of ground here IF bg is brighter than object
    ground: chroma.mix(initial.sphereBase, getShadow(initial.groundBase), 0.85, 'lab'), // account for reflection of sphere here
  }

  $: light = {
    ground: getLight(initial.sunlight, initial.groundBase),
  }

  $: palette = [
    initial.sunlight,
    skyBase,
    initial.sphereBase,
    shadows.sphere,
    light.ground,
    initial.groundBase,
    shadows.ground,
    initial.background,
  ];

</script>

<svelte:head>
  <title>PAINTING SIMULATOR</title>
</svelte:head>

<div class="screen">
    <div class="background" style="--background: {skyBase};">
      <div class="item-1">
        <Sphere
            light={initial.sunlight}
            shadow={shadows.sphere}
            base={initial.sphereBase}
        />
      </div>

      <div class="ground" style="
        --light: {initial.sunlight};
        --ground: {initial.groundBase};
        --dark: {shadows.ground};
      ">
      </div>
    </div>
    <div class="palette">
        {#each palette as color}
          <div class="color" style="background: {color};"></div>
        {/each}
    </div>
</div>

<div class="control-panel">
    <div class="basecolor-controls">
        <input type="color" bind:value={initial.sphereBase} />
        <input type="color" bind:value={initial.groundBase} />
        <input type="color" bind:value={initial.skyBase} />
    </div>
    <div class="sunlight-controls">
        <!-- <input type="range" min="0" max="100" bind:value={initial.sunlight} /> -->
         <input type="color" bind:value={initial.sunlight} />
    </div>
</div>

<style>
.screen {
    display: flex;
    gap: 0.5rem;
}

.background {
  background-color: var(--background);
  position: relative;
  height: 70vh;
  width: 100%;
  z-index: -2;
  overflow: hidden;
}

.item-1 {
    position: absolute;
    top: 12vh;
    left: 40vw;
    z-index: 2;
}

.ground {
  background: linear-gradient(
    -230deg,
    var(--light) 0%,
    var(--ground) 75%,
    var(--ground) 95%,
    var(--dark) 100%
  );
  /* background-color: var(--ground); */
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 45vh;
  z-index: -1;
}

.control-panel {

}

.palette {
  display: flex;
  flex-direction: column;
}

.palette .color {
  height: 50px;
  width: 50px;
}

</style>