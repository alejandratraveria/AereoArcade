
<div class="title">
    <h1>Singleplayer</h1> 
</div>

    <div class="ButtonContainer">
        {#each Array(10) as _unused, i}
        <Button class="lbutton">
            <Label>Game {i + 1}</Label>
        </Button>
        {/each}
    </div>

  <script lang="ts">
    import Button, {Label} from '@smui/button';
  </script>
   
  <style>

    * :global(.lbutton) {
        width: 250px;
        height: 250px;
        display: flex;
        align-items: center;  
        background-color: var(--mdc-theme-secondary, #333);
        color: var(--mdc-theme-on-secondary, #fff);
    }

    .ButtonContainer {

        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .title { 
        background-color: yellow;
        padding: 5px;
    }
  </style>