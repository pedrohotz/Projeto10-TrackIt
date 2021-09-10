import { Register,Input,Container,Button } from "./ComponentsStyle"
import logo from "../img/logo.png"
import { useHistory } from "react-router"
export default function Registro(){
    let history = useHistory();
    function Voltar(){
        history.push("/");
    }


    return(
        <Container>
        <img src={logo}></img>
        <Input placeholder="email" type="email"></Input>
        <Input placeholder="senha" type="password"></Input>
        <Input placeholder="nome" type="text"></Input>
        <Input placeholder="foto" type="text"></Input>
        <Button>Cadastrar</Button>
        <Register onClick={Voltar}>Já tem uma conta? Faça login!</Register>
        </Container>
    )
}
