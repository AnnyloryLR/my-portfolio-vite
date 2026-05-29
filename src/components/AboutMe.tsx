import styled from "styled-components";

const AboutMe = () => {
    
        return (
        <PageStyle>
            <Title> About Me</Title>
            <Paragraph> Greetings! I am a Full-Stack Developer with a PhD in Pharmacy, which is rather unconventional, 
                don't you think? I started learning programming during my PhD. I still like chemistry very much,
                but I love coding more! I work with programming languages and frameworks for Web Development such
                as JavaScript, React, Node.js, Java and Spring Boot. I've implemented more than 20 systems, so far... 
                Checkout <a href='#portfolio'>My Work</a> section to see my projects!</Paragraph>
            <HireMeButton><a href='#contact'>Hire Me</a></HireMeButton>
        </PageStyle>
     )
}

export default AboutMe;

const PageStyle = styled.div`
    border-top: 1px outset black;
    height: 100vh;
    width: 87vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:#212529;
    color: #555;
    text-align: center;
    padding: 0 20px;
   
`
const Title = styled.h1`
    margin-bottom: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    font-size: clamp(1rem, 5vw, 4rem);
    
`
const Paragraph = styled.p`
    font-size: clamp(1rem, 5vw, 1.5rem);
    line-height: 2;
    text-align: justify;
    max-width: 800px;
    margin: 0 auto;
    color: #555;
    a {
        color: #007bff;
        text-decoration: none;
    }
`
const HireMeButton = styled.button`
    margin-top: 70px;
    width:150px;
    height: 40px;
    background-color: #555;
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
        
        background-color:#111418;
        border: 2px solid #16171D;
        transition: color 0.3s ease;
    }
`