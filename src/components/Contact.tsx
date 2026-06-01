import styled from "styled-components";

const Contact = () => {
    
        return (
        <>
            <Title>Contact Me</Title>
            <Paragraph> </Paragraph>
        </>
     )
}

export default Contact;

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
        color:#555;
        text-decoration: none;
        &:hover {
            color: #007bff;
        }
    }
`
