<script lang="ts">
import { onMount } from "svelte";

import type { SerNo } from "../../types";

import CourseBar from "./CourseBar.svelte";

export let v: ([SerNo, number] | "PlaceHolder")[]
export let height: number
const _v = v.map( (x, i) => ({x, i}) ).filter( y => y.x != "PlaceHolder") as {
    x: [string, number];
    i: number;
}[]

onMount( () => console.log("GridCell", v) )
</script>


<div style="position: relative; min-height: {height}em;">
    {#each _v as { x, i } (x[0])}        
        <CourseBar serNo={x[0]} sectionId={x[1]} nth={i} />        
    {/each}
</div>
