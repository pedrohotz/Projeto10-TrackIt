
import { MyHabits, Content, Habito } from "./ComponentsStyle";
import Footer from "./Footer";
import AddHabit from "./addHabit";
import Habit from "./habit";
import { useContext, useState, useEffect } from "react";
import UserContext from "../contexts/UserContext";
import { getHabitos } from "./api";

export default function Habits() {
    const { user } = useContext(UserContext);
    const [habitos, setHabitos] = useState([]);
    const [hidden, setHidden] = useState(true);
    useEffect(() => {
        const promisse = getHabitos(user.token);
        promisse.then((res) => setHabitos(res.data));
    }, []);
    console.log(habitos);
    return (
        <>
            <MyHabits>
                <h1>Meus hábitos</h1>
                <button onClick={() => setHidden(false)}>+</button>
            </MyHabits>
            <Content>
                <AddHabit hidden={hidden} setHidden={setHidden} setHabitos={setHabitos} />
                {habitos.length === 0 ? <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2> : habitos.map((habito) => <Habit id={habito.id} name={habito.name} days={habito.days} habitos={habitos} setHabitos={setHabitos} />)}
            </Content>
            <Footer />
        </>
    );
}