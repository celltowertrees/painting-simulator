<script lang="ts">
    import { initial } from '$lib/store/config.svelte';
    import { type Component } from './object.types';

    let { palette }: Component = $props();

</script>

<div class="sphere" style="
    --light: {palette.light};
    --base: {$initial.sphere.base};
    --shadow: {palette.shadow};
"></div>

<style>
  .sphere {
    z-index: 1;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    margin: 0 auto;
    background: linear-gradient(
        -230deg, var(--light) 0%, var(--base) 45%, var(--shadow) 100%
    );
  }
</style>