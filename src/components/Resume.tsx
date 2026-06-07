import styled, { keyframes } from "styled-components";
import { RiArrowDownDoubleLine} from 'react-icons/ri'
import { BiDownload } from "react-icons/bi";
import { Link } from "react-router-dom";
import resume from "../assets/rosa_annylory-lima_eng.pdf"

const Resume = () => {
    
        return (
        <ResumeContainer>
            <PageTitle> Resume </PageTitle>
        
            <GeneralContainer>
                <Container>
                    <h2> Education</h2>
                    <ResumeCard>
                        <Duration> 2025 - 2029 </Duration>
                        <h6> Bachelor of Software Engineering  </h6>
                        <p> University Estácio de Sá</p>
                    </ResumeCard>
                    <ResumeCard>
                        <Duration> 2013 - 2018 </Duration>
                        <h6> PhD in Science </h6>
                        <p> University of São Paulo </p>
                    </ResumeCard>
                    <ResumeCard>
                        <Duration> 2007 - 2012 </Duration>
                        <h6> Bachelor of Pharmacy </h6>
                        <p> Federal University of Goiás</p>
                    </ResumeCard>
                </Container>
                <Container>
                    <h2>Experience</h2>        
                    <ResumeCard>
                        <Duration> 2026 - present </Duration>
                        <h6> Volunteer in Mobile App Development </h6>
                        <p> Minuto-Offline: React-Native </p>
                    </ResumeCard>
                    <ResumeCard>
                        <Duration> 2024 - 2025 </Duration>
                        <h6> Full Stack Developer </h6>
                        <p> Driven Projects </p>
                    </ResumeCard>
                    <ResumeCard>
                        <Duration> 2023 - 2024 </Duration>
                        <h6> Researcher </h6>
                        <p> Labpharma: Consulting in Analytics and Regulatory </p>
                    </ResumeCard>
                </Container>
            </GeneralContainer>
            <ButtonsContainer>
                <DownloadButton>
                    <a href={resume} download>
                    <BiDownload size={20} />
                        Download CV
                    </a>
                </DownloadButton>
            
                <HireMeButton>
                    <Link to='/contact'>Hire Me</Link>
                </HireMeButton>
            </ButtonsContainer>
            <LinkStyled to={"/portfolio"}><ScrollArrow/></LinkStyled>
        </ResumeContainer>
     )
}

export default Resume;

const ResumeContainer = styled.div`
    height: 100vh;
    width: 100%;
    display:flex;
    flex-direction:column;
    justify-items:center;
    align-items: center;
    
`
const PageTitle = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    font-size: clamp(1rem, 5vw, 4rem);
`
const GeneralContainer = styled.div`
    width:70%;
    //border:1px solid violet;
    display: flex;
    flex-direction: row;
    align-items: center;
`
const Container = styled.div`
    padding:2%;
    width:50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:20px;
    h2{
        font-size: 2rem;
        text-align: center;
    }   
`
const ResumeCard = styled.div`
    width:400px;
    height:150px;
    padding:1%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    border-radius:10px;
    background-color:#555555;
    h6{ 
        margin:20px 20px 20px 0;
        font-size: 1.25rem;
        text-align: left;
        line-height: 1;
        color:#ffffff;
    }
    p{
        font-size: 0.8rem;  
        text-align: justify;
        color:#007bff;
        margin:0px;
    }

`
const Duration = styled.div`
    position:relative;
    top: 5px; 
    left: 5px;
    width: 90px;
    height: 30px;
    border-radius: 5px;
    background-color:#007bff;
    font-size: 0.7rem;  
    text-align: center;
    overflow-wrap: break-word;
    color:#ffffff;
`

const ButtonsContainer = styled.div`
    width:80%;
    height:4%;
    display: flex;
    flex-direction: row;
    justify-content: center;    
    align-items: center;
    gap: 20px;
`
const DownloadButton = styled.button`
    width:10%;
    height: 100%;
    background-color:#111418;
    border: 2px solid aliceblue;
    border-radius: 20px;
    cursor: pointer;
    a{
        color:aliceblue;
        font-size: 0.8rem;
        text-decoration:none;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:5px;
  
    }
    &:hover {
        a{
            color:#006ff7;
        }
        
        border: 2px solid #006ff7;
        transition: color 0.3s ease;
    }
`
const HireMeButton = styled.button`
    width:10%;
    height: 100%;
    background-color:#111418;
    border: 2px solid aliceblue;
    border-radius: 20px;
    cursor: pointer;
    a{
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
const LinkStyled = styled(Link)`
  position:absolute;
  top: 90vh;
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

