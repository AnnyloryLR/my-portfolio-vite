import styled from "styled-components";
import { RiArrowRightDoubleFill} from 'react-icons/ri';
import { Link } from "react-router-dom";


interface Path{
  path:string
}


const ArrowMobileRight= ({path}:Path) =>{
    return(
        <LinkStyled to={path}><RightArrow/></LinkStyled>
    )
}

export default ArrowMobileRight

const LinkStyled = styled(Link)`
  @media screen and (min-width: 1010px){
    display: none;
  }
  @media screen and (max-width:1000px){
    position:fixed;
    top:17vh;
    right:1vw;
    width:8%;
    height: 4%;
    display:flex;
    align-items:center;
    justify-content:center;

  }

`
const RightArrow = styled(RiArrowRightDoubleFill)`
  font-size:37px;
  color:#ffffff;
`