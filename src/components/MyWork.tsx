import styled from "styled-components";

const MyWork = () => {
    
        return (
        <>
            <Title>My Work</Title>
            <Paragraph> </Paragraph>
            <HireMeButton><a href='#contact'>Hire Me</a></HireMeButton>
        </>
     )
}

export default MyWork;


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