
import dayjs from "dayjs"
import {apiConfig} from "../services/api-config.js"
export async function scheduleFetchByDay({date}){
    try{
        //making a request
        const response = await fetch(`${apiConfig.baseURL}/schedules`)

        //convert to JSON
        const data = await response.json()

        //filter the schedule for day selected
        const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"))

        return dailySchedules
    }catch (error){
        console.log(error)
        alert("Não foi possível buscar os  agendamentos do dia selecionado")
    }
}