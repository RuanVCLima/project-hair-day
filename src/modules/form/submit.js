import dayjs from "dayjs"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

//today date input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")
//load today date
selectedDate.value = inputToday

//define minium date as today.
selectedDate.min = inputToday

form.onsubmit= (event)=>{
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
    } catch (error){
        alert("Não foi possível realizar o agendamento")
        console.log(error)
    }
}