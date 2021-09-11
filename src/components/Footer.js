

import { StyledFooter } from "./ComponentsStyle";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css'
export default function Footer(){
    const porcerto = 66;
return(
    <StyledFooter>
        <Link to="/habitos">
        <span>Hábitos</span>
        </Link>
        <Link to="/hoje">
        <div>
        <CircularProgressbar value={porcerto} text={ `${porcerto}%`} />
        </div>
        </Link>
        <span>Histórico</span>
    </StyledFooter>
);

}