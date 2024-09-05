<script>
    import chroma from "chroma-js";
    import soil from "$lib/img/soil.png";
    import svg from "$lib/svg/noise.svg";
    import Sphere from "$lib/components/sphere.svelte";
    import Square from "$lib/components/square.svelte";

    let initial = {
        sunlight: "#ffdb00",
        sphereBase: "#00ac73",
        skyBase: "#c3e9ff",
        groundBase: "#671f1f",
    };

    $: sky = initial.skyBase;
    $: ground = chroma(initial.groundBase).alpha(0.8);

</script>

<svelte:head>
    <title>PAINTING SIMULATOR</title>
</svelte:head>

<div class="container" style="--gap: 0.5rem">
    <div class="screen" style="--background: {sky}; --ground: {ground};">
        <div class="texture" style="background-image: url({svg})"></div>
        <div class="gradient"></div>
        <div class="grid">
            <div class="item-1">
                <Sphere light={initial.sunlight} base={initial.sphereBase} />
            </div>
            <div class="item-2">
                <Square light={initial.sunlight} base={initial.sphereBase} />
            </div>
        </div>
    </div>

    <div class="control-panel">
        <div class="basecolor-controls">
            <input type="color" bind:value={initial.sphereBase} />
            <!-- <input type="color" bind:value={initial.groundBase} />
            <input type="color" bind:value={initial.skyBase} /> -->
        </div>
        <div class="sunlight-controls">
            <!-- <input type="range" min="0" max="100" bind:value={initial.sunlight} /> -->
            <input type="color" bind:value={initial.sunlight} />
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
        background: linear-gradient(
            180deg,
            var(--background) 0%,
            var(--background) 48%,
            var(--ground) 55%,
            var(--ground) 100%
        );
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
    }

    .item-1, .item-2 {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .control-panel {
        margin: var(--gap);
    }
</style>
