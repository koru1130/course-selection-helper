<script lang="ts">


import SortableList from "../SortableList.svelte";
import ListItem from "./ListItem.svelte";
export let courseList = [];

</script>

<style>
    :global(.list) {        
        border: 1px black solid;
        overflow-y: scroll;
    }
    :global(.sortable-ghost){
        background-color: #C8EBFB;
    }
</style>


<SortableList 
    className="list"
    bind:items={courseList}
    let:item    
    sortableOptions={{
        animation:150,
        ghostClass: "sortable-ghost",
        group: "courseList"
    }}
>
    <ListItem serNo={item} />
</SortableList>