
import react from "react";
import Login from "./login";
import Registro from "./Register";
import Habits from "./Habits";
import Header from "./Header";
import "../reset.css/reset.css";
import { Body } from "./ComponentsStyle";

export default function App(){
    return(
        <>
            <Header />
            <Habits />
        </>
    );
}