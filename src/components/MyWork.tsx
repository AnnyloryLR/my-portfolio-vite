import styled, { keyframes } from "styled-components";
import { RiArrowDownDoubleLine} from 'react-icons/ri'
import { FaGithub} from "react-icons/fa";
import { Link } from "react-router-dom";
import trackItvideo from "../assets/trackIt.mp4";
import parrotsVideo from "../assets/parrotsGame.mp4";
import cineflexVideo from "../assets/cineflex.mp4";

const MyWork = () => {
    
        return (
        <MyWorkContainer>
            <Title>My Work</Title>           
            <WorkGrid>
                <ShortItem>               
                    <img src="https://www.tovima.com/wp-content/uploads/2024/01/22/board-games-scaled.jpg"/>
                    <a href="https://github.com/AnnyloryLR/boardcamp_oo">
                        <FaGithub color={'#006ff7'} size={30}/>
                    </a> 
                </ShortItem>
                    
                <TallItem>
                    <video src={trackItvideo} controls></video>
                    <a href="https://github.com/AnnyloryLR/TrackIt">
                        <FaGithub color={'#006ff7'} size={30}/>
                    </a>           
                </TallItem>
                            
                <ShortItem>
                    <img src="https://www.tekcommerce.com.br/assets/img/recarga-celular.png"/>
                    <a href="https://github.com/AnnyloryLR/driven_recharge">
                        <FaGithub color={'#006ff7'} size={30}/>
                    </a>    
                </ShortItem>

                <WideItem>
                    <video src={parrotsVideo} controls></video>
                    <a href="https://github.com/AnnyloryLR/ParrotGame.github.io">
                        <FaGithub color={'#006ff7'} size={30}/>
                    </a> 
                    
                </WideItem>

                <TallItem>
                    <video src={cineflexVideo} controls></video>
                    <a href="https://github.com/AnnyloryLR/cineflex">
                        <FaGithub color={'#006ff7'} size={30}/>
                    </a> 
                    
                </TallItem>
            </WorkGrid>
            
            <HireMeButton to='/contact'>Hire Me</HireMeButton>
            <LinkStyled to={"/contact"}><ScrollArrow/></LinkStyled>
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
`


const Title = styled.h1`
    margin:10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    font-size: clamp(1rem, 5vw, 4rem);
    
`

const WorkGrid = styled.div`
    height: 70vh;
    width: 70%;
    border-top:1px groove #006ff7;
    border-radius:10px;
    padding:2%;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 250px; // Base height increment unit
    gap:2%; 
    overflow-y:auto; 
    overflow-x:auto;
    @media (max-width:1300px){
        display:unset;

    }
`
const ShortItem = styled.div`
    margin:2%;
    border-radius:10px;
    display:flex;
    flex-direction: column;
    justify-items:center;
    align-items:center;
    width:300px;
    height:250px;
    background: #964141;
    img{
        margin-top:10px;
        height:180px;
        border-radius:30px;
    }
    a{
        padding:10px;
        text-decoration:none;
        color: #006ff7;
        justify-content:center;
    }
 
`
const TallItem = styled.div`
    margin:2%;
    border-radius:10px;
    grid-row: span 2; // Spans 2 row segments (200px + gap)
    display:flex;
    flex-direction: column;
    justify-items:center;
    width:300px;
    height:500px;
    background: #565b97;
    video{
        margin-top:10px;
        height:350px;
    }
    a{
        padding:10px;
        text-decoration:none;
        color: #006ff7;
        justify-content:center;
    }

    
`
const WideItem = styled.div`
    margin:2%;
    border-radius:10px;
    display:grid;
    grid-column: span 2; // Spans 2 columns horizontally
    align-items:center;
    justify-content:space-evenly;
    height:250px;
    width:500px;
    background: #579799;
    video{
        height:200px;
        width:400px;
    }
    a{
        padding:10px;
        text-decoration:none;
        color: #006ff7;
        justify-content:center;
    }

`
const HireMeButton = styled(Link)`
    position:absolute;
    top: 90vh;
    width:100px;
    height:30px;
    display:flex;
    justify-content: center;
    align-items:center;
    background-color:rgba(0, 0, 0, 0.3);
    border: 2px solid #006ff7;
    border-radius: 20px;
    text-decoration:none;
    color:#006ff7;
    font-size:1rem;       
`
const LinkStyled = styled(Link)`
  position:absolute;
  top: 95vh;
  width:8%;
  height: 4%;
  display:flex;
  align-items:center;
  justify-content:center;

`
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-10px);}
  60% {transform: translateY(-5px);}
`

const ScrollArrow = styled(RiArrowDownDoubleLine)`
  font-size:37px;
  transform: translateX(-50%);
  animation: ${bounce} 2s infinite;
  color:#ffffff;
`