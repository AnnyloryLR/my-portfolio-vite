import styled from "styled-components"



const Category = (name: string) =>{

    return(
         <Container>
            <strong>{name}</strong>
                        
        </Container>
    )
}


const Container = styled.div`
    border:1px solid blue;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    strong{
        min-width:100%;
        max-height:5%;
        margin-bottom:20px;
        color:  #b1afaf;
        font-size: clamp(1rem, 5vw, 1.5rem);
        padding:10px;   
    }
`