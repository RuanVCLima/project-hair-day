
export function hoursClick(){
    const hours = document.querySelectorAll(".hour-available")

    hours.forEach((available)=>{
        available.addEventListener("click", (selected)=>{

            //removing the class hour-selected of all li not selected
            hours.forEach((hour)=>{
                hour.classList.remove("hour-selected")
            })

            //add class on the clicked li
            selected.target.classList.add("hour-selected")
        })
    })
}