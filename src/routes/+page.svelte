<script>
	import Button, { Label } from '@smui/button';
</script>

<main>
    <div>
        <h1><img class="gamesImg" src="AereoArcadeIcon.png"/></h1>
    </div>
    <Button default href="/games" >
        <Label>SinglePlayer</Label>
    </Button>

    <Button default href="/games" >
        <Label>MultiPlayer</Label>
    </Button>


</main>

<style>
    .gamesImg {
        width: 150px;
        aspect-ratio: 2;
    }
    main {
        display:flex;
        flex-direction: column;
    }
</style>