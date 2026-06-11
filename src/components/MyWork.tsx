import styled from "styled-components";
import { FaGithub} from "react-icons/fa";
import HireMeButton from "./HireMeButton";
import ArrowDownDouble from "./ArrowDownDouble";
import ArrowMobileLeft from "./ArrowMobileLeft";
import ArrowMobileRight from "./ArrowMobileRight";

const MyWork = () => {
    
        return (
        <MyWorkContainer>
            <Title>My Work</Title>           
            <WorkGrid>
                <ShortItem>               
                    
                    <a href="https://github.com/AnnyloryLR/boardcamp_oo">
                        <img src="https://www.tovima.com/wp-content/uploads/2024/01/22/board-games-scaled.jpg"/>
                        BoardCamp: API for game rental - JAVA & Spring Boot 
                        <StyledIcon/>
                    </a> 
                </ShortItem>
                    
                <TallItem>
                    <iframe src="https://www.youtube.com/embed/GK0-ca5RLpk" ></iframe>
                    <a href="https://github.com/AnnyloryLR/TrackIt">
                        TrackIt: web app for tracking daily activities - React & Vite
                        <StyledIcon/>
                    </a>           
                </TallItem>
                            
                <ShortItem>
                    <a href="https://github.com/AnnyloryLR/driven_recharge">
                        <img src="https://www.tekcommerce.com.br/assets/img/recarga-celular.png"/>
                        Driven-recharge: API for mobile recharge - Node & Express
                        <StyledIcon/>
                    </a>    
                </ShortItem>

                <WideItem>
                    <iframe src="https://youtube.com/embed/-MOkgSfN_5U" ></iframe>
                    <a href="https://github.com/AnnyloryLR/ParrotGame.github.io">
                        Parrot Game: Web app to play memo game with parrots - 
                        HTML5 | CSS3 | JavaScript
                        <StyledIcon/>
                    </a> 
                    
                </WideItem>

                <TallItem>
                    <iframe src="https://www.youtube.com/embed/5Nusg8muZMA" ></iframe>
                    <a href="https://github.com/AnnyloryLR/cineflex">
                        Cineflex: web app for booking movie tickets - React & Vite
                        <StyledIcon/>
                    </a> 
                    
                </TallItem>
            </WorkGrid>
            <HireMeButton/>
            <ArrowDownDouble path="/contact"/>
            <ArrowMobileLeft path="/resume"/>
            <ArrowMobileRight path="/contact"/>

        </MyWorkContainer>
     )
}

export default MyWork;

const MyWorkContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    ::-webkit-scrollbar{
        display:none;
    }
    @media screen and (max-width:1024px){
        min-height: 85vh;
    }

`


const Title = styled.h1`
    margin:10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    font-size: clamp(1rem, 5vw, 4rem);
    color: #006ff7;
    @media screen and (max-width: 900px){
        font-size:2rem;
    }
    
`

const WorkGrid = styled.div`
    width: 70%;
    height: 65vh;
    border-top:3px groove #006ff7;
    border-radius:10px;
    padding:2%;
    background-color: #000000;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 300px;
    gap:2%; 
    overflow-y:scroll;
    @media screen and (max-width:1000px){
        display:flex;
        flex-direction:column;
        height: 65vh;
        overflow-y: auto;
        justify-content: flex-start;
    }

`
const ShortItem = styled.div`
    width:80%;
    height:100%;
    border-radius:10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #062783;
    img{
        margin-top: 2%;
        width: 60%;
        height: 60%;
        border-radius:5%;
    }
    a{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size:0.8rem;
        text-decoration:none;
        color:#006ff7;
        text-align: center;
    }
 
`
const TallItem = styled.div`
    margin:2%;
    border-radius:10px;
    grid-row: span 2; 
    display:flex;
    flex-direction: column;
    justify-items:center;
    align-items: center;
    width:70%;
    height:100%;
    background-color: #062783;
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
const WideItem = styled.div`
    margin:2%;
    border-radius:10px;
    display:grid;
    grid-column: span 2; 
    align-items:center;
    justify-content:center;
    height:100%;
    width:80%;
    background-color: #062783;
    iframe{
        margin:5%;
        height:70%;
        width: 90%;
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
