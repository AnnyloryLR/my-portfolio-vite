import styled from "styled-components";



const WhatIDo = () => {
    
        return (
        <PageStyle>
            <Title> What I Do</Title>
            <GridContainer>   
                <Paragraph>
                     <strong>Back end</strong>


          
                </Paragraph>
                <Paragraph> 
                    <strong>Front end</strong> </Paragraph>
                <Paragraph> 
                    <strong>Web Development</strong>
                </Paragraph>
                <Paragraph> 
                    <strong>Databases</strong>
                </Paragraph>
                <Paragraph> 
                    <strong>Software structures</strong>
                </Paragraph>
            </GridContainer>
            
            <HireMeButton><a href='#contact'>Hire Me</a></HireMeButton>
        </PageStyle>
     )
}

export default WhatIDo;

const PageStyle = styled.div`
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
const GridContainer = styled.div`
    border: 2px solid purple;
    width:75%;
    height:50%;
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:20px;
`

const Paragraph = styled.p`
    width:300px;
    border: 2px solid yellow;
    font-size: clamp(1rem, 5vw, 1.5rem);
    line-height: 2;
    text-align: center;
    margin: 0 auto;
    color: #b1afaf;
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
    background-color: #555;
    border: 2px solid aliceblue;
    border-radius: 20px;
    cursor: pointer;
    a{
        color:aliceblue;
        font-size: 0.8rem;
        text-decoration:none;
        &:hover{
            color:#006ff7;
        }
    }
    &:hover {
        background-color:#111418;
        border: 2px solid #16171D;
        transition: color 0.3s ease;
    }
`