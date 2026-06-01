import styled from 'styled-components';
import { useState } from "react";


const Skill = ({ name, iconName }: { name: string; iconName: React.ReactElement<{ className?: string }> }) => {

    const [isHovered, setIsHovered] = useState(false)
    function onHover(){
        setIsHovered(true);
    };
    function onHoverOver(){
        setIsHovered(false);
    };
    return(
        <Box onMouseOver={onHover} onMouseLeave={onHoverOver}>
           {isHovered ? <p>{name}</p> : iconName}                   
        </Box>  
    )
}

export default Skill;

const Box = styled.div`
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