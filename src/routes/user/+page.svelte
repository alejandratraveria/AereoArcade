<script>
	export let data;
	let pos = 1;
	let points = data.points;

    const logout = () => fetch("/logout", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(()=> {
            window.location.replace("/");
    });
</script>

<main>
    <header>
		<div>
			RANK
		</div>
		<div>
			POINTS
		</div>
	</header>
	<section>
		<div>
			{pos}
		</div>
		<div>
			{points}
		</div>
	</section>
    <nav>
        <button on:click={logout}>
            LogOut
        </button>
    </nav>
</main>

<style>
    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 50px;
    }

    header {
		display: flex;
		justify-content: center;
		gap: 5rem;
		border-bottom: 1px solid black;
	}

	section {
		display: flex;
		justify-content: center;
		gap: 7rem;
		border-bottom: 1px solid black;
	}

    button {
        background-color: salmon;
        border: none;
        cursor: pointer;
    }
</style>