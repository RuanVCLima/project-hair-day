import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours")
export function hoursLoad({date}){
    //clean the hours list
    hours.innerHTML = ""
    const opening = openingHours.map((hour)=>{
        //receive the hour
        const [scheduleHour] = hour.split(":")
        

        //add the hour in to date and verify if it is in the past
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())

        //define if the hour is available
       return {
        hour,
        available: !isHourPast,
       }

    })

    opening.forEach(({hour, available}) =>{
        const li = document.createElement("li")
        li.classList.add("hour")
        li.classList.add(available ? "hour-available":"hour-unavailable")

        li.textContent = hour
        if( hour === "9:00"){
            hourHeaderAdd("Manhã")
        } else if( hour === "13:00"){
            hourHeaderAdd("Tarde")
        } else if (hour === "18:00"){
            hourHeaderAdd("Noite")
        }
        hours.append(li)
    })

    //add the click event on the available hours
    hoursClick()
}

function hourHeaderAdd(title){
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title

    hours.append(header)
}