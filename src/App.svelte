<script lang="ts">
    import SortableList from "./components/SortableList.svelte";
    import TimeTable from './components/TimeTableD/Timetable.svelte'    
    import CourseList from './components/CouseListD/CourseList.svelte'
    import {candidateCourses, selectedCourses} from './stores'
    $: console.log($candidateCourses)
</script>

<style>
    .Main {
        height: 100vh;
        display: grid;  
        overflow: hidden;  
        grid-template-columns: 10em 10em 1fr;
    }
</style>

<!-- <SortableList bind:items let:item>
    Test123 {item}
</SortableList> -->
<div class="Main">
    <CourseList bind:courseList={$candidateCourses}/>
    <CourseList bind:courseList={$selectedCourses}/>
    <TimeTable></TimeTable>
    
</div>
