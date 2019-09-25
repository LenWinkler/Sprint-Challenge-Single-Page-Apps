import React from "react";
import styled from "styled-components";

const CardsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
// margin-top: 55px;
`

const StyledCard = styled.div`
display: flex;
flex-direction: column;
max-width: 322px;
margin: 15px;
margin-top: 4rem;
padding: 10px;
border: 1px solid grey;
box-shadow: 2px 2px 4px 2px grey;
`
const CardImage = styled.img`
align-self: center;
width: 90%;
border-radius: 50%;
position: relative;
bottom: 50px;
`

export default function CharacterCard({ image, name, status, episode, species}) {
  // console.log('props', props);
  return (
    <CardsContainer>
      <StyledCard>
      <CardImage src={image} alt="character image"></CardImage>
      <h2>Name: {name}</h2>
      <p>Species: {species}</p>
      <p>{`Appears in ${episode} episode(s)`}</p>
      <p>Current status: {status}</p>
      </StyledCard>
    </CardsContainer>
  )
}

