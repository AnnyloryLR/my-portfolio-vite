import { DiExtjs, DiJava, DiJavascript1, DiNodejs, DiPython, DiReact } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import { SiStyledcomponents } from "react-icons/si";
import styled from "styled-components";



const WhatIDo = () => {
    
        return (
        <PageStyle>
            <Title> What I Do</Title>
            <GridContainer>   
                <Container>
                    <strong>Back end</strong>
                    <div>
                        <DiExtjs className="react-icon"/>
                        <DiNodejs className="react-icon"/>
                        <DiPython className="react-icon"/>
                        <DiJava className="react-icon"/>

                    </div>   
                 </Container>
                 <Container>
                    <strong>Front end</strong>
                    <div>
                        <DiJavascript1 className="react-icon"/>
                        <DiReact className="react-icon"/>
                        <FiFigma className="react-icon"/>
                        <SiStyledcomponents className="react-icon"/>

                    </div>   
                 </Container>
                 <Container>
                    <strong>Back end</strong>
                    <div>
                        <DiExtjs className="react-icon"/>
                        <DiNodejs className="react-icon"/>
                        <DiPython className="react-icon"/>
                        <DiJava className="react-icon"/>

                    </div>   
                 </Container>
                 <Container>
                    <strong>Back end</strong>
                    <div>
                        <DiExtjs className="react-icon"/>
                        <DiNodejs className="react-icon"/>
                        <DiPython className="react-icon"/>
                        <DiJava className="react-icon"/>

                    </div>   
                 </Container>
                 <Container>
                    <strong>Back end</strong>
                    <div>
                        <DiExtjs className="react-icon"/>
                        <DiNodejs className="react-icon"/>
                        <DiPython className="react-icon"/>
                        <DiJava className="react-icon"/>

                    </div>   
                 </Container>
                 <Container>
                    <strong>Back end</strong>
                    <div>
                        <DiExtjs className="react-icon"/>
                        <DiNodejs className="react-icon"/>
                        <DiPython className="react-icon"/>
                        <DiJava className="react-icon"/>

                    </div>   
                 </Container>

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
    width:75%;
    height:50%;
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:20px;
`

const Container = styled.div`
    display:flex;
    flex-direction:column;
    .react-icon{
        font-size:80px;
        line-height: 2;
        text-align: center;
        margin: 10px;
        color:#007bff;
    }

    strong{
        margin-bottom:20px;
        color:  #b1afaf;
        font-size: clamp(1rem, 5vw, 2rem);
        padding:10px;   
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