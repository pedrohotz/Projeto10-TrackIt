import { Register,Input,Container,Button } from "./ComponentsStyle"
import logo from "../img/logo.png"
export default function Registro(){
    return(
        <Container>
        <img src={logo}></img>
        <Input placeholder="email" type="email"></Input>
        <Input placeholder="senha" type="password"></Input>
        <Input placeholder="nome" type="text"></Input>
        <Input placeholder="foto" type="text"></Input>
        <Button>Cadastrar</Button>
        <Register>Já tem uma conta? Faça login!</Register>
        </Container>
    )
}
