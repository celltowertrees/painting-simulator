<script lang="ts">
    import chroma from "chroma-js";
    // import svg from "$lib/svg/noise.svg?component";
    import Sphere from "$lib/components/sphere.svelte";
    import Square from "$lib/components/square.svelte";

    interface InitialColorsType {
      sunlight: string,
      sphereBase: string,
      squareBase: string,
      skyBase: string,
      groundBase: string,
    }

    let initial: InitialColorsType = {
        sunlight: "#ffdb00",
        sphereBase: "#00ac73",
        squareBase: "#dd5a7b",
        skyBase: "#c3e9ff",
        groundBase: "#187EA0",
    };

    let positioningConfig = {
        square: {
            rotation: 8,
        },
    }

    $: sky = initial.skyBase;
    $: ground = chroma(initial.groundBase).alpha(0.8);

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
                <Sphere light={initial.sunlight} base={initial.sphereBase} />
            </div>
            <div class="item-2">
                <Square light={initial.sunlight} base={initial.squareBase} rotation={positioningConfig.square.rotation} />
            </div>
        </div>
    </div>

    <div class="control-panel">
      <div>   
        <div class="basecolor-controls">
          <input type="color" bind:value={initial.sphereBase} />
          <input type="color" bind:value={initial.squareBase} />
        </div>
        <div class="sunlight-controls">
          <input type="color" bind:value={initial.sunlight} />
        </div>
        <div class="ground-controls">
          <input type="color" bind:value={initial.groundBase} />
        </div>
      </div>
      <div>
        <input type="range" min="0" max="360" bind:value={positioningConfig.square.rotation} />
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
    }
</style>
