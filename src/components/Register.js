import { Register,Input,Container,Button } from "./ComponentsStyle"
import logo from "../img/logo.png"
import { useHistory } from "react-router"
import { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Registro(){
    let history = useHistory();
    const [email,setEmail] = useState("");
    const [name,setName] = useState("");
    const [image,setImage] = useState("");
    const [password,setPassword] = useState("");
    const [habilitado,setHabilitado] = useState(true);

    function Voltar(){
        history.push("/");
    }

    function Registrar(){
        setHabilitado(true);
        const body = {
            email,
            name,
            image,
            password,
        }
            axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",body).then(Redirecionar).catch(setTimeout(Error,1500)).finally(Carregar);
    }
    function Redirecionar(){
        setTimeout(()=>history.push("/"),2000);
    }

    function Error(){
        alert("Usuario Inválido")
        setHabilitado(true)
    }
    function Carregar(){
        setHabilitado(false);
    }

    return(
        <Container>
        <img src={logo}></img>
            <Input placeholder="email" type="email" value={email} onChange={e => setEmail(e.target.value)} habilitado={habilitado}></Input>
            <Input placeholder="senha" type="password" value={password} onChange={e => setPassword(e.target.value)}  habilitado={habilitado}></Input>
            <Input placeholder="nome" type="text" value={name} onChange={e => setName(e.target.value)}  habilitado={habilitado}></Input>
            <Input placeholder="foto" type="text" value={image} onChange={e => setImage(e.target.value)}  habilitado={habilitado}></Input>
            <Button onClick={Registrar} habilitado={habilitado}>{habilitado ? "Cadastrar" : <Loader type="ThreeDots" color="#FFFFFF" height={40} width={60}/>}</Button>


        <Register onClick={Voltar}>Já tem uma conta? Faça login!</Register>
        </Container>
    )
}
