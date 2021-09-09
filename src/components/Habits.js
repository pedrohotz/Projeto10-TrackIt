
import { MyHabits,Content,Body } from "./ComponentsStyle";
import Footer from "./Footer";
export default function Habits(){
    return(
<>
        <MyHabits>
            <h1>Meus hábitos</h1>
            <button>+</button>
        </MyHabits>
        <Content>
                <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>
        </Content>
        <Footer/>
    </>
    );
}