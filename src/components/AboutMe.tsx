import styled from "styled-components";

const AboutMe = () => {
    
        return (
        <AboutMeStyle>
            <Title> About Me </Title>
            <Paragraph> Greetings! I am a Full-Stack Developer with a PhD in Pharmacy, which is rather unconventional, 
                don't you think? I started learning programming during my PhD. I still like chemistry very much,
                but I love coding more! I work with programming languages and frameworks for Web Development such
                as JavaScript, React, Node.js, Java and Spring Boot. I've implemented more than 20 systems, so far... 
                Checkout the <a href='#portfolio'>Portfolio</a> section to see my work!</Paragraph>
        </AboutMeStyle>
     )
}

export default AboutMe;

const AboutMeStyle = styled.div`
    height: 100vh;
    width: 87%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:#212529;
    color: aliceblue;
    text-align: center;
    padding: 0 20px;
   
`
const Title = styled.h1`
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    margin-bottom: 20px;
    
`
const Paragraph = styled.p`
    font-size: clamp(1rem, 5vw, 1.5rem);
    line-height: 1.6;
    text-align: justify;
    max-width: 800px;
    margin: 0 auto;
    color: #555;
    a {
        color: #007bff;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`