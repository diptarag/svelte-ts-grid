<script lang="ts">    
    export let headers: Array<string>;
    export let data: Array<any>;

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    function handleClick(index: number) {
        return function(e: Event){
            dispatch('rowClicked', { // fire component event
                node: e.target,
                data: data[index]
            });
        }
    }
</script>

<style>
    table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    } 
    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }
    tr:nth-child(even) {
        background-color: #dddddd;
    }
</style>

<table>
    <thead>
        <tr>
            {#each headers as header}
                <th>{header}</th>
            {/each}
        </tr>
    </thead>
    <tbody>
        {#each data as row, index}
            <tr on:click={handleClick(index)}>
                {#each row as item}
                    <td>{item}</td>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>