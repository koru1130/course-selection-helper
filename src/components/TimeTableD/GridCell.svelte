<script lang="ts">
import { onMount } from "svelte";

import type { SerNo } from "../../types";

import CourseBar from "./CourseBar.svelte";

export let v: ([SerNo, number] | "PlaceHolder")[]
export let height: number
// onMount( () => console.log("GridCell", v.length) )
</script>


<div style="position: relative; min-height: {height}em;">
    {#each v as x, i (x)}
        {#if x != "PlaceHolder"}
            <CourseBar serNo={x[0]} sectionId={x[1]} nth={i} />
        {/if}
    {/each}
</div>
