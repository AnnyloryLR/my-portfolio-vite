import styled from "styled-components"
import { RiArrowLeftDoubleFill} from 'react-icons/ri';
import { Link } from "react-router-dom";


interface Path{
  path:string
}


const ArrowMobileLeft = ({path}:Path) =>{
    return(
        <LinkStyled to={path}><LeftArrow/></LinkStyled>
    )
}

export default ArrowMobileLeft

const LinkStyled = styled(Link)`
  @media (min-width:1010px){
    display:none;
  }
  @media (max-width:1000px){
    position:fixed;
    top: 17vh;
    left:1vw;
    width:8%;
    height: 4%;
    display:flex;
    align-items:center;
    justify-content:center;

  }

`

const LeftArrow = styled(RiArrowLeftDoubleFill)`
  font-size:37px;
  color:#ffffff;
`
