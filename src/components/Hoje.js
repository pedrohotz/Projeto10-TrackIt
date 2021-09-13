import { ContainerToday,BoxHabito,BtnCheck,Sequencia,Progress} from "./ComponentsStyle";
import Seta from "../img/Seta.png"
import Footer from "./Footer";
import { useContext, useState,useEffect } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import * as dayjs from 'dayjs';
import { toggleHabito } from "./api";
import { useHistory } from "react-router";
export default function Hoje(){
    const {user,habitsHoje,setHabitsHoje,progress,setProgress} = useContext(UserContext)
    const [habitosCheck,setHabitosCheck] = useState([]);
    const [sequence,setSequence] = useState(0);
    const [state,setState] = useState(false);
    let history = useHistory()
    require('dayjs/locale/pt-br');
    let day = dayjs().locale('pt-br');
    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }
    
    useEffect(() => { 
		axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",config).then((res)=> setHabitsHoje(res.data)).catch(redirecionar)

	    }, []); 

        function marcarHabito(h){
            if(habitosCheck.includes(h)){
                habitosCheck.splice(habitosCheck.indexOf(h),1);
                setHabitosCheck([...habitosCheck]);
                toggleHabito(user.token,h.id,'uncheck');
                removeProgress();
            }
            else{
                setHabitosCheck([...habitosCheck,h]);
                toggleHabito(user.token,h.id,'check');
                addProgress();
            }
            
        }
        function redirecionar()
        {
            history.push("/");
        }
        function addProgress(){
            setProgress(progress + 1);
            setSequence(sequence + 1);
            setState(true);
        }
        function removeProgress(){
            setProgress(progress - 1);
            setSequence(sequence - 1);
            setState(false);
        }
    return(
    <>
        <ContainerToday>
            <h1>{day.format("dddd, D/MM")}</h1>
            <Progress estado={state}>{progress === 0 ? "Nenhum hábito concluído ainda" : ((progress/habitsHoje.length)*100).toFixed(0) + '% dos hábitos concluidos hoje'  }</Progress>
            <div>
                {habitsHoje.map((habit) =>                 <BoxHabito>
                    <div>
                    <h3>{habit.name}</h3>
                    <Sequencia estado={state}>Sequencia atual: {sequence + habit.currentSequence} dias</Sequencia>
                    <Sequencia>Seu Recorde: {habit.highestSequence} dias</Sequencia>
                    </div>
                    {habitosCheck.includes(habit) ? habit.done = true : habit.done = false}
                    <BtnCheck onClick={() => marcarHabito(habit)} estado={habit.done}><img src={Seta}></img></BtnCheck>
                </BoxHabito>)}
            </div>
        </ContainerToday>
        <Footer/>
    </>
    );
}