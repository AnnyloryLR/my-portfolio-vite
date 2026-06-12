import styled from "styled-components";
import { Link } from "react-router-dom";


const HireMeButton = () =>{
    return(
        <HireMeButtonStyle to="/contact">Hire Me</HireMeButtonStyle>

    )
}

export default HireMeButton

const HireMeButtonStyle = styled(Link)`
    position:fixed;
    top: 85vh;
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