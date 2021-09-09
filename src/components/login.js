
import { Register,Input,Container,Button } from "./ComponentsStyle"
import logo from "../img/logo.png"
export default function Login(){
    return(
        <Container>
        <img src={logo}></img>
        <Input placeholder="email" type="email"></Input>
        <Input placeholder="senha" type="password"></Input>
        <Button>Entrar</Button>
        <Register>Não tem uma conta? Cadastre-se!</Register>
        </Container>
    )
}


