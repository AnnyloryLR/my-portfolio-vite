import styled from 'styled-components';
import { DiCss3, DiExtjs, DiHtml5, DiJava, DiJavascript1, DiJsBadge, DiNodejs, DiPython, DiReact } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import { SiStyledcomponents } from "react-icons/si";
import { useState } from "react";

const Skill = ({name, iconName}) =>{

    const [isHovered, setIsHovered] = useState(false)
    function onHover(){
        setIsHovered(true);
    };
    function onHoverOver(){
        setIsHovered(false);
    };
    return(
        <Box>
            { isHovered? name:""}<img className="react-icon" onMouseEnter={() => onHover()}
                onMouseLeave={() => onHoverOver()}/>                     
        </Box>  
    )
}

export default Skill;

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