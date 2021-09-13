import { Habito, BtnDia, DivBotoes } from "./ComponentsStyle";
import lixeira from "../img/lixeira.png"
import { useState } from "react";
import Swal from "sweetalert2";

export default function Habit(props) {
    const days = [{ day: 'D', id: 1}, { day: 'S', id: 2}, { day: 'T', id: 3}, { day: 'Q', id: 4}, { day: 'Q', id: 5}, { day: 'S', id: 6}, { day: 'S', id: 7}]

    function  deletarHabito(id){
        Swal.fire({
            title: 'Tem certeza que deseja excluir o habito?',
            icon:"warning",
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: "Não",
        }).then((res) => {
            if(res.isConfirmed === true){
                console.log("deletou")
            }
        })

    }
    return (
        <Habito>
    
            <DivBotoes>
                <h1>{props.name}</h1>
                <div>
                    <img src={lixeira}  onClick={() => deletarHabito(props.id)}></img>
                </div>
            </DivBotoes>
            <div>
                {days.map((day) => <BtnDia selecionado={props.days.includes(day.id)} >{day.day}</BtnDia> )}
            </div>
        </Habito>
    );
}