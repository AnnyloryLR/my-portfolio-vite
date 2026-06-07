import React from 'react';
import styled, { keyframes } from "styled-components";
import { RiArrowDownDoubleLine} from 'react-icons/ri'
import { Link } from 'react-router-dom';
import { DiCss3, DiExtjs, DiHtml5, DiJava, DiJavascript1, DiNodejs, DiPython, DiReact, DiMongodb, DiPostgresql } from "react-icons/di";
import { FaGitAlt, FaGithub, FaDocker, FaDatabase } from "react-icons/fa";
import { BiSolidFileJson } from "react-icons/bi";
import { AiFillApi } from "react-icons/ai";
import Skill from "./Skill";
import { PiInfinity } from 'react-icons/pi';
import { SiPrisma, SiNginx } from "react-icons/si";
import { TbBrandAuth0 } from 'react-icons/tb';

type SkillIcon = React.ReactElement<{className?: string}>;

type SkillCategory = {
    [skill: string]: SkillIcon;
}

type CategoriesType = {
    [category: string]: SkillCategory;
}

const WhatIDo = () => {
    const categories: CategoriesType = {"Frontend":{"HTML":<DiHtml5 className='react-icon'/>, "CSS": <DiCss3 className='react-icon'/>, "JavaScript": <DiJavascript1 className='react-icon'/>, "React": <DiReact className='react-icon'/>},
        "Backend": {"ExpressJS": <DiExtjs className='react-icon'/>, "NodeJS": <DiNodejs className='react-icon'/>, "Python": <DiPython className='react-icon'/>, "Java": <DiJava className='react-icon'/>},
        "Databases Management": {"Data Modeling":<FaDatabase className='react-icon'/>, "MongoDB": <DiMongodb className='react-icon'/>, "PostgreSQL": <DiPostgresql className='react-icon'/>, "PrismaORM":<SiPrisma className='react-icon'/>},
        "APIs & Communication": {"REST API": <AiFillApi className='react-icon'/>, "JSON": <BiSolidFileJson className='react-icon'/>, "Authentication": <TbBrandAuth0 className='react-icon'/>, "Nginx": <SiNginx className='react-icon'/>},
        "DevOps & Deployment": {"Git": <FaGitAlt className='react-icon'/>, "GitHub": <FaGithub className='react-icon'/>, "Docker": <FaDocker className='react-icon'/>, "CI/CD": <PiInfinity className='react-icon'/>}
    }

    
    return (
        <WhatIDoContainer id="what-i-do">
            <Title> What I Do</Title>
            <BigContainer>
                {Object.entries(categories).map(([category, icons]) => (
                    <Container key={category}>
                        <strong>{category}</strong>
                        {Object.entries(icons).map(([skill, icon]) => (
                            <Skill key={skill} name={skill} iconName={icon}/>
                                
                        ))}
                    </Container>
                ))}    
               
            </BigContainer>
            
            <HireMeButton to='/contact'>Hire Me</HireMeButton>
            <LinkStyled to={"/resume"}><ScrollArrow/></LinkStyled>
        </WhatIDoContainer>
    )
}

export default WhatIDo;

const WhatIDoContainer = styled.div`
    max-height: 100vh;
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Title = styled.h1`
    margin-top:5%;
    font-size: clamp(1rem, 5vw, 4rem)
    
`
const BigContainer = styled.div`
    width: 100%;
    max-height:70vh;
    display:flex;
    justify-content:center;
    @media (max-width:900px){
        flex-direction:column;
        overflow-y:auto;
    }

`
const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:3%;
   
    strong{
        width:200px;
        height:70px;
        color:  #b1afaf;
        font-size: clamp(1rem, 5vw, 1.5rem);
        padding:10px;   
    }
`
const HireMeButton = styled(Link)`
    position:absolute;
    top: 90vh;
    width:100px;
    height:30px;
    display:flex;
    justify-content: center;
    align-items:center;
    background-color:rgba(0, 0, 0, 0.3);
    border: 2px solid #006ff7;
    border-radius: 20px;
    text-decoration:none;
    color:#006ff7;
    font-size:1rem;       
`
const LinkStyled = styled(Link)`
  position:absolute;
  top: 95vh;
  width:8%;
  height: 4%;
  display:flex;
  align-items:center;
  justify-content:center;

`
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-10px);}
  60% {transform: translateY(-5px);}
`

const ScrollArrow = styled(RiArrowDownDoubleLine)`
  font-size:37px;
  transform: translateX(-50%);
  animation: ${bounce} 2s infinite;
  color:#ffffff;
`