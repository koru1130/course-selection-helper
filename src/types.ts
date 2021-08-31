//export type DayOfWeek = "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat"

export type SerNo = string

export type CourseList = SerNo[]

export const CTimeSection = (
    dayOfWeek: number, 
    startTime: number,
    duration : number,
    location : string) =>
        ({dayOfWeek, startTime, duration, location})

export type TimeSection = ReturnType<typeof CTimeSection>

// 傳給 GridCell 的時候傳 Course 跟 Section id/index 給他 (pointed course)


// export const CourseListItem = (
//         id: string
//     ) => 
//         ({id})

// export type CourseListItem = ReturnType<typeof CourseListItem>

//TODO: 換成實際的 type    
export const CCourseData = (
    serNo : SerNo, //流水號
    name : string,
    time : TimeSection[] | "N/A",
    teacher: string
    ) => 
        ({serNo, name, time, teacher})

export type CourseData = ReturnType<typeof CCourseData>

export type CourseDatas = {
    [key : string ] : CourseData
}

export interface _CourseData {
    流水號: string;
    授課對象: (string)[];
    課號: string;
    班次: string;
    課程名稱: string;
    簡介影片: string;
    學分: string;
    課程識別碼: string;
    全半年: string;
    必選修: string;
    授課教師: string;
    加選方式: string;
    時間教室: string;
    總人數: string;
    選課限制條件: string;
    備註: string;
    課程網頁: string;
    time: (TimeSection)[] | "N/A";
    weeks: number[] | "ALL";
}

  


export const CCourseDisplayStatus = (    
    isHighlighting : boolean
    //TODO: 待補其他欄位
    // color 之類的
    ) => 
        ({isHighlighting})

export type CourseDisplayStatus = ReturnType<typeof CCourseDisplayStatus>

//分成 CourseData (實際資料) 跟 CourseDisplayStatus (顯示狀態) 
//前者會存在一個 const Object (當 K-V mapping 用) 中，不會去操作
//後者可能會存一些顯示用的狀態，例如 Highlight，存在 atomFamily 中


// 到時候會刪掉
// export const Course = (
//     id : number,
//     name : string,
//     dayOfWeek: number, 
//     time: number,
//     duration : number) =>
//         ({id, name, dayOfWeek, time, duration})

// export type Course = ReturnType<typeof Course>

