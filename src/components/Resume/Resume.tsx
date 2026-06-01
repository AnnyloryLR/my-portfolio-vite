import styled from "styled-components";

const Resume = () => {
    
        return (
        <ResumeContainer>
            <PageTitle> Resume </PageTitle>
            <Subtitle>
                <h2> Education</h2>
                <h2>Experience</h2>
            </Subtitle>
            <Container1>
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
                    <h6> Bachelor of Science in Pharmacy </h6>
                    <p> Federal University of Goiás</p>
                </ResumeCard>
            </Container1>
            <Container2>        
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
            
            <HireMeButton><a href='#contact'>Hire Me</a></HireMeButton>
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
const Subtitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
        font-size: 1.5rem;
        text-align: center;
    }   
`
const Container1 = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap:20px;
    padding: 20px;
`
const Container2 = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap:20px;
    padding: 20px;
`
const ResumeCard = styled.div`
    margin: 10px;
    padding: 10px;
    width:500px;;
    display:flex;
    flex-direction:column;
    border-radius:10px;
    background-color:#555555;
    h6{
        margin:0;
        padding: 10px;
        font-size: 1rem;
        text-align: center;
        color:#ffffff;
    }
    p{
        font-size: 0.8rem;  
        text-align: justify;
        overflow-wrap: break-word;
        color:#b1afaf;

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
const HireMeButton = styled.button`
    margin-top: 70px;
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