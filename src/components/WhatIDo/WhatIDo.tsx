import React from 'react';
import styled from "styled-components";
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
            <GridContainer>
                {Object.entries(categories).map(([category, icons]) => (
                    <Container key={category}>
                        <strong>{category}</strong>
                        {Object.entries(icons).map(([skill, icon]) => (
                            <Skill key={skill} name={skill} iconName={icon}/>
                                
                        ))}
                    </Container>
                ))}    
               
            </GridContainer>
            
            <HireMeButton><a href='#contact'>Hire Me</a></HireMeButton>
        </WhatIDoContainer>
    )
}

export default WhatIDo;

const WhatIDoContainer = styled.div`
    height: 100vh;
    width: 85%;
`

const Title = styled.h1`
    margin-bottom: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    font-size: clamp(1rem, 5vw, 4rem);
    
`
const GridContainer = styled.div`
    height:60%;
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;  
    margin-bottom: 50px;

`
const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
   
    strong{
        min-width:100%;
        max-height:5%;
        margin-bottom:20px;
        color:  #b1afaf;
        font-size: clamp(1rem, 5vw, 1.5rem);
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