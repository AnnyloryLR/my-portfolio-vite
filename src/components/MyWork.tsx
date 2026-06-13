import styled from "styled-components";
import { FaGithub} from "react-icons/fa";
import ArrowDownDouble from "./ArrowDownDouble";
import ArrowMobileLeft from "./ArrowMobileLeft";
import ArrowMobileRight from "./ArrowMobileRight";

const MyWork = () => {
    
        return (
        <MyWorkContainer>
            <Title>My Work</Title>           
            <WorkGrid>
                <Item>               
                    
                    <a href="https://github.com/AnnyloryLR/boardcamp_oo">
                        <img src="https://www.tovima.com/wp-content/uploads/2024/01/22/board-games-scaled.jpg"/>
                        BoardCamp: API for game rental - JAVA & Spring Boot 
                        <StyledIcon/>
                    </a> 
                </Item>
                    
                <Item>
                    <iframe src="https://www.youtube.com/embed/GK0-ca5RLpk" ></iframe>
                    <a href="https://github.com/AnnyloryLR/TrackIt">
                        TrackIt: web app for tracking daily activities - React & Vite
                        <StyledIcon/>
                    </a>           
                </Item>
                            
                <Item>
                    <a href="https://github.com/AnnyloryLR/driven_recharge">
                        <img src="https://www.tekcommerce.com.br/assets/img/recarga-celular.png"/>
                        Driven-recharge: API for mobile recharge - Node & Express
                        <StyledIcon/>
                    </a>    
                </Item>

                <Item>
                    <iframe src="https://youtube.com/embed/-MOkgSfN_5U" ></iframe>
                    <a href="https://github.com/AnnyloryLR/ParrotGame.github.io">
                        Parrot Game: Web app to play memo game with parrots - 
                        HTML5 | CSS3 | JavaScript
                        <StyledIcon/>
                    </a> 
                    
                </Item>

                <Item>
                    <iframe src="https://www.youtube.com/embed/5Nusg8muZMA" ></iframe>
                    <a href="https://github.com/AnnyloryLR/cineflex">
                        Cineflex: web app for booking movie tickets - React & Vite
                        <StyledIcon/>
                    </a> 
                    
                </Item>
            </WorkGrid>
            <ArrowDownDouble path="/contact"/>
            <ArrowMobileLeft path="/resume"/>
            <ArrowMobileRight path="/contact"/>

        </MyWorkContainer>
     )
}

export default MyWork;

const MyWorkContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    ::-webkit-scrollbar{
        display:none;
    }
    @media (max-width:1024px){
        height: 87vh;
        min-width: 100%;
    }

`

const Title = styled.h1`
    margin:0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5%;
    font-size: clamp(1rem, 5vw, 4rem);
    color: #006ff7;
    @media (max-width: 900px){
        font-size:2rem;
    }
    
`

const WorkGrid = styled.div`
    width: 70%;
    height: 50%;
    border-top:3px groove #006ff7;
    border-radius:10px;
    padding:2%;
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:2%; 
    overflow-y:scroll;
    @media (max-width:1024px){
        height: 80%;
        max-width: 100%;
        display:flex;
        flex-direction:column;
        justify-content: flex-start;
    }

`
const Item = styled.div`
    width:50%;
    height:70%;
    margin:2%;
    border-radius:10px;
    display:flex;
    flex-direction: column;
    justify-items:flex-start;
    align-items: center;
    background-color: #062783;
    @media (max-width:1024px){
        width: 80%;
  
    }
    img{
        margin-top: 5%;
        width: 80%;
        height: 80%;
        border-radius:5%;
    }
    iframe{
        margin:5%;
        height:80%;
        width: 80%;
        border-style:none;
        border-radius:5%;
    
    }
    a{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size:0.8rem;
        text-decoration:none;
        color: #006ff7;
        text-align: center;
    }

    
`

const StyledIcon = styled(FaGithub)`
    font-size:30px;
    color: #006ff7;
`
