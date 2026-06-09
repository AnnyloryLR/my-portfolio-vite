import styled from "styled-components";
import { FaGithub} from "react-icons/fa";
import HireMeButton from "./HireMeButton";
import ArrowDownDouble from "./ArrowDownDouble";

const MyWork = () => {
    
        return (
        <MyWorkContainer>
            <Title>My Work</Title>           
            <WorkGrid>
                <ShortItem>               
                    <img src="https://www.tovima.com/wp-content/uploads/2024/01/22/board-games-scaled.jpg"/>
                    <a href="https://github.com/AnnyloryLR/boardcamp_oo">
                        <FaGithub color={'#006ff7'} size={30}/>
                        code
                    </a> 
                </ShortItem>
                    
                <TallItem>
                    <iframe src="https://www.youtube.com/embed/GK0-ca5RLpk" ></iframe>
                    <a href="https://github.com/AnnyloryLR/TrackIt">
                        <FaGithub color={'#006ff7'} size={30}/>
                        code
                    </a>           
                </TallItem>
                            
                <ShortItem>
                    <img src="https://www.tekcommerce.com.br/assets/img/recarga-celular.png"/>
                    <a href="https://github.com/AnnyloryLR/driven_recharge">
                        <FaGithub color={'#006ff7'} size={30}/>
                        code
                    </a>    
                </ShortItem>

                <WideItem>
                    <iframe src="https://youtube.com/embed/-MOkgSfN_5U" ></iframe>
                    <a href="https://github.com/AnnyloryLR/ParrotGame.github.io">
                        <FaGithub color={'#006ff7'} size={30}/>
                        code
                    </a> 
                    
                </WideItem>

                <TallItem>
                    <iframe src="https://www.youtube.com/embed/5Nusg8muZMA" ></iframe>
                    <a href="https://github.com/AnnyloryLR/cineflex">
                        <FaGithub color={'#006ff7'} size={30}/>
                        code
                    </a> 
                    
                </TallItem>
            </WorkGrid>
            <HireMeButton/>
            <ArrowDownDouble path="/contact"/>

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
    height: 80vh;
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
    @media (max-width:900px){
        display:flex;
        flex-direction:column;

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
    iframe{
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
    iframe{
        margin-top:10px;
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
