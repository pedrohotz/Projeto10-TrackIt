import { Habito, BtnDia, DivBotoes } from "./ComponentsStyle";
import lixeira from "../img/lixeira.png"
import Swal from "sweetalert2";
import { deleteHabito } from "./api";
import { useContext} from "react";
import UserContext from "../contexts/UserContext";
export default function Habit(props) {
    const { user } = useContext(UserContext);
    const days = [{ day: 'D', id: 0}, { day: 'S', id: 1}, { day: 'T', id: 2}, { day: 'Q', id: 3}, { day: 'Q', id: 4}, { day: 'S', id: 5}, { day: 'S', id: 6}]

    function  deletarHabito(id){
        Swal.fire({
            title: 'Tem certeza que deseja excluir o habito?',
            icon:"warning",
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: "Não",
        }).then((res) => {
            if(res.isConfirmed === true){
                deleteHabito(user.token,id)
               props.habitos.splice(props.habitos.indexOf(props.index))
               props.setHabitos([...props.habitos]);
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