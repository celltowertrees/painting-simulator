<script>
    import chroma from "chroma-js";
    import { getShadow } from "../lib/utils/mixers.js";
    import Sphere from "../lib/components/sphere.svelte";
    import Square from "../lib/components/square.svelte";

    let initial = {
        sunlight: "#ffdb00",
        sphereBase: "#00ac73",
        skyBase: "#c3e9ff",
        groundBase: "#671f1f",
    };

    $: skyBase = initial.skyBase;

    $: shadows = {
        ground: chroma.mix(
            initial.sphereBase,
            getShadow(initial.groundBase),
            0.85,
            "lab",
        ), // account for reflection of sphere here
    };
</script>

<svelte:head>
    <title>PAINTING SIMULATOR</title>
</svelte:head>

<div class="screen" style="--background: {skyBase}; --ground: {initial.groundBase};">
    <div class="item-1">
        <Sphere light={initial.sunlight} base={initial.sphereBase} />
    </div>
    <div class="item-2">
        <Square light={initial.sunlight} base={initial.sphereBase} />
    </div>
</div>

<div class="control-panel">
    <div class="basecolor-controls">
        <input type="color" bind:value={initial.sphereBase} />
        <input type="color" bind:value={initial.groundBase} />
        <input type="color" bind:value={initial.skyBase} />
    </div>
    <div class="sunlight-controls">
        <!-- <input type="range" min="0" max="100" bind:value={initial.sunlight} /> -->
        <input type="color" bind:value={initial.sunlight} />
    </div>
</div>

<style>
    .screen {
        height: 70vh;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.5rem;
        overflow: hidden;
        position: relative;
        background: linear-gradient(
            180deg,
            var(--background) 0%,
            var(--background) 48%,
            var(--ground) 55%,
            var(--ground) 100%
        );
    }

    .item-1, .item-2 {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
