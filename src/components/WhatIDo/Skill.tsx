import styled from 'styled-components';
import { useState } from "react";


const Skill = ({ name, iconName }: { name: string; iconName: React.ReactElement<{ className?: string }> }) => {

    const [isOn, setIsOn] = useState(false);
    const handleToggle = () => {
    setIsOn(prevState => !prevState);
    };
    return(
        <Box onClick={handleToggle}>
           {isOn ? <p>{name}</p> : iconName}                   
        </Box>  
    )
}

export default Skill;

const Box = styled.div`
    margin: 10px;
    padding: 10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:90px;
    height:100px;
    border-radius:10px;
    background-color:#555555;
    cursor:pointer;
    p{
        font-size: 0.8rem;  
        text-align: center;
        overflow-wrap: break-word;
        color:#b1afaf;

    }
    .react-icon{
        font-size:80px;
        line-height: 2;
        text-align: center;
        color:#007bff;
    }
    
`