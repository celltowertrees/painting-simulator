<script lang="ts">
  import { type ColorPalette } from '$lib/store/config.types';
  import { initial } from "$lib/store/config.svelte";

  let { palette }: { palette: ColorPalette } = $props();
</script>

<div class="control-panel">
  <div>
    <div class="general-controls">
      <div class="sunlight-controls">
        <h5>sunlight</h5>
        <input type="color" bind:value={$initial.sunlight} />
      </div>
      <div class="ground-controls">
        <h5>ground</h5>
        <input type="color" bind:value={$initial.groundBase} />
      </div>
    </div>
    <!-- <div class="square-controls">
      <h5>square</h5>
      <input type="color" bind:value={$initial.square.base} />
      <input type="range" min="0" max="360" bind:value={$initial.square.rotation} />
    </div>
    <div class="sphere-controls">
      <h5>sphere</h5>
      <input type="color" bind:value={$initial.sphere.base} />
    </div> -->
    <div>
      <h5>tree</h5>
      <div class="tree-controls">
        <div class="leaves-controls">
          <h6>leaves</h6>
          <input type="color" bind:value={$initial.tree.leavesBase} />
        </div>
        <div class="trunk-controls">
          <h6>trunk</h6>
          <input type="color" bind:value={$initial.tree.trunkBase} />
        </div>
      </div>
      <h5>rock</h5>
      <div class="rock-controls">
        <input type="color" bind:value={$initial.rock.base} />
      </div>
    </div>
  </div>
  <div class="palette">
    {#each Object.keys(palette) as item}
      <div class="palette-item" style="--light: {palette[item].light}; --shadow: {palette[item].shadow};">
        <div class="light"></div>
        <div class="shadow"></div>
      </div>
    {/each}
  </div>
</div>

<style>
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

  hr {
    border-top: var(--bevel-dark) 1px solid;
    border-bottom: var(--bevel-light) 1px solid;
  }

  .palette {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: var(--gap);
  }

  .palette-item {
    display: flex;
    gap: var(--gap);
    width: calc(50% - (var(--gap) / 2));
  }
  .palette-item > div {
    aspect-ratio: 1;
    flex-grow: 1;
    /* border-bottom: var(--bevel-light) 1px solid;
    border-right: var(--bevel-light) 1px solid;
    border-top: var(--bevel-dark) 1px solid;
    border-left: var(--bevel-dark) 1px solid; */
  }

  .tree-controls {
    display: flex;
    gap: var(--gap);
  }
  .light {
    background-color: var(--light);
  }
  .shadow {
    background-color: var(--shadow);
  }
</style>