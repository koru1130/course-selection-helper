import type { CourseData, SerNo, _CourseData } from "../types"
import {CCourseData} from '../types'
import courseDatas from './courses.json'

export const getCourse = (serNo : SerNo) => {
    const c = courseDatas[serNo]
    if(!c) return null
    return CCourseData(c.流水號 ,c.課程名稱, c.time, c.授課教師)
}