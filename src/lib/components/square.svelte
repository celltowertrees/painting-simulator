<script>
    import { getLight, getShadow } from '../utils/mixers.js';

    export let light;
    export let base;

    $: palette = {
        base: base,
        shadow: getShadow(base),
        light: getLight(light, base)
    }
</script>

<div class="sphere" style="
    --light: {palette.light};
    --base: {palette.base};
    --shadow: {palette.shadow};
"></div>

<style>
    .sphere {
        height: 150px;
        width: 150px;
        border-left: var(--light) 30px solid;
        border-top: var(--light) 30px solid;
        border-right: var(--shadow) 30px solid;
        border-bottom: var(--shadow) 30px solid;
        margin: 0 auto;
        background: linear-gradient(
            -230deg, var(--light) 0%, var(--base) 45%, var(--shadow) 100%
        );
        rotate: 8deg;
    }
</style>