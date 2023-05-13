<script>
	import Button, { Label } from '@smui/button';
    import Fab, { Icon } from '@smui/fab';
</script>

<main>
    <div class="header">
        <h1><img class="gamesImg" src="AereoArcadeIcon.png"/></h1>
    </div>

    <div>
        <Button default href="/games">
            <img class="modes" src="singleplayer.png"/>
        </Button>

        <Button default href="/games">
            <img class="modes" src="multiplayer.png"/>
        </Button>
    </div>

    <div class="bottom">
        <Button default>
            <img class="modes" src="trivial.png"/>
        </Button>

        <Fab href="/games">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img class="stampsImg" src="stamps.png"/>
        </Fab>
    </div>

</main>

<style>
    .header {
        
    }
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
        gap: 20px;
    }
    div {
        display: flex;
        align-items: center;
        justify-self: stretch;
    }
</style>