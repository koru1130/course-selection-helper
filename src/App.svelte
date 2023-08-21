<script lang="ts">    
    import TimeTable from './components/TimeTableD/TimeTable.svelte'    
    import CourseList from './components/CouseListD/CourseList.svelte'
    import {candidateCourses, selectedCourses, selectedCourseRefs} from './stores'
    import { onMount } from "svelte";
    import { findDuplicates } from './utils';
    import { concat } from 'fp-ts/lib/ReadonlyNonEmptyArray';
    import { map } from 'fp-ts/lib/Functor';
    import { trim } from 'fp-ts/lib/string';

    let displaySerNo = false;
    $: console.log(displaySerNo)

    let editCandidateCourses = "";
    let editSelectedCourses = "";
    onMount(()=>{
        candidateCourses.useLocalStorage()
        selectedCourses.useLocalStorage()
    })

</script>

<style>
    .Main {
        height: 100vh;
        display: grid;  
        overflow: hidden;  
        grid-template-columns: 25em 1fr;        
    }
    .list-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        flex: 1 1 auto;
        overflow-y: hidden;
    }

    .left-area {
        display: flex;
        flex-direction: column;
        overflow-y: hidden;        
    }

    textarea {
        resize: none;
        overflow-y: scroll;
        border: 1px black solid;
    }



</style>

<!-- <SortableList bind:items let:item>
    Test123 {item}
</SortableList> -->
<div class="Main">
    <div class="left-area">
        <div style="clear: both;">
            <div class="form-check form-switch" on:click={()=>{
                if (document.activeElement instanceof HTMLElement) {
                    document.activeElement.blur();
                }
            }} style="float:left">
                <input class="form-check-input shadow-none" type="checkbox" id="switchSerNo" 
                    bind:checked={displaySerNo} 
                    on:change={(e)=> {
                        if(displaySerNo){
                            // list -> textarea
                            editCandidateCourses = $candidateCourses.join("\n")
                            editSelectedCourses = $selectedCourses.join("\n")
                        }else{
                            // textarea -> list
                            const _candidateCourses = editCandidateCourses.split('\n').filter( x => x.length>=1 ).map( x => x.trim() )
                            const _selectedCourses = editSelectedCourses.split('\n').filter( x => x.length>=1 ).map(x => x.trim())
                            const duplicatedItem = findDuplicates(_candidateCourses.concat(_selectedCourses))
                            if(duplicatedItem.length >= 1){
                                alert(`重複的流水號: ${duplicatedItem}`)
                                displaySerNo = true
                            }else{
                                $candidateCourses = _candidateCourses
                                $selectedCourses = _selectedCourses
                            }
                        }
                    }}
                >
                <label class="form-check-label" for="switchSerNo">編輯模式</label>
            </div>
            <div style="float:right;">
                學期：112-1
            </div>
        </div>
        <div class="list-container">
            {#if !displaySerNo}
                <CourseList bind:courseList={$candidateCourses}/>
                <CourseList bind:refs={$selectedCourseRefs} bind:courseList={$selectedCourses}/>
            {:else}
                <textarea class="form-control" bind:value={editCandidateCourses}/>
                <textarea class="form-control" bind:value={editSelectedCourses}/>
            {/if}            
        </div>    
    </div>
    
    <TimeTable></TimeTable>
    
</div>
