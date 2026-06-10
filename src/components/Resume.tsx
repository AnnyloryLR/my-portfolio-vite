import styled from "styled-components";
import { BiDownload } from "react-icons/bi";
import { Link } from "react-router-dom";
import resume from "../assets/rosa_annylory-lima_eng.pdf"
import ArrowDownDouble from "./ArrowDownDouble";

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
            <ArrowDownDouble path="/portfolio" />
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
    padding: 20px 20px 0 20px;
    font-size: clamp(1rem, 5vw, 4rem);
    color:#007BFF;
    @media (max-width:1350px){
        font-size: 2rem;
    }
`
const GeneralContainer = styled.div`
    width:70%;
    height:75vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width:1350px){
        max-height: 80vh;
        flex-direction: column;
        overflow-y: auto;
    }
`
const Container = styled.div`
    width:50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:20px;
    h2{
        font-size: 2rem;
        text-align: center;
        @media (max-width:900px) {
        font-size: 1rem;
        }
    }   
    @media (max-width:1050px) {
        width: 100%;
        font-size: 1rem;
    }
`
const ResumeCard = styled.div`
    width:90%;
    height:150px;
    padding:1%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    border-radius:10px;
    background-color:rgba(0,0,0,0.8);
    h6{ 
        margin:20px 20px 20px 0;
        font-size: 1.25rem;
        text-align: left;
        color:#007BFF;
        line-height: 1;
        @media (max-width:900px) {
            font-size: 0.8rem;
        }
    }
    p{
        font-size: 0.8rem;  
        text-align: justify;
        color:#0b5099;
        margin:0px;
        @media (max-width:900px) {
            font-size: 0.5rem;
        }
    }

`
const Duration = styled.div`
    position:relative;
    top: 5px; 
    left: 5px;
    width: 90px;
    height: 30px;
    border-radius: 5px;
    background-color:#055bb8;
    font-size: 0.7rem;  
    text-align: center;
    overflow-wrap: break-word;
    color:#ffffff;
`

const ButtonsContainer = styled.div`
    margin: 3%;
    width:100%;
    height:4%;
    display: flex;
    flex-direction: row;
    justify-content: center;    
    align-items: center;
    gap: 20px;
`
const DownloadButton = styled.button`
    width:130px;
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
    width:130px;
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


