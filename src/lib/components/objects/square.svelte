<script lang="ts">
  import { initial } from '$lib/store/config.svelte';
  import { type Component } from './object.types';

  let { base, rotation = 0, palette }: Component = $props();
</script>

<div class="square" style="
    --light: {palette.light};
    --base: {$initial.square.base};
    --shadow: {palette.shadow};
    --rotation: {rotation}deg;
    --negative-rotation: -{rotation + 45}deg;
    --border-left: {rotation < 45 || rotation > 225 ? palette.light : palette.shadow};
    --border-top: {rotation < 45 || rotation > 225 ? palette.light : palette.shadow};
    --border-right: {rotation < 45 || rotation > 225 ? palette.shadow : palette.light};
    --border-bottom: {rotation < 45 || rotation > 225 ? palette.shadow : palette.light};
"></div>

<style>
    .square {
        height: 150px;
        width: 150px;
        border-left: var(--border-left) 30px solid;
        border-top: var(--border-top) 30px solid;
        border-right: var(--border-right) 30px solid;
        border-bottom: var(--border-bottom) 30px solid;
        margin: 0 auto;
        background: linear-gradient(
            var(--negative-rotation), var(--light) 0%, var(--shadow) 100%
        );
        rotate: var(--rotation);
        transition: border 0.5s ease;
        /* mix-blend-mode: hard-light; */
    }
</style>