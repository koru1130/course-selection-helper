<!-- from https://github.com/pal03377/svelte-sortablejs/blob/master/SortableList.svelte -->
<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	const dispatch = createEventDispatcher();
    import Sortable from 'sortablejs';
import { console } from 'fp-ts';
    // every item is an object with a unique ID for identification
    export let items = [];
    $: console.log(items)
    export let keyFn: ((x: any) => string) = x => x; // id attribute changeable if needed
    export let className = "";    
    export let getItemById = undefined;
    export let sortableOptions : Sortable.SortableOptions = {};
    sortableOptions = Object.assign({}, sortableOptions); // prevent leak to outside
    if (sortableOptions.dataIdAttr) throw new Error("sortableOptions.dataIdAttr is currently not supported.");
    sortableOptions.store = sortableOptions.store || {
        get: sortable => undefined,
        set: sortable => undefined // placeholder
    };
    // if (sortableOptions.group && !getItemById) {
    //     throw new Error("When using group, please provide a function called `getItemById` (as a prop) that gives an item in case it gets dropped from somewhere else. Otherwise, the SortableList cannot know what the item is exactly.");
    // }
    getItemById = getItemById || ((id: string) => {
        return items.find(item => keyFn(item) == id); // should only loosely check as IDs are auto-converted to strings
    });
    let _store_set = sortableOptions.store.set;
    sortableOptions.store.set = (sortable) => {
        items = sortable.toArray()//.map(getItemById);
        console.log(sortable.toArray())
        _store_set(sortable); // still call old set callback function
        dispatch("orderChanged", items);
    };
    
    let sortable;
    let listElement;    
    onMount(() => {
        // if(listElement && !sortable) {        
        sortable = Sortable.create(listElement, sortableOptions);
        console.log("Sortable Created")
    // }
    })
    $: for (let item of items) {
        if (!item || keyFn(item) == null) {
            throw new Error("Item " + item + " has no valid identifier");
        }
    }
</script>


<div bind:this={ listElement } class={className} >
    {#each items as item (keyFn(item))}
	
    <slot { item }>{ item }</slot>    

    {/each}
</div>