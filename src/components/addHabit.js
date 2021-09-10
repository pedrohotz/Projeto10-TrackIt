import { CaixaHabito,BtnHabito,Input,DivButton,BtnDia } from "./ComponentsStyle";

export default function AddHabit(){
    return(
        <CaixaHabito>
            <Input placeholder="Nome do hábito"/>
            <div>
                <BtnDia>D</BtnDia>
                <BtnDia>S</BtnDia>
                <BtnDia>T</BtnDia>
                <BtnDia>Q</BtnDia>
                <BtnDia>Q</BtnDia>
                <BtnDia>S</BtnDia>
                <BtnDia>S</BtnDia>
            </div>
            <DivButton>
                <a>Cancelar</a>
                <BtnHabito>Salvar</BtnHabito>
            </DivButton>
        </CaixaHabito>
    );
}