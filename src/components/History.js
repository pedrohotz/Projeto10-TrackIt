import { Content, MyHabits } from "./ComponentsStyle";
import Footer from "./Footer";

export default function History(){
    return(
    <>
        <MyHabits>
            <h1>Histórico</h1>
        </MyHabits>
        <Content>
            <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
        </Content>
        <Footer/>
    </>
    );
}