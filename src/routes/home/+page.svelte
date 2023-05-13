<script lang="ts">
    import Overlay from "$lib/components/Overlay.svelte";

    let login: boolean = false;
    let signup: boolean = false;

    $: overlay = login || signup;

    let username: string;
    let email: string;
    let password: string;


</script>

<main>
    <nav>
        <div class="logo">
            <img src="logo.png" alt="Aereo Arcade" />
        </div>
    </nav>

    <div class="main">
        <a href="/singleplayer">
            <button class="single">
                <!-- svelte-ignore a11y-missing-attribute -->
                <img src="singleplayer.png" />
            </button>
        </a>
        <a href="/multiplayer">
            <button class="multi">
                <!-- svelte-ignore a11y-missing-attribute -->
                <img src="multiplayer.png" />
            </button>
        </a>
    </div>

    <div class="bottom">
        <button>
            <!-- svelte-ignore a11y-missing-attribute -->
            <img src="trivial.png" />
        </button>

        <a href="/games">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img src="bolaMundo.png" />
        </a>
    </div>
</main>

<style>
    nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 2rem 0 5rem 0;
        background-color: whitesmoke;
    }

    img {
        width: 50%;
        height: 100%;
        object-fit: contain;
    }

    .logo {
        width: 600px;
        height: 100px;
        aspect-ratio: 1;
    }

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    } 

    .bottom {
        display: flex;
        align-items: center;
        justify-self: stretch;
        gap: 115px;
    }

    div {
        display: flex;
        align-items: center;
        justify-self: stretch;
        gap: 10px;
    }
</style>
