import styled, { keyframes } from "styled-components";
import { RiArrowDownDoubleLine} from 'react-icons/ri'
import { FaCode, FaGithub} from "react-icons/fa";
import { Link } from "react-router-dom";

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
                    <video src={"assets/demo/trackIt.mp4"} controls></video>
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
                    <video src={"assets/demo/parrotsGame.mp4"} controls></video>
                    <a href="https://github.com/AnnyloryLR/ParrotGame.github.io">
                        <FaGithub color={'#006ff7'} size={80}/>
                    </a> 
                    
                </WideItem>

                <TallItem>
                    <video src={"./assets/demo/cineflex.mp4"} controls></video>
                    <a href="https://github.com/AnnyloryLR/cineflex">
                        <FaGithub color={'#006ff7'} size={30}/>
                    </a> 
                    
                </TallItem>
            </WorkGrid>
            
            <HireMeButton>
                <Link to='/contact'>Hire Me</Link>
            </HireMeButton>
            <Link to={"/contact"}><ScrollArrow/></Link>
        </MyWorkContainer>
     )
}

export default MyWork;

const MyWorkContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    border-top:1px groove #006ff7;
    border-radius:10px;
    width: 80%;
    min-height:70%;
    height:fit-content;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 100px; // Base height increment unit
    gap:45px;  
`
const ShortItem = styled.div`
    margin:20px;
    border-radius:10px;
    display:flex;
    flex-direction: column;
    justify-items:center;
    align-items:center;
    width:300px;
    height:250px;
    background: #555555;
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
    margin:20px;
    border-radius:10px;
    grid-row: span 2; // Spans 2 row segments (200px + gap)
    display:flex;
    flex-direction: column;
    justify-items:center;
    width:250px;
    height:400px;
    background: #555555;
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
    margin-top:150px;
    border-radius:10px;
    grid-column: span 2; // Spans 2 columns horizontally
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    height:250px;
    background: #555555;
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
const HireMeButton = styled.button`
    margin-top: 20px;
    width:150px;
    height: 40px;
    background-color:#111418;
    border: 2px solid aliceblue;
    border-radius: 20px;
    cursor: pointer;
    a{
        display:flex;
        align-items:center;
        justify-content:center;
        color:aliceblue;
        font-size: 0.8rem;
        text-decoration:none;
  
    }
    &:hover {
        a{
            color:#006ff7;
        }
        
        border: 2px solid #006ff7;
        transition: color 0.3s ease;
    }
`
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-10px);}
  60% {transform: translateY(-5px);}
`;

const ScrollArrow = styled(RiArrowDownDoubleLine)`
  font-size:37px;
  position:absolute;
  top: 95vh;
  left: 49%;
  transform: translateX(-50%);
  cursor: pointer;
  animation: ${bounce} 2s infinite;
  color:#ffffff;
  &:hover {
    border-top-color: #007bff; 
  }
`;