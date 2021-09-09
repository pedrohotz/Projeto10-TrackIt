import styled from "styled-components";


const Container = styled.div`
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
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
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
        margin-right: 30px;
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
            position: relative;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 90px;
            height: 90px;
            background-color: #52B6FF;
            margin-bottom: 60px;
            color: #ffffff;

            img{
                position: absolute;
                margin-left: 12px;
            }
        }
    `


export {Register,Button,Input,Container,Topo,MyHabits,Content,StyledFooter}