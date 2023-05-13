<script lang="ts">
    export let active: boolean;
</script>

<section class:active on:click>
    <button class="material-symbols-outlined" on:click={() => (active = false)}
        >close</button
    >
    <slot />
</section>

<style>
    section {
        display: none;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 98;

        opacity: 0;
        background: #fffffff2;

        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    button {
        position: fixed;
        top: 3rem;
        right: 3rem;
        background-color: transparent;
        border: none;
    }

    button:hover {
        color: #ffa0a0;
        cursor: pointer;
    }

    .active {
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: center;
        opacity: 1;
        transition: opacity 0.3s ease;
    }

    .material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
    }
</style>