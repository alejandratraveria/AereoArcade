<script>
	export let data;
	let pos = 1;
	let points = data.points;
    let name = 'Demo user';

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
        <div class="perfil">
            <img src="bananaMan.png" alt="Foto Perfil"/>
        </div>
        <div>
            <section class="datos">
                <div>
                    Username: {data.user}
                </div>
            </section>
            <section class="datos">
                <div>
                    Name: {name}
                </div>
            </section>
            <section class="datos">
                <div>
                    VuelingClub account: {data.email}
                </div>
            </section>
        </div>
    </header>
    <section>
		<div>
			RANK
		</div>
		<div>
			POINTS
		</div>
	</section>
	<section>
		<div>
			{pos}
		</div>
		<div>
			{points}
		</div>
	</section>
    <section class="title">
        PROGRESS BAR: 5000 points left for reward!
    </section>
    <section class="bar">
        <img src="progressBar.png" alt="Progress Bar"/>
    </section>
    <nav>
        <section class="exit">
            <div>
                <button on:click={logout}>
                    LogOut
                </button>
            </div>
            <div>
                <button>
                    <a href="/">Back</a>
                </button>
            </div>
        </section>
    </nav>
</main>

<style>
    .exit {
        border-bottom: none;
    }
    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 50px;
    }

    .title {
        display: flex;
        justify-content: center;
        border-bottom: none;
        margin-top: 50px;
    }

    .bar {
        height: 100px;
        width: 200px;
        display: flex;
        justify-content: stretch;
        gap: 0rem;
        border-bottom: none;
        margin-top: 50px;
        margin-left: 625px;
        margin-right: 500px;
    }

    header {
		display: flex;
		justify-content: center;
		gap: 5rem;
        margin-top: 50px;
	}

	section {
		display: flex;
		justify-content: center;
		gap: 7rem;
		border-bottom: 1px solid black;
        margin-left: 500px;
        margin-right: 500px;
	}

    .datos {
        display: flex;
		justify-content: left;
		gap: 7rem;
        margin-top: 50px;
        margin-left: 0px;
    }

    button {
        background-color: salmon;
        border: none;
        cursor: pointer;
    }

    .perfil {
        display: flex;
        height: 300px;
        width: 300px;
        position: auto;
        justify-content: center;
        border-radius: 50%;
        background-color: whitesmoke;
        border-color: 3px solid black;
        overflow: hidden;
        margin-bottom: 50px;
        margin-left: 500px;
    }
</style>