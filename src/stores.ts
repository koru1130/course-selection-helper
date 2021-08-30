import { writable } from 'svelte/store';
import type { CourseDisplayStatus, CourseList } from './types';
import { writableFamily } from './utils';

const sampleCandidateCourses = ['74987', '12179', '34256', '80120', '12941', '69889']

export let candidateCourses  = writable<CourseList>([]) //writable<CourseList>([]);
export let selectedCourses   = writable<CourseList>(sampleCandidateCourses);

export let courseDisplayStatuses = writableFamily<string, CourseDisplayStatus>(
    {
        isHighlighting: false
    }
)