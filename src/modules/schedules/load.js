
import { scheduleFetchByDay } from "../../services/schedule.fetch-by-day.js";
import { hoursLoad } from "../form/hours-load.js";

//select the date input
const selectedDate= document.getElementById("date")
export async function schedulesDay(){
    //get the date from input
    const date = selectedDate.value

    //search in the API the schedule
    const dailySchedules = await scheduleFetchByDay({date})

    //render the time available
    hoursLoad({date})
} 