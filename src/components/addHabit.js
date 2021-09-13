import { useState } from "react";
import { CaixaHabito,BtnHabito,Input,DivButton,BtnDia } from "./ComponentsStyle";
import { useContext} from "react";
import UserContext from "../contexts/UserContext";
import { getHabitos } from "./api";
import axios from "axios";
import Swal from "sweetalert2";
export default function AddHabit(props){
    const [selectedDay,setSelectedDay] = useState([]);
    const [days] = useState([{ day: 'D', id: 1,state:false}, { day: 'S', id: 2,state:false}, { day: 'T', id: 3,state:false}, { day: 'Q', id: 4,state:false}, { day: 'Q', id: 5,state:false}, { day: 'S', id: 6,state:false}, { day: 'S', id: 7,state:false}])
    const [name,setName] = useState("");
    const {user} = useContext(UserContext);
    function toggleDay(day){
        if(selectedDay.includes(day.id)){
            selectedDay.splice(selectedDay.indexOf(day.id),1)
            setSelectedDay([...selectedDay]);
            day.state = false;
        }
        else{
            setSelectedDay([...selectedDay,day.id]);
            day.state = true;
        }
    }


    function criarHabito(){
       
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }

        const body = {
            name:name,
            days:selectedDay,
        }
        if(!!name && selectedDay.length !== 0 ){
            const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",body,config);   
            promisse.then(() =>{
                getHabitos(user.token).then((res) => props.setHabitos(res.data))
            setSelectedDay([]);
            setName("");
            props.setHidden(true)} )
            .catch(()=> {
                Swal.fire(
                    {
                        icon:'error',
                        title: 'Erro',
                        text: 'Preencha todos os campos'
                    }
                )
            })
        }
        else {
            Swal.fire(
                {
                    icon:'error',
                    title: 'Erro',
                    text: 'Preencha todos os campos'
                }
            )
        }
    

    }
    return(
        <CaixaHabito hidden={props.hidden}>
            <Input placeholder="Nome do hábito" value={name} onChange={(e) => setName(e.target.value)}/>
            <div>
                {days.map((day)=><BtnDia onClick={() => toggleDay(day)} selecionado={day.state}>{day.day}</BtnDia>)}
            </div>
            <DivButton>
                <a onClick={()=> props.setHidden(true)}>Cancelar</a>
                <BtnHabito onClick={criarHabito}>Salvar</BtnHabito>
            </DivButton>
        </CaixaHabito>
    );
}