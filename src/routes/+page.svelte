<script lang="ts">
    import chroma from "chroma-js";
    // import svg from "$lib/svg/noise.svg?component";
    import Sphere from "$lib/components/sphere.svelte";
    import Square from "$lib/components/square.svelte";

    type Config = {
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
    }

    let initial: Config = $state({
        sunlight: "#ffdb00",
        sphere: {
          base: "#00ac73",
        },
        square: {
          base: "#dd5a7b",
          rotation: 8,
        },
        skyBase: "#c3e9ff",
        groundBase: "#187EA0",
    });

    let sky = $derived(initial.skyBase);
    let ground = $derived(chroma(initial.groundBase).alpha(0.8));

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
                <Sphere light={initial.sunlight} base={initial.sphere.base} />
            </div>
            <div class="item-2">
                <Square light={initial.sunlight} base={initial.square.base} rotation={initial.square.rotation} />
            </div>
        </div>
    </div>

    <div class="control-panel">
      <div class="general-controls">
        <div class="sunlight-controls">
          <h5>sunlight</h5>
          <input type="color" bind:value={initial.sunlight} />
        </div>
        <div class="ground-controls">
          <h5>ground</h5>
          <input type="color" bind:value={initial.groundBase} />
        </div>
      </div>
      <div class="square-controls">
        <h5>square</h5>
        <input type="range" min="0" max="360" bind:value={initial.square.rotation} />
        <input type="color" bind:value={initial.square.base} />
      </div>
      <div class="sphere-controls">
        <h5>sphere</h5>
        <input type="color" bind:value={initial.sphere.base} />
      </div>
    </div>
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

  .control-panel {
    margin: var(--gap);
    gap: var(--gap);
    display: flex;
    flex-direction: column;
  }

  .control-panel h5 {
    margin-bottom: 0.5rem;
  }

  .general-controls {
    display: flex;
    gap: var(--gap);
  }
</style>
