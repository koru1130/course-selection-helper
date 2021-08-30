<script lang="ts">
import { onMount } from "svelte";

import { cellWidth } from "../../consts";

import { getCourse } from "../../data/getCourse";
import { courseDisplayStatuses } from "../../stores";

import type { SerNo } from "../../types";
    
export let serNo    : SerNo;
export let sectionId: number;
export let nth      : number; 


const course = getCourse(serNo) 
if (course.time == "N/A") throw Error("time is N/A")
const length = course.time[sectionId].duration

const displayStatus = courseDisplayStatuses(serNo)
// onMount( () => console.log("CourseBar", serNo) )
$: backgroundColor = $displayStatus.isHighlighting ? 'deeppink' : 'rgb(89, 151, 26)'

</script>

<style>
    .CourseBar {
        position: absolute;
        color: white;
        border-radius: 5px;            
        z-index: 1;
        padding-left: 3px;
        margin-left: 2px;        
    }
</style>

<!-- background-color: {status.isHighlighting ? 'red' : 'green'} -->
<div 
    class="CourseBar" 
    style={`
    top: ${(nth * 40 + 5)}px; 

    width: ${(length * cellWidth -0.3)}em; 
    background-color: ${backgroundColor}`}
    on:mouseenter={()=> $displayStatus.isHighlighting = true}
    on:mouseleave={()=> $displayStatus.isHighlighting = false}
>
 {serNo + " " + course.name} 
</div>



