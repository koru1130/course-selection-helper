import { writable } from 'svelte/store';
import type { CourseDisplayStatus, CourseList } from './types';
import { persistentWritable, writableFamily } from './utils';

const sampleCandidateCourses = ['58935', '58523', '97120']

export let candidateCourses  = persistentWritable<CourseList>("candidateCourses", []) //writable<CourseList>([]);
export let selectedCourses   = persistentWritable<CourseList>("selectedCourses", sampleCandidateCourses);

export let courseDisplayStatuses = writableFamily<string, CourseDisplayStatus>(
    {
        isHighlighting: false
    }
)

export let selectedCourseRefs = writable({} as {
    [key: string]: HTMLElement
} )