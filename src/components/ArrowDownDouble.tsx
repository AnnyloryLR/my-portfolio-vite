import styled, { keyframes } from "styled-components";
import { RiArrowDownDoubleLine} from 'react-icons/ri';
import { Link } from "react-router-dom";


interface Path{
  path:string
}


const ArrowDownDouble = ({path}:Path) =>{
    return(
        <LinkStyled to={path}><ScrollArrow/></LinkStyled>
    )
}

export default ArrowDownDouble

const LinkStyled = styled(Link)`
  position:fixed;
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
