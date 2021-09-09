

import { StyledFooter } from "./ComponentsStyle";
import borda from "../img/borda.png"
export default function Footer(){
return(
    <StyledFooter>
        <a>Hábitos</a>
        <div>Hoje
            <img src={borda}></img>
        </div>
        <a>Histórico</a>
    </StyledFooter>
);

}