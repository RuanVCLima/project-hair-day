
import { apiConfig } from "./api-config.js";

export async function scheduleNew({id, name, when}){
    try{
        //making a request to send the dates of scheduling
        await fetch(`${apiConfig.baseURL}/schedules`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id,name,when}),
        })

        //show message of successful scheduling
        alert("Agendamento realizado com sucesso")
    } catch(error){
        console.log(error)
        alert("Não foi possível agentar. Tente novamente mais tarde")
    }
}