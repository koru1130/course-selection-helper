<script lang="ts">
    import SortableList from "./components/utils/SortableList.svelte";
    import TimeTable from './components/TimeTableD/Timetable.svelte'    
    import CourseList from './components/CouseListD/CourseList.svelte'
    import {candidateCourses, selectedCourses} from './stores'
    let displaySerNo = false;
    $: console.log(displaySerNo)

    let editCandidateCourses = "";
    let editSelectedCourses = "";

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
        <div>
            <div class="form-check form-switch" on:click={()=>document.activeElement.blur()}>
                <input class="form-check-input shadow-none" type="checkbox" id="switchSerNo" 
                    bind:checked={displaySerNo} 
                    on:change={()=> {
                        if(displaySerNo){
                            // list -> textarea
                            editCandidateCourses = $candidateCourses.join("\n")
                            editSelectedCourses = $selectedCourses.join("\n")
                        }else{
                            // textarea -> list
                            $candidateCourses = editCandidateCourses.split('\n').filter( x => x.length>=1 )
                            $selectedCourses = editSelectedCourses.split('\n').filter( x => x.length>=1 )
                        }
                    }}
                >
                <label class="form-check-label" for="switchSerNo">編輯模式</label>
            </div>
        </div>
        <div class="list-container">
            {#if !displaySerNo}
                <CourseList bind:courseList={$candidateCourses}/>
                <CourseList bind:courseList={$selectedCourses}/>
            {:else}
                <textarea class="form-control" bind:value={editCandidateCourses}/>
                <textarea class="form-control" bind:value={editSelectedCourses}/>
            {/if}            
        </div>    
    </div>
    
    <TimeTable></TimeTable>
    
</div>
