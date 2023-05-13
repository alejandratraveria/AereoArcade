<script lang="ts">
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
            window.location.href = "/home";
        });
    }
</script>

<div>
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
    <a href="/home">Enter as Guest</a>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid whitesmoke;
    }
</style>