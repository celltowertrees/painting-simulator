<script>
    export let light;
    export let initial;
    export let shadows;
</script>

<div class="sphere" style="
    --sphere-light: {light};
    --sphere: {initial};
    --sphere-shadow: {shadows};
"></div>

<style>
    .sphere {
        z-index: 2;
        position: absolute;
        top: 12vh;
        left: 40vw;
        height: 200px;
        width: 200px;
        border-radius: 50%;
        margin: 0 auto;
        background: linear-gradient(
            -230deg, var(--sphere-light) 0%, var(--sphere) 45%, var(--sphere-shadow) 100%
        );
    }
</style>