import dayjs from "dayjs"

import {scheduleNew} from "../../services/schedule-new.js"
import { schedulesDay } from "../schedules/load.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

//today date input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")
//load today date
selectedDate.value = inputToday

//define minium date as today.
selectedDate.min = inputToday

form.onsubmit= async (event)=>{
    //prevent the default behavior of reloading the page
    event.preventDefault()

    try {
        //receveing the client's name
        const name = clientName.value.trim()
        if(!name){
            return alert("Informe o nome do cliente")
        }

        //recover the hour selected
        const hourSelected = document.querySelector(".hour-selected")
        
        //recover the hur selected
        if(!hourSelected){
            return alert("Por favor selecione um horário")
        }

        //recover only the hour
        const [hour] = hourSelected.innerText.split(":")
        
        //insert the hour on date

        const when = dayjs(selectedDate.value).add(hour, "hour")
        
        //generate a ID
        const id = new Date().getTime()

        //make the appointiment
        await scheduleNew({id,name,when})

        //reload the scheduling
        await schedulesDay()

        //clean the client input name
        clientName.value = " "
    } catch (error){
        alert("Não foi possível realizar o agendamento")
        console.log(error)
    }
}