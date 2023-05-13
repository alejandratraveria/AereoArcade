<script lang="ts">
    import Overlay from "$lib/components/Overlay.svelte";

    let login: boolean = false;
    let username: string;
    let email: string;
    let password: string;

    function sendLogin() {
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                email,
                password,
            }),
        });
    }
</script>

<main>
    <nav>
        <div class="logo">
            <img src="logo.png" alt="Aereo Arcade" />
        </div>

        <button
            on:click={() => {
                login = true;
            }}
        >
            Log In
        </button>


        <Overlay
            bind:active={login}
            on:click={() => {
                login = false;
            }}
        >
            <input
                on:click|stopPropagation
                bind:value={username}
                type="text"
                placeholder="username"
            />
            <input
                on:click|stopPropagation
                bind:value={email}
                type="text"
                placeholder="email"
            />
            <input
                on:click|stopPropagation
                bind:value={password}
                type="password"
                placeholder="password"
            />
                <button on:click={sendLogin}>Log In</button>
        </Overlay>
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
        justify-content: space-between;
        align-items: center;
    }

    img {
        width: 50%;
        height: 100%;
        object-fit: contain;
    }

    .logo {
        width: 500px;
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
    main {
        display:flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
    div {
        display: flex;
        align-items: center;
        justify-self: stretch;
        gap: 10px;
    }
</style>
