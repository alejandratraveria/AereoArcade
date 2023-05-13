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
            <Label>SinglePlayer</Label>
        </Button>

        <Button default href="/games">
            <Label>MultiPlayer</Label>
        </Button>
    </div>

    <div>
        <Button default>
            <Label>Trivial</Label>
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
    .stampsImg {
        height: 125%; 
        width: 125;
        object-fit: contain
    }
    h1 {
        margin: 0;
    }
    main {
        display:flex;
        flex-direction: column;
    }
    div {
        display: flex;
        align-items: center;
        justify-self: stretch;
    }
</style>