
import { useState } from "react";
import Login from "./login";
import Registro from "./Register";
import Habits from "./Habits";
import Header from "./Header";
import Hoje from "./Hoje";
import History from "./History";
import "../reset.css/reset.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserContext from "../contexts/UserContext";

export default function App(){

    const [user,setUser] = useState({});
    const [progress,setProgress] = useState(0);
    const [habitsHoje,setHabitsHoje] = useState([]);
    return(
        <BrowserRouter>
        <UserContext.Provider value={{user,setUser,progress,setProgress,habitsHoje,setHabitsHoje}}>
            <Switch>
            <Route path="/" exact>
                <Login/>
            </Route>
            <Route path="/habitos" exact>
                <Header/>
                <Habits />
            </Route>
            <Route path="/registro" exact>
                <Registro/>
            </Route>
            <Route path="/hoje" exact>
                <Header/>
                <Hoje/>
            </Route>
            <Route path="/historico" exact>
                <Header/>
                <History/>
            </Route>
            </Switch>
        </UserContext.Provider>
        </BrowserRouter>
    );
}