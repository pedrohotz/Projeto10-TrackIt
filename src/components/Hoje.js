import { ContainerToday,BoxHabito} from "./ComponentsStyle";
import Seta from "../img/Seta.png"
import Footer from "./Footer";
export default function Hoje(){
    return(
    <>
        <ContainerToday>
            <h1>Segunda,17/05</h1>
            <h2>Nenhum hábito concluído ainda</h2>
            <div>
                <BoxHabito>
                    <div>
                    <h3>Ler 1 Capitulo de livro</h3>
                    <h4>Sequencia atual: 3 dias</h4>
                    <h4>Seu Recorde: 5 dias</h4>
                    </div>
                    <button><img src={Seta}></img></button>
                </BoxHabito>
                <BoxHabito>
                    <div>
                    <h3>Ler 1 Capitulo de livro</h3>
                    <h4>Sequencia atual: 3 dias</h4>
                    <h4>Seu Recorde: 5 dias</h4>
                    </div>
                    <button><img src={Seta}></img></button>
                </BoxHabito>
                <BoxHabito>
                    <div>
                    <h3>Ler 1 Capitulo de livro</h3>
                    <h4>Sequencia atual: 3 dias</h4>
                    <h4>Seu Recorde: 5 dias</h4>
                    </div>
                    <button><img src={Seta}></img></button>
                </BoxHabito>
            </div>
        </ContainerToday>
        <Footer/>
    </>
    );
}