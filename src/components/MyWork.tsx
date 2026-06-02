import styled from "styled-components";

const MyWork = () => {
    
        return (
        <MyWorkContainer>
            <Title>My Work</Title>           
            <WorkGrid>
                <ShortItem>
                    <img src="https://via.placeholder.com/300x400" alt="Project 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </ShortItem>
                    
                <TallItem>
                    <img src="https://via.placeholder.com/300x400" alt="Project 1" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </TallItem>
                    
                <ShortItem>
                    <img src="https://via.placeholder.com/300x400" alt="Project 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />     
                </ShortItem>

                <WideItem>
                    <img src="https://via.placeholder.com/600x200" alt="Project 5" />
                </WideItem>

                <TallItem>
                    <img src="./assets/images/cineflex.png" alt="Project 3" />
                </TallItem>

                <ShortItem>
                    <img src="https://via.placeholder.com/300x400" alt="Project 4" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </ShortItem>   
            </WorkGrid>
            
             <HireMeButton><a href='#contact'>Hire Me</a></HireMeButton>
        </MyWorkContainer>
     )
}

export default MyWork;

const MyWorkContainer = styled.div`
    border: 2px solid #eee;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


const Title = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    font-size: clamp(1rem, 5vw, 4rem);
    
`
const WorkGrid = styled.div`
    width: 70%;
    height: 80%;
    border: 2px solid #ccc;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 100px; // Base height increment unit
    gap: 16px;  
`
const ShortItem = styled.div`
    background: #ddd;
    padding: 10px;
`
const TallItem = styled.div`
    width: 300px;
    height: 500px;
    background: #bbb;
    grid-row: span 2; // Spans 2 row segments (200px + gap)
    padding: 10px;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
const WideItem = styled.div`
    background: #999;
    grid-column: span 2; // Spans 2 columns horizontally
    padding: 10px;
`
const HireMeButton = styled.button`
    margin-top: 70px;
    width:150px;
    height: 40px;
    background-color:#111418;
    border: 2px solid aliceblue;
    border-radius: 20px;
    cursor: pointer;
    a{
        color:aliceblue;
        font-size: 0.8rem;
        text-decoration:none;
  
    }
    &:hover {
        a{
            color:#006ff7;
        }
        
        border: 2px solid #006ff7;
        transition: color 0.3s ease;
    }
`