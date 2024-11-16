<script lang="ts">
  import chroma from "chroma-js";
  import { setContext, getContext } from "svelte";
  import { initial } from "$lib/store/config.svelte";
  import { writable } from "svelte/store";
  // import svg from "$lib/svg/noise.svg?component";
  import Sphere from "$lib/components/objects/sphere.svelte";
  import Square from "$lib/components/objects/square.svelte";
  import ControlPanel from "$lib/components/controlpanel.svelte";

  let sky = $derived($initial.skyBase);
  let ground = $derived(chroma($initial.groundBase).alpha(0.8));

</script>

<svelte:head>
  <title>PAINTING SIMULATOR</title>
</svelte:head>

<div class="container" style="--gap: 0.5rem">
  <div class="screen" style="--background: {sky}; --ground: {ground};">
    <!-- <div class="texture" style="background-image: url({svg})"></div> -->
    <div class="gradient"></div>
    <div class="grid">
      <div class="item-1">
        <Sphere light={$initial.sunlight} base={$initial.sphere.base} name="sphere" />
      </div>
      <div class="item-2">
        <Square light={$initial.sunlight} base={$initial.square.base} rotation={$initial.square.rotation} name="square" />
      </div>
    </div>
  </div>

  <ControlPanel />
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
  }

  @media (min-aspect-ratio: 1 / 1) {
    .container {
      flex-direction: row;
    }
  }

  .texture {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
  }

  .gradient {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    @media (min-aspect-ratio: 1 / 1) {
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
    }
  }

  .screen {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
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
