
import { useContext } from "react"
import UserContext from "../contexts/UserContext"
import { Topo } from "./ComponentsStyle"
export default function Header(){
    const {user} = useContext(UserContext);

    return(
        <Topo> <h1>TrackIt</h1> 
            <img src={user.image}></img>
        </Topo>
    )


}