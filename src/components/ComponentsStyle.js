import styled from "styled-components";


const Container = styled.div`
background-color: #FFFFFF;
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;
width: 100vw;
    img{
        margin-top: 10vh;
        margin-bottom: 5vh;
    }
`;
 

const Input = styled.input`
    margin-top: 8px;
    width: 303px;
    height: 45px;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    cursor: ${props => props.habilitado ? "pointer" : "not-allowed"};
    background-color: ${ props => props.habilitado ? "#FFFFFF" : "#F2F2F2"};
    opacity: ${props => props.habilitado ? 1 : 0.6};
    
    ::placeholder{
        text-align: start;
        font-size: 19px;
        color: #DBDBDB;
    }

`;

const Button = styled.button`
    width: 303px;
    height: 45px;
    background-color:  #52B6FF;
    border-radius: 4.63636px;
    color: #FFFFFF;
    font-size: 20px;
    text-align: center;
    border: none;
    margin-top: 8px;
    opacity: ${props => props.habilitado ? 1 : 0.6};
    
` 

const Register = styled.a`
color: #52B6FF;
font-size: 14px;
text-align: center;
text-decoration: underline;
margin-top: 20px;

`;


const Topo = styled.header`
    z-index: 4;
    width: 100vw;
    height: 70px;
    background-color: #126BA5;
    position: fixed;
    top:0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 39px;
    color: #FFFFFF;
    
    h1{
        margin-left: 10px;
    }
    img{
        margin-right: 10px;
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
    }
`

     const MyHabits = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 10px;
        margin-right: 30px;
        color: #126BA5;
        font-size: 23px;
        margin-top: 90px;
        margin-bottom: 40px;
        width: 100vw;
        

        button{
            width: 40px;
            height: 35px;
            background: #52B6FF;
            border-radius: 4.63636px;
            color: #ffffff;
            border: none;
            margin-right: 30px;
        }
     `

    const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 30px;
    width: 100vw;
    h2{
        font-size: 18px;
        color: #666666;
        margin-right: 30px;
        margin-top: 20px;
    }
    `
    const StyledFooter = styled.footer`
    z-index: 10;
    position: fixed;
    display: flex;
    justify-content: space-around;
    width: 100vw;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
    height: 70px;
    align-items: center;
    color: #52B6FF;

        div{
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 90px;
            height: 90px;
            background-color: #52B6FF;
            margin-bottom: 60px;
            color: #ffffff;

        }
        a{
            text-decoration: none;
        }
      
    `
    const CaixaHabito = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    justify-content: space-around;
    width: 340px;
    height: 180px;
    border-radius: 5px;
        div {
            flex-direction: row;
            margin-left: 15px;
        }

        a{
            font-size: 15.976px;
            color: #52B6FF;
            margin-right: 30px;
        }
        input{
            margin-left: 15px;
        }


    `
    const BtnHabito = styled.button`
    width: 84px;
    height: 35px;
    background-color: #52B6FF;
    color: #ffffff;
    font: 16px;
    border: none;
    border-radius: 4.6px;
    margin-right: 20px;
    `

    const DivButton = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    `
    const BtnDia = styled.button`
    width: 30px;
    height: 30px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    color: #DBDBDB;
    font-size: 20px;
    margin-bottom: 30px;
    margin-right: 5px;
    `

    const ContainerToday = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 90px;
    margin-left: 10px;
        h1{
            font-size: 23px;
            color: #126BA5;
        }
        h2{
            font-size: 18px;
            color: #BABABA;
        }
        div{
            margin-top: 10px;
        }
    `
    const BoxHabito = styled.div`
    background-color: #ffffff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 340px;
    height: 94px;
    border-radius: 5px;
        button{ 
            background: #EBEBEB;
            width: 69px;
            height: 69px;
            border: 1px solid #E7E7E7;
            border-radius: 5px;
            
        }
        h3 {
            font-size: 20px;
            margin-bottom: 10px;
            color:#666666 ;
         }
         h4{
             font-size: 13px;
             color:#666666 ;
         }
    `


export {Register,Button,Input,Container,Topo,MyHabits,Content,StyledFooter,CaixaHabito,BtnHabito,DivButton,BtnDia,ContainerToday,BoxHabito}