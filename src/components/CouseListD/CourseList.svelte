<script lang="ts">
import type { SerNo } from "../../types";

import SortableList from "../utils/SortableList.svelte";
import ListItem from "./ListItem.svelte";
export let courseList = [];
const deleteItem = (x: SerNo) => {
    courseList = courseList.filter(y => y!=x )
    console.log("DELETE")
}
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
    className="list list-group"
    bind:items={courseList}
    let:item    
    sortableOptions={{
        animation:150,
        ghostClass: "sortable-ghost",
        group: "courseList"
    }}
>
    <ListItem serNo={item} deleteItem={deleteItem} />
</SortableList>