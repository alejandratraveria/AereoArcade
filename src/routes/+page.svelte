<script lang="ts">
  import Fab, { Icon } from '@smui/fab';
</script>

<h1>Welcome to AereoArcade</h1>


<div class="flexy">
    <div class="margins">
      <Fab href="/gamesHub">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img class="image" src="earth.png"/>
      </Fab>
    </div>
</div>

<style>
  .image {
    height: 125%; 
    width: 125;
    object-fit: contain
  }

</style>