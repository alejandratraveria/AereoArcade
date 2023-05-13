
<div>
    <h1>Singleplayer</h1> 
</div>
<LayoutGrid>
    {#each Array(2) as _unused, i}
      <Cell>
        <div class="demo-cell">Game {i + 1}</div>
      </Cell>
    {/each}
  </LayoutGrid>
   
  <script lang="ts">
    import LayoutGrid, { Cell } from '@smui/layout-grid';
  </script>
   
  <style>
    .demo-cell {
      height:   60px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--mdc-theme-secondary, #333);
      color: var(--mdc-theme-on-secondary, #fff);
    }
  </style>