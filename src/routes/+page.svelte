<script>
	import Button, { Label } from '@smui/button';
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
        <Button>
            <Label>Trivial</Label>
        </Button>

        <Button>
            <Label>Stamps</Label>
        </Button>
    </div>

</main>

<style>
    .header {
        
    }
    .gamesImg {
        width: 450px;
        aspect-ratio: 3;
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
    }
</style>