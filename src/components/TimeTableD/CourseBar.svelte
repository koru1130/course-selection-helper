<script lang="ts">
import { onMount } from "svelte";

import { cellWidth } from "../../consts";

import { getCourse } from "../../data/getCourse";

import type { SerNo } from "../../types";
    
export let serNo    : SerNo;
export let sectionId: number;
export let nth      : number; 


const course = getCourse(serNo) 
if (course.time == "N/A") throw Error("time is N/A")
const length = course.time[sectionId].duration

// onMount( () => console.log("CourseBar", serNo) )

</script>

<style>
    .CourseBar {
        position: absolute;
        color: white;
        border-radius: 5px;
        background-color : rgb(89, 151, 26);    
        z-index: 1;
        padding-left: 3px;
    }
</style>

<!-- background-color: {status.isHighlighting ? 'red' : 'green'} -->
<div 
    class="CourseBar" 
    style="top: {(nth * 40 + 5)}px; width: {(length * cellWidth - 0.5)}em"
>
 {serNo + " " + course.name} 
</div>



