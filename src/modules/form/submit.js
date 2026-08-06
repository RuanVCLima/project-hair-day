import dayjs from "dayjs"

const form = document.querySelector("form")
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

    console.log("SENT!!")
}