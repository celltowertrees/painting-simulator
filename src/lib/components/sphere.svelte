<script>
    import { getLight } from '../../lib/utils/mixers.js';

    export let light;
    export let base;
    export let shadows;

    $: palette = {
        // shadow: chroma.mix(initial.groundBase, getShadow(initial.sphereBase), 0.85, 'lab'), // account for reflection of ground here IF bg is brighter than object
        light: getLight(light, base)
    }
</script>

<div class="sphere" style="
    --light: {palette.light};
    --base: {base};
    --shadow: {shadows};
"></div>

<style>
    .sphere {
        height: 200px;
        width: 200px;
        border-radius: 50%;
        margin: 0 auto;
        background: linear-gradient(
            -230deg, var(--light) 0%, var(--base) 45%, var(--shadow) 100%
        );
    }
</style>