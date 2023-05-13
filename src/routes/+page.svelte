<script lang="ts">
  import Button, { Label } from '@smui/button';
    import Fab, { Icon } from '@smui/fab';
    import { text } from 'svelte/internal';

    let login: boolean = false;
    let signup: boolean = false;

    $: overlay = login || signup;

    let username: string;
    let email: string;
    let password: string;

    function sendLogin() {
        fetch('/login', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password
            })
        })
    }

    function sendSignup() {
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password
            })
        })
    }
</script>

<main>
    <div class="header">
        <!-- svelte-ignore a11y-missing-attribute -->
        <h1><img class="gamesImg" src="AereoArcadeIcon.png"/></h1>

        <Button on:click={()=>{login=true}}>
            <Label>
                Log In
            </Label>
        </Button>
        <Button on:click={()=>{signup=true}}>
            <Label>
                Sign Up
            </Label>
        </Button>

        <Overlay bind:active={overlay} on:click={()=>{signup=false; login=false;}}>
            <input on:click|stopPropagation bind:value={username} type="text" placeholder="username">
            <input on:click|stopPropagation bind:value={email} type="text" placeholder="email">
            <input on:click|stopPropagation bind:value={password} type="password" placeholder="password">
            {#if login}
                <button on:click={sendLogin}>Log In</button>
            {/if}
            {#if signup}
                <button on:click={sendSignup}>Sign Up</button>
            {/if}
        </Overlay>
    </div>

    <div>
        <Button default href="/singleplayer">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img class="modes" src="singleplayer.png"/>
        </Button>

        <Button default href="/multiplayer">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img class="modes" src="multiplayer.png"/>
        </Button>
    </div>

    <div class="bottom">
        <Button default>
            <!-- svelte-ignore a11y-missing-attribute -->
            <img class="modes" src="trivial.png"/>
        </Button>

        <Fab href="/games">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img class="stampsImg" src="stamps.png"/>
        </Fab>
    </div>

</main>

<style>
    .gamesImg {
        width: 450px;
        aspect-ratio: 3;
        
    }
    .modes {
        width: 150px;
        aspect-ratio: 2;
    }
    .stampsImg {
        height: 125%; 
        width: 125;
        object-fit: contain
    }
    .bottom {
        display: flex;
        align-items: center;
        justify-self: stretch;
        gap: 115px;
    }
    h1 {
        margin: 0;
    }
    main {
        display:flex;
        flex-direction: column;
        align-items: center;
<<<<<<< HEAD
=======
        gap: 20px;
>>>>>>> cae91a205ef9052c9d050531b48df17db6457edf
    }
    div {
        display: flex;
        align-items: center;
        justify-self: stretch;
        gap: 10px;
    }
</style>