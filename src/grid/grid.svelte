<script lang="ts">
    import TableComponent from '../table/table.svelte';
    import { GridDataTable } from '../base';
    import { onDestroy } from 'svelte';
    import { gridState, GridStateType } from '../base/GridState.ts';
    
    export let modules: any; 
    export let gridDataTable: GridDataTable;

    let b_gridHeaders = gridDataTable.getColumns();
    let b_gridData = gridDataTable.getData();

    let state: GridStateType = {};

    const unsubscribe = gridState.subscribe((value: GridStateType) => {
        state = value;
    });
    
    // onDestroy(unsubscribe);

    $: if (state.sort) {        
        b_gridData = gridDataTable.sort(state.sort);
    }    

</script>

<style>
</style>

<div class="grid-header-toolbar">
    <svelte:component this = {modules.globalSearch} />
    <svelte:component this = {modules.globalSort} columnNames = {b_gridHeaders} />
</div>
<div class="grid-table">
    <TableComponent headers = {b_gridHeaders} data = {b_gridData} />
</div>
<div class="grid-header-toolbar">
    <svelte:component this = {modules.pagination} />
</div>

