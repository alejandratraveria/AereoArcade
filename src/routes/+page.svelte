<script lang="ts">
    import Overlay from "$lib/components/Overlay.svelte";
    import type { PageData } from "./$types";

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
        }).then(()=> {
            location.reload();
        });
    }

    export let data: PageData;
</script>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/mono-icons@1.2.1/iconfont/icons.css" >
</svelte:head>
<main>
    <nav>
        <div class="logo">
            <img src="logo.png" alt="Aereo Arcade" />
        </div>

        {#if data.session}
        <a href = "/user">
            <button>
                <i class="mi mi-user">
                    <span class="u-sr-only">
                        User
                    </span>
                </i>
            </button>
        </a>

        {:else}
        <button
            on:click={() => {
                login = true;
            }}
        >
            Log In
        </button>

        {/if}

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
        <a href="/trivial">
            <button class="multi">
                <!-- svelte-ignore a11y-missing-attribute -->
                <img src="trivial.png" />
            </button>
        </a>
        <a href="/multiplayer">
            <button class="multi">
                <!-- svelte-ignore a11y-missing-attribute -->
                <img src="bolaMundo.png" />
            </button>
        </a>
    </div>
</main>


<style>
    nav {
        display: flex;
        background-color: rgb(210, 209, 209);
        justify-content: space-around;
    }
    div {
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
        width: 750px;
        height: 160px;
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
        align-items: stretch;
        height: 100%;
        margin-top: 50px;
    }
    .bottom {
        display: flex;
        align-items: center;
        justify-self: stretch;
        gap: 120px;
    }
    main {
        display:flex;
        flex-direction: column;
        align-items: stretch;
        gap: 20px;
    }
    div {
        display: flex;
        align-items: center;
        justify-self: stretch;
        gap: 10px;
    }
    .mi {
		font-size: 1.4rem;
        line-height: 6;
	}
	
	.u-sr-only {
		position: absolute;
        left: -10000px;
        top: auto;
        width:1px;
        height:1px;
        overflow:hidden;
	}
    :global(body) {
				background: rgb(255,255,255);
				background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(252,235,119,1) 100%);
				overflow: hidden;
    }
</style>