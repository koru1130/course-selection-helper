<script lang="ts">
    import type { SerNo } from "../../types";
    import {getCourse} from '../../data/getCourse'

    export let serNo: SerNo;
    const course = getCourse(serNo)
</script>

<style>
    .ListItem {
        position: relative;
        display: block;
        /* padding: .75rem 1.25rem; */
        margin-bottom: -1px;
        /* background-color: #fff;  */
        border: 1px solid rgba(0,0,0,.125);
        /* font-size: smaller; */
        user-select: none;
    }
</style>

<div class="ListItem" data-id={serNo}>
    {course ? serNo + "\n" + course.name : serNo}
</div>