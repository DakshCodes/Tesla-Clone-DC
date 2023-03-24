import React from 'react'
import styled from 'styled-components';
import { Fade } from "react-awesome-reveal";


const Section = (props) => {
    return (
        <Wrap bgImag={props.backgroundImg}>
            <Fade direction='up'>
                <ItemText>

                    <h1>{props.title}</h1>

                    <p>{props.description}</p>
                </ItemText>

            </Fade>

            <Buttons>

                <ButtonGroup>

                    <LeftButton>

                        {props.leftBtnText}

                    </LeftButton>
                    {props.rightBtnText &&
                        <RightButton>

                            {props.rightBtnText}

                        </RightButton>

                    }

                </ButtonGroup>

                <DownArrow src="/images/down-arrow.svg" />

            </Buttons>

        </Wrap>

    )
}
const Wrap = styled.div`

width: 100vw;
height: 100vh; 
background-size: cover;
background-position: center;
background-repeat: no-repeat; 
background-image: url('/images/model-s.jpg');
display: flex;
flex-direction: column; 
justify-content: space-between; 
align-items: center;
background-image:${props => `url(${props.bgImag})`}
`;

const ItemText = styled.div`
padding-top: 15vh;
text-align: center`;

const ButtonGroup = styled.div`
display: flex; 
margin-bottom: 30px;
@media(max-width:786px){
    flex-direction:column;
}
`;

const LeftButton = styled.div`
background-color: rgba(23, 26, 32, 0.8); 
height: 40px;
width: 256px;
color: white;
display: flex;
justify-content: center;
align-items: center; 
border-radius: 100px;
opacity:0.85;
text-transform:uppercase;
cursor:pointer;
margin:8px;
`;

const RightButton = styled(LeftButton)`
background:white;
opacity:0.65;
color:black;
`;

const DownArrow = styled.img`
 margin-top: 20px; 
 width:100%;
 height: 40px;
 animation:animateDown infinite 1.5s;
 `;

const Buttons = styled.div``;



export default Section;
