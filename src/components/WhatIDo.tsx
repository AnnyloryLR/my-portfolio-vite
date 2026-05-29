import { DiCss3, DiExtjs, DiHtml5, DiJava, DiJavascript1, DiJsBadge, DiNodejs, DiPython, DiReact } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import { SiStyledcomponents } from "react-icons/si";
import styled from "styled-components";
import { useState } from "react";



const WhatIDo = () => {
        const [isHovered, setIsHovered] = useState(false)
        function onHover(){
            setIsHovered(true);
        };
        function onHoverOver(){
            setIsHovered(false);
        };
    
        return (
        <PageStyle>
            <Title> What I Do</Title>
            <GridContainer>   
                <Container>
                    <strong>Front end</strong>
                        <Box>
                           { isHovered? "HTML5":""}<DiHtml5 className="react-icon" onMouseEnter={() => onHover()}
                             onMouseLeave={() => onHoverOver()}/>
                        </Box>
                        <Box>
                           { isHovered? "CSS3":""}<DiCss3 className="react-icon" onMouseEnter={() => onHover()}
                             onMouseLeave={() => onHoverOver()}/>
                        </Box>
                        <Box>
                            JavaScript
                            <DiJsBadge className="react-icon"/>

                        </Box>
                        <Box>
                            React
                            <DiReact className="react-icon"/>

                        </Box> 
                </Container>
                <Container>
                    <strong>Back end</strong>
                        <Box>
                            <p>ExpressJS</p>
                            <DiExtjs className="react-icon"/>

                        </Box>
                        <Box>
                            <p>NodeJS</p>
                            <DiNodejs className="react-icon"/>

                        </Box>
                        <Box>
                            <p>Python</p>
                            <DiPython className="react-icon"/>

                        </Box>
                        <Box>
                            <p>Java</p>
                            <DiExtjs className="react-icon"/>

                        </Box> 
                </Container>
                <Container>
                    <strong>Database & Storage</strong>
                        <Box>
                            <p>ExpressJS</p>
                            <DiExtjs className="react-icon"/>

                        </Box>
                        <Box>
                            <p>NodeJS</p>
                            <DiNodejs className="react-icon"/>

                        </Box>
                        <Box>
                            <p>Python</p>
                            <DiPython className="react-icon"/>

                        </Box>
                        <Box>
                            <p>Java</p>
                            <DiExtjs className="react-icon"/>

                        </Box> 
                </Container>
                <Container>
                    <strong>APIs & Integration</strong>
                        <Box>
                            <p>ExpressJS</p>
                            <DiExtjs className="react-icon"/>

                        </Box>
                        <Box>
                            <p>NodeJS</p>
                            <DiNodejs className="react-icon"/>

                        </Box>
                        <Box>
                            <p>Python</p>
                            <DiPython className="react-icon"/>

                        </Box>
                        <Box>
                            <p>Java</p>
                            <DiExtjs className="react-icon"/>

                        </Box> 
                </Container>
                      <Container>
                    <strong>DevOps, Version Control & Hosting</strong>
                        <Box>
                            <p>ExpressJS</p>
                            <DiExtjs className="react-icon"/>

                        </Box>
                        <Box>
                            <p>NodeJS</p>
                            <DiNodejs className="react-icon"/>

                        </Box>
                        <Box>
                            <p>Python</p>
                            <DiPython className="react-icon"/>

                        </Box>
                        <Box>
                            <p>Java</p>
                            <DiExtjs className="react-icon"/>

                        </Box> 
                </Container>

            </GridContainer>
            
            <HireMeButton><a href='#contact'>Hire Me</a></HireMeButton>
        </PageStyle>
     )
}

export default WhatIDo;

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
const GridContainer = styled.div`
    border:1px solid blue;
    width:85%;
    height:60%;
    display:flex;
`

const Container = styled.div`
    border:1px solid blue;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    strong{
        min-width:100%;
        max-height:5%;
        margin-bottom:20px;
        color:  #b1afaf;
        font-size: clamp(1rem, 5vw, 1.5rem);
        padding:10px;   
    }
`
const Box = styled.div`
    border: 1px solid purple;
    display:flex;
    flex-direction:column;
    p{
        color:#b1afaf;

    }
    .react-icon{
        font-size:80px;
        line-height: 2;
        text-align: center;
        color:#007bff;
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