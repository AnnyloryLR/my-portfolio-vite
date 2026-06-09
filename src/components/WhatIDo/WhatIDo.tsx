import React from 'react';
import styled from "styled-components";
import { DiCss3, DiExtjs, DiHtml5, DiJava, DiJavascript1, DiNodejs, DiPython, DiReact, DiMongodb, DiPostgresql } from "react-icons/di";
import { FaGitAlt, FaGithub, FaDocker, FaDatabase } from "react-icons/fa";
import { BiSolidFileJson } from "react-icons/bi";
import { AiFillApi } from "react-icons/ai";
import Skill from "./Skill";
import HireMeButton from '../HireMeButton';
import { PiInfinity } from 'react-icons/pi';
import { SiPrisma, SiNginx } from "react-icons/si";
import { TbBrandAuth0 } from 'react-icons/tb';
import ArrowDownDouble from '../ArrowDownDouble';

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
            <HireMeButton/>
            <ArrowDownDouble path="/resume" />
        </WhatIDoContainer>
    )
}

export default WhatIDo;

const WhatIDoContainer = styled.div`
    height: 100%;
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    @media (max-width:900px) {
        overflow-y:auto;
    }

`

const Title = styled.h1`
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: clamp(1rem, 5vw, 4rem);
    @media (max-width:900px) {
        font-size: 2rem;
        position:fixed;
        top:0;
        left:0;
    }
    
`
const BigContainer = styled.div`
    width: 80%;
    max-height:70vh;
    display: flex;
    justify-content: center;
    overflow-x: auto;
    @media (max-width:900px) {
        display: unset;
    }


`
const Container = styled.div`
    min-width:200px;
    min-height:600px;
    margin:1%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    strong{
        width:200px;
        height:70px;
        color:  #b1afaf;
        font-size: clamp(1rem, 5vw, 1.5rem);
        padding:10px;   
    }
`
