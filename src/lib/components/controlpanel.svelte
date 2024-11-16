<script lang="ts">
  import { initial } from "$lib/store/config.svelte";
</script>

<div class="control-panel">
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
  <div class="square-controls">
    <h5>square</h5>
    <input type="range" min="0" max="360" bind:value={$initial.square.rotation} />
    <input type="color" bind:value={$initial.square.base} />
  </div>
  <div class="sphere-controls">
    <h5>sphere</h5>
    <input type="color" bind:value={$initial.sphere.base} />
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
</style>