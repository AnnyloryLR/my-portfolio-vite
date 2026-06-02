import { BiDownload } from "react-icons/bi";
import styled from "styled-components";

const Resume = () => {
    
        return (
        <ResumeContainer>
            <PageTitle> Resume </PageTitle>
        
            <GeneralContainer>
                <Container1>
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
                </Container1>
                <Container2>
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
                </Container2>
            </GeneralContainer>
            <ButtonsContainer>
                <DownloadButton>
                    <a href='assets/rosa_annylory-lima_eng.pdf' download>
                    <BiDownload size={20} />
                        Download CV
                    </a>
                </DownloadButton>
            
                <HireMeButton>
                    <a href='#contact'>Hire Me</a></HireMeButton>
            </ButtonsContainer>
        </ResumeContainer>
     )
}

export default Resume;

const ResumeContainer = styled.div`
    height: 100vh;
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    
`
const PageTitle = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    font-size: clamp(1rem, 5vw, 4rem);
`
const GeneralContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;
`
const Container1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:20px;
    h2{
        margin:0;
        font-size: 2rem;
        text-align: center;
    }   
`
const Container2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:20px;
    h2{
        margin:0;
        font-size: 2rem;
        text-align: center;
    }   
`
const ResumeCard = styled.div`
    margin: 10px;
    padding: 10px;
    width:500px;
    display:flex;
    flex-direction:column;
    border-radius:10px;
    background-color:#555555;
    h6{
        margin:10px;
        padding: 10px;
        font-size: 1.25rem;
        text-align: center;
        color:#ffffff;
    }
    p{
        font-size: 0.8rem;  
        text-align: justify;
        overflow-wrap: break-word;
        color:#007bff;

    }

`
const Duration = styled.div`
    position:relative;
    top: 10px; 
    left: 10px;
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
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;    
    align-items: center;
    gap: 20px;
`
const DownloadButton = styled.button`
    width:150px;
    height: 40px;
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
    width:150px;
    height: 40px;
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