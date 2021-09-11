import { ContainerToday,BoxHabito} from "./ComponentsStyle";
import Seta from "../img/Seta.png"
import Footer from "./Footer";
import { useContext, useState,useEffect } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";
export default function Hoje(){
    const {user} = useContext(UserContext)
    const dayjs = require('dayjs');
    let day = dayjs().locale('pt-br');
    const [habits,setHabits] = useState([]);
    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }
    
    useEffect(() => { 
		axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",config).then((res)=> setHabits(res.data))

	    }, []); 

       
    return(
    <>
        <ContainerToday>
            <h1>{day.format("dddd, D/MM")}</h1>
            <h2>Nenhum hábito concluído ainda</h2>
            <div>
                {habits.map((habit) =>                 <BoxHabito>
                    <div>
                    <h3>{habit.name}</h3>
                    <h4>Sequencia atual:{habit.currentSequence} dias</h4>
                    <h4>Seu Recorde: {habit.highestSequence} dias</h4>
                    </div>
                    <button><img src={Seta}></img></button>
                </BoxHabito>)}
            </div>
        </ContainerToday>
        <Footer/>
    </>
    );
}