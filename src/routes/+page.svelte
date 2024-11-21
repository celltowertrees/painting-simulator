<script lang="ts">
  import chroma from "chroma-js";
  import { initial } from "$lib/store/config.svelte";
  import { getLight, getShadow } from '$lib/utils/mixers';
  // import svg from "$lib/svg/noise.svg?component";
  import Sphere from "$lib/components/objects/sphere.svelte";
  import Square from "$lib/components/objects/square.svelte";
  import Landscape from "$lib/components/landscape.svelte";
  import ControlPanel from "$lib/components/controlpanel.svelte";
  import { get } from "svelte/store";

  const panelSurface = "#cdcdcd";

  let panelBevels = $derived({
    light: getLight($initial.sunlight, panelSurface),
    shadow: getShadow($initial.sunlight, panelSurface)
  });

  let bgPalette = $derived({
    light: getLight($initial.sunlight, $initial.skyBase),
    // light: $initial.skyBase,
    shadow: chroma($initial.groundBase).alpha(0.8)
  });

  let spherePalette = $derived({
    shadow: getShadow($initial.sunlight, $initial.sphere.base),
    light: getLight($initial.sunlight, $initial.sphere.base)
  });

  let squarePalette = $derived({
    shadow: getShadow($initial.sunlight, $initial.square.base),
    light: getLight($initial.sunlight, $initial.square.base)
  });

  let landscapePalette = $derived({
    groundShadow: getShadow($initial.sunlight, $initial.groundBase),
    groundLight: getLight($initial.sunlight, $initial.groundBase),
    leavesShadow: getShadow($initial.sunlight, $initial.tree.leavesBase),
    leavesLight: getLight($initial.sunlight, $initial.tree.leavesBase),
    trunkShadow: getShadow($initial.sunlight, $initial.tree.trunkBase),
    trunkLight: getLight($initial.sunlight, $initial.tree.trunkBase),
    rockShadow: getShadow($initial.sunlight, $initial.rock.base),
    rockLight: getLight($initial.sunlight, $initial.rock.base)
  });
</script>

<svelte:head>
  <title>PAINTING SIMULATOR</title>
</svelte:head>

<div class="container" style="--gap: 0.5rem; --panel-surface: {panelSurface}; --bevel-light: {panelBevels.light}; --bevel-dark: {panelBevels.shadow}">
  <div class="screen" style="--background: {bgPalette.light}; --ground: {bgPalette.shadow};">
    <!-- <div class="texture" style="background-image: url({svg})"></div> -->
    <div class="gradient"></div>
    <Landscape palette={landscapePalette} />
    <!-- <div class="grid">
      <div class="item-1">
        <Sphere palette={spherePalette} name="sphere" />
      </div>
      <div class="item-2">
        <Square palette={squarePalette} rotation={$initial.square.rotation} name="square" />
      </div>
    </div> -->

  </div>

  <ControlPanel palettes={[bgPalette, landscapePalette]} />
</div>

<style>
  :global(body), :global(html), :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    padding: var(--gap);
    background-color: var(--panel-surface);
    overflow: hidden;
  }

  @media (min-aspect-ratio: 1 / 1) {
    .container {
      flex-direction: row;
    }
  }

  /* .texture {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
  } */

  .gradient {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background: linear-gradient(0deg, #6ab9ff 0%, #4152be 100%);
    /* background: linear-gradient(
      0deg,
      var(--background) 0%,
      var(--background) 25%,
      var(--ground) 75%,
      var(--ground) 100%
    ); */
    /* @media (min-aspect-ratio: 1 / 1) {
      background: linear-gradient(
        90deg,
        var(--background) 0%,
        var(--background) 25%,
        var(--ground) 75%,
        var(--ground) 100%
      );
    }
    @media (max-aspect-ratio: 1 / 1) {
      background: linear-gradient(
        180deg,
        var(--background) 0%,
        var(--background) 25%,
        var(--ground) 75%,
        var(--ground) 100%
      );
    } */
  }

  .screen {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
    border-bottom: var(--bevel-light) 2px solid;
    border-right: var(--bevel-light) 2px solid;
    border-top: var(--bevel-dark) 2px solid;
    border-left: var(--bevel-dark) 2px solid;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    width: 100%;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }

  .item-1, .item-2 {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
