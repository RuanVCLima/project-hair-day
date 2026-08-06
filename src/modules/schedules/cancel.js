
import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll(".period")

// generate a click event to each list (morning, afternoon and night)

periods.forEach((period)=>{
    //get the click event on the list
    period.addEventListener("click",async (event)=>{
        
        if(event.target.classList.contains("cancel-icon")){
            //get the father li from clicked element
            const item = event.target.closest("li")

            //get the id of the appointment to remove
            const id = Number(item.dataset.id);
            
            //verify if the id was selected
            if(id){
                //verify if the user really wants to cancel
                const isConfirm = confirm("Tem certeza de que quer cancelar o agendamento?")

                if(isConfirm){
                    //make the API request to cancel
                    await scheduleCancel({id})

                    //reload the schedules
                    schedulesDay()
                }
            }
        }
    })
})