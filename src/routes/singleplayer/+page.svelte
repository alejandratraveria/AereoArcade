<script lang="ts">
</script>

<div class="title">
    <h1 class=myfont>Singleplayer</h1> 
</div>

<div class="ButtonContainer">
    {#each Array(8) as _unused, i}
    <button class="lbutton">
        Game {i + 1}
    </button>
    {/each}
</div>

<style>

    * :global(.lbutton) {
        padding-top: 25px;
        width: 250px;
        height: 250px;
        display: flex;
        align-items: center;  
        background-color: var(--mdc-theme-secondary, #333);
        color: var(--mdc-theme-on-secondary, #fff);
    }

    .myfont {
        font-family: 'Sofia', sans-serif;
        color: darkgray;
    }

    .ButtonContainer {
        display: flex;
        padding-top: 25px;
        padding-left: 100px;
        padding-right: 100px;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 25px;
    }

    .title { 
        background-color: rgb(254 204 1);
        padding: 5px;
    }
  </style>