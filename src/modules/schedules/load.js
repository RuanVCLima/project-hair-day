import { hoursLoad } from "../form/hours-load.js";

//select the date input
const selectedDate= document.getElementById("date")
export function schedulesDay(){
    //get the date from input
    const date = selectedDate.value
    //search in the API the schedule to load in the right side of the screen

    //the time (future time + not scheduled) available in the left side
   

    //render the time available
    hoursLoad({date})
} 