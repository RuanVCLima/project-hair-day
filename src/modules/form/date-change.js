import {schedulesDay} from "../schedules/load.js"

//select the date input
const selectedDate = document.getElementById("date")

//reload the hours list when the date input change
selectedDate.onchange = ()=> schedulesDay()