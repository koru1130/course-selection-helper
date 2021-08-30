import { writable } from 'svelte/store';
import type { CourseDisplayStatus, CourseList } from './types';
import { persistentWritable, writableFamily } from './utils';

const sampleCandidateCourses = ['74987', '12179', '34256', '80120', '12941', '69889']

export let candidateCourses  = persistentWritable<CourseList>("candidateCourses", []) //writable<CourseList>([]);
export let selectedCourses   = persistentWritable<CourseList>("selectedCourses", sampleCandidateCourses);

export let courseDisplayStatuses = writableFamily<string, CourseDisplayStatus>(
    {
        isHighlighting: false
    }
)