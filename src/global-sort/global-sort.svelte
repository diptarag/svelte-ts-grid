<script lang="ts">
    export let columnNames: Array<string>;

    import { gridState, GridStateType } from '../base/GridState.ts';

    function handleChange(e: Event) {        
        gridState.update((state: GridStateType) => {            
            state.sort = e.target && e.target.value;
            return state;
        });
    }
</script>

<select on:change={handleChange}>
    {#each columnNames as column}
        <option value={column}>{column}</option>
    {/each}    
</select>