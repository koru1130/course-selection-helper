import { writable } from 'svelte/store';
import type { CourseList } from './types';

const sampleCandidateCourses = ['74987', '12179', '34256']

export let candidateCourses  = writable<CourseList>([]) //writable<CourseList>([]);
export let selectedCourses   = writable<CourseList>(sampleCandidateCourses);