import { writable } from 'svelte/store';
import type { CourseDisplayStatus, CourseList } from './types';
import { persistentWritable, writableFamily } from './utils';

const sampleCandidateCourses = ["12941","76953","69889","80120","54547"]

export let candidateCourses  = persistentWritable<CourseList>("candidateCourses", []) //writable<CourseList>([]);
export let selectedCourses   = persistentWritable<CourseList>("selectedCourses", sampleCandidateCourses);

export let courseDisplayStatuses = writableFamily<string, CourseDisplayStatus>(
    {
        isHighlighting: false
    }
)