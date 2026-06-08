import styled from "styled-components";
import { RiHome7Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Contact = () => {
    
        return (
        <ContactContainer>
        <Link to={"/"} ><BackToHome/></Link>
        <Title>Contact Me</Title>
        <Paragraph>Feel free to reach me out using the form below or through my email: annyloryrosa@gmail.com</Paragraph>
        <Wrapper>
                {/* <form onSubmit={}> */}
                    <Form>
                        <label htmlFor="user_name">Name</label>
                        <Information
                        id ="user_name"
                        required
                        type="text"
                        placeholder="Type your Name..."
                        // value={}
                        // onChange={}
                        />

                        <label htmlFor="email">E-mail</label>
                        <Information
                        id ="email"
                        required
                        type="email"
                        placeholder="Type your E-mail adress..."
                        // value={}
                        // onChange={}
                        />
                        <label htmlFor="message">Message</label>
                        <TextareaStyled
                        id="message"
                        placeholder="Type your message..."
                        />
                
                        <label htmlFor="whatsapp">What's app</label>
                        <Information
                        id ="whatsapp"
                        required
                        type="text"
                        placeholder="Type your What's App number..."
                        // value={}
                        // onChange={}
                        />
                        <Submition type="submit" value="Submit" />

                    </Form>
                {/* </form> */}
            </Wrapper>

        </ContactContainer>
     )
}

export default Contact;

const ContactContainer = styled.div` 
  min-height: 100vh;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  margin:0px;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: clamp(1rem, 5vw, 4rem);
  @media (max-width:900px){
    font-size:2rem;
    width: 100%;
  }
    
`
const Paragraph = styled.p`
  margin:0px;
  width: 60%;
  font-size: clamp(1rem, 5vw, 1.5rem);
  line-height: 2;
  text-align: center;
  max-width: 90%;
  color: #007bff;
  @media (max-width:900px){
    font-size:0.8rem;
  }
`
const Wrapper = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;  
  justify-content:space-evenly;
  align-items:center; 
`
const Form = styled.div`
    border:1px solid #555;
    border-radius:10px;
    padding:30px;
    width:50%;
    display:flex;
    flex-direction:column;  
    justify-content:space-evenly;
    align-items:center;
    margin-bottom:3%;
    @media (max-width:900px){
        width: 90%;
    }

    label{
        color:aliceblue;
        font-size:16px;
        font-weight:400;
    }
`
const Information = styled.input`
    width:300px;
    height:40px;
    background-color:aliceblue;
    border:1px solid #D4D4D4;
    border-radius:8px;
    margin-bottom:10px;
    &::placeholder{
        color:#555;
        font-size:16px;
        font-weight:400;
        font-style:italic;
    }    
`
const TextareaStyled = styled.textarea`
    width:300px;
    height:200px;
    background-color:aliceblue;
    border:1px solid #D4D4D4;
    border-radius:8px;
    margin-bottom:10px;
    &::placeholder{
        color:#555;
        font-size:16px;
        font-weight:400;
        font-style:italic;
    }    
    
`
const Submition = styled.input`
    width:300px;
    height:42px;
    background-color:#555;
    border:none;
    border-radius:8px;
    margin-top:20px;
    color:aliceblue;
    font-size:18px;
    font-weight:700;    
`
const BackToHome = styled(RiHome7Fill)`
    margin-top:5vh;
    margin-left:80vw;
    color: #007BFF;
    font-size:36px;
`

