import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { RiHome7Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import ArrowMobileLeft from "./ArrowMobileLeft";

const Contact = () => {
    const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID as string
    const templateId = import.meta.env.VITE_TEMPLATE_ID as string
    const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY as string
    
    const formRef = useRef<HTMLFormElement>(null);
        const notify = () => toast ('Message sent 🚀, Thanks!😊');

        const sendEmail = (event: React.ChangeEvent<HTMLFormElement>) => {
            event.preventDefault();

            if(!formRef.current) return;

            emailjs
                .sendForm(serviceId, templateId, formRef.current, {
                    publicKey: publicKey,
                })
                .then(
                    () => {
                        console.log('Success!');
                    },
                    (error) => {
                        console.log('Failed...', error.text);
                    },
            );

            formRef.current.reset();
          
        };
    
        return (
        <ContactContainer>
        <Link to={"/"} ><BackToHome/></Link>
        <ArrowMobileLeft path="/portfolio"/>
        <Title>Contact Me</Title>
        <Paragraph>Feel free to reach me out using the form below or through my email: annyloryrosa@gmail.com</Paragraph>
                    <Form ref={formRef} onSubmit={sendEmail}>
                        <label>Name</label>
                        <Information
                        name="user_name"
                        required
                        type="text"
                        placeholder="Type your Name..."
                                        
                        />

                        <label htmlFor="email">Email</label>
                        <Information
                        name="user_email"
                        required
                        type="email"
                        placeholder="Type your E-mail adress..."
                                        
                        />
                        <label htmlFor="message">Message</label>
                        <TextareaStyled
                        maxLength={400}
                        name="message"
                        placeholder="Type your message..."
                                       
                        />
                
                        <label htmlFor="whatsapp">What's app</label>
                        <Information
                        name="whatsappNumber"
                        required
                        type="text"
                        placeholder="Type your What's App number..."
                        
                        />
                        <Submition onClick={notify} type="submit" value="Send" />
                        <ToastContainer/>
                        

                    </Form>
        </ContactContainer>
     )
}

export default Contact;

const ContactContainer = styled.div` 
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-y:auto;
    ::-webkit-scrollbar{
        display:none;
    }
    @media screen and (max-width:1024px) {
        max-height: 87vh;
        max-width: 100%;
    }
`
const BackToHome = styled(RiHome7Fill)`
    position:fixed;
    top:7vh;
    right:7vw;
    color: #007BFF;
    font-size:36px;
    @media (max-width:1024px){
        top:15vh;
        right:7vw;
    }
`    

const Title = styled.h1`
    margin:0px;
    padding: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: clamp(1rem, 5vw, 4rem);
    color:#007bff;
    @media screen and (max-width:900px){
        font-size:2rem;
        width: 100%;
    }
    
`
const Paragraph = styled.p`
    margin:0;
    max-height:20%;
    max-width:30%;
    font-size: clamp(1rem, 5vw, 1rem);
    line-height: 2;
    text-align: center;
    color: #007bff;
    @media screen and (max-width:900px){
        max-width: 60%;;
        font-size:0.8rem;
    }
`

const Form = styled.form`
    height:50%;
    min-width:20%;
    border:1px solid #555;
    border-radius:10px;
    padding:1%;
    display:flex;
    flex-direction:column;  
    justify-content:center;
    align-items:center;
    margin-bottom:3%;
    @media screen and (max-width:1024px){
        width: 60%;
        height:70%;
        overflow-y:scroll;
    }

    label{
        color:aliceblue;
        font-size:16px;
        font-weight:400;
    }
`
const Information = styled.input`
    width:70%;
    min-height:5%;
    background-color:aliceblue;
    border:1px solid #D4D4D4;
    border-radius:8px;
    margin-bottom:10px;
    color:#000000;
    &::placeholder{
        color:#555;
        font-size:0.7rem;
        font-weight:400;
        font-style:italic;
    }    
`
const TextareaStyled = styled.textarea`
    width:70%;
    min-height:15%;
    background-color:aliceblue;
    border:1px solid #D4D4D4;
    border-radius:8px;
    margin-bottom:10px;
    color:#000000;
    text-align: justify;
    &::placeholder{
        color:#555;
        font-size:0.7rem;
        font-weight:400;
        font-style:italic;
    }    
    
`
const Submition = styled.input`
    width:70%;
    min-height:5%;
    background-color:#555;
    border:none;
    border-radius:8px;
    margin-top:20px;
    color:aliceblue;
    font-size:0.8rem;
    font-weight:700;
        
`


