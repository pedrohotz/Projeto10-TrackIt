
import { Register,Input,Container,Button } from "./ComponentsStyle"
import logo from "../img/logo.png"
import { useContext, useState } from "react"
import axios from "axios";
import { useHistory } from "react-router";
import Loader from "react-loader-spinner";
import UserContext from "../contexts/UserContext";
export default function Login(){
    const {user,setUser} = useContext(UserContext);
    const [habilitado,setHabilitado] = useState(true);
    let history = useHistory();
    const [email,setEmail] = useState("");
    const [password,setSenha] = useState("");

    function Logar(){
        const body = {
            email,
            password
        }
        const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",body)
        promisse.then(Redirecionar);
        promisse.finally(Carregar);
        promisse.catch(Error);
    }

    function Redirecionar(res){
        setUser(res.data)
        setTimeout(()=>history.push("/hoje"),2000);
    }
    function Carregar(){
        setHabilitado(false);
    }
    function Registrar(){
        history.push("/registro")
    }
    function Error(){
        alert("Usuario Inválido")
        setHabilitado(true)
    }
    return(
        <Container>
        <img src={logo}></img>
        <Input placeholder="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} habilitado={habilitado}></Input>
        <Input placeholder="senha" type="password" value={password} onChange={(e) => setSenha(e.target.value)} habilitado={habilitado}></Input>
        <Button onClick={Logar} habilitado={habilitado}>{habilitado ? "Entrar" : <Loader type="ThreeDots" color="#FFFFFF" height={40} width={60}/>}</Button>
        <Register onClick={Registrar}>Não tem uma conta? Cadastre-se!</Register>
        </Container>
    )
}


