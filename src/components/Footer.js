

import { StyledFooter } from "./ComponentsStyle";
import { Link } from "react-router-dom";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css'
import { useContext, useState } from "react"
import UserContext from "../contexts/UserContext"
export default function Footer(){
    const {progress,habitsHoje} = useContext(UserContext);
    let valor = ((progress/habitsHoje.length)*100).toFixed(0);
return(
    <StyledFooter>
        <Link to="/habitos">
        <span>Hábitos</span>
        </Link>
        <Link to="/hoje">
        <div>
    
        <CircularProgressbar value={valor} text={!valor ? `Hoje ${valor}%` : `Hoje`} styles={buildStyles({
            backgroundColor: "#FFFFFF",
            textColor:"#FFFFFF",
            pathColor:"#FFFFFF",
            textSize: "16px"
        })}/>
        </div>
        </Link>
        <Link to="/historico">
        <span>Histórico</span>
        </Link>
    </StyledFooter>
);

}