<script lang="ts">
    import { getLight, getShadow } from '../utils/mixers';
    import { type Component } from './component.types';

    let { light, base }: Component = $props();

    let palette = $derived({
        base: base,
        shadow: getShadow(base),
        light: getLight(light, base)
    })
</script>

<div class="sphere" style="
    --light: {palette.light};
    --base: {palette.base};
    --shadow: {palette.shadow};
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