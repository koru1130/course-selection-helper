<script lang="ts">
    import type { SerNo } from "../../types";
    import {getCourse} from '../../data/getCourse'
    import { courseDisplayStatuses } from "../../stores";
    let copied = false;
    export let self;
    export let serNo: SerNo;
    export let deleteItem;
    const course = getCourse(serNo)
    const displayStatus = courseDisplayStatuses(serNo)
    $: backgroundColor =
        course
            ? $displayStatus.isHighlighting
                ? '#C8EBFB'
                : 'none'
            : 'red'
</script>

<style>
    .ListItem {
        position: relative;
        display: block;
        padding: .75rem .5rem;
        margin-bottom: -1px;
        /* background-color: #fff;  */
        border: 1px solid rgba(0,0,0,.125);
        /* font-size: smaller; */

        user-select: none;
    }
</style>

<div class="ListItem" data-id={serNo}
    style={`background-color : ${backgroundColor};`}
    bind:this={self}
    on:mouseenter={()=> $displayStatus.isHighlighting = true}
    on:mouseleave={()=> $displayStatus.isHighlighting = false}
>
    <button on:click={() => deleteItem(serNo)} >
        <span class="material-icons">
            clear
        </span>
    </button>    
    {#if course}
        {course.name}    
        <br>
        <small style="float: left"> {serNo} 
            <button  on:click={()=>{                
                navigator.clipboard.writeText(serNo);
                copied = true;
                setTimeout(()=>{
                    copied = false;
                }, 300)
            }}>
                <span class="material-icons" style="font-size: 0.8em;">
                    content_copy
                </span>
                {copied ? 'Copied' : ''}
            </button>            
        </small>
        <small style="float: right"> {course.teacher} </small>
    {:else}
        {serNo}
    {/if}    
</div>