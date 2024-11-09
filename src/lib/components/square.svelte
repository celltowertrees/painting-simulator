<script>
    import { getLight, getShadow } from '../utils/mixers.js';

    export let light;
    export let base;
    export let rotation = 0;

    $: palette = {
        base: base,
        shadow: getShadow(base),
        light: getLight(light, base)
    }

</script>

<div class="square" style="
    --light: {palette.light};
    --base: {palette.base};
    --shadow: {palette.shadow};
    --rotation: {rotation}deg;
    --negative-rotation: -{rotation}deg;
    --border-left: {rotation < 40 || rotation > 270 ? palette.light : palette.shadow};
    --border-top: {rotation < 40 || rotation > 270 ? palette.light : palette.shadow};
    --border-right: {rotation < 40 || rotation > 270 ? palette.shadow : palette.light};
    --border-bottom: {rotation < 40 || rotation > 270 ? palette.shadow : palette.light};
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
            var(--negative-rotation), var(--light) 0%, var(--base) 45%, var(--shadow) 100%
        );
        rotate: var(--rotation);
        transition: border 0.5s ease;
    }
</style>