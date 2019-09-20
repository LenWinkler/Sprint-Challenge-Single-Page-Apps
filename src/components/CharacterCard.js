import React from "react";


export default function CharacterCard({ image, name, status, episode, species}) {
  // console.log('props', props);
  return <div className="char-card">
    <img src={image} alt="character image"></img>
    <h2>Name: {name}</h2>
    <p>Species: {species}</p>
    <p>{`Appears in ${episode} episode(s)`}</p>
    <p>Current status: {status}</p>
    </div>
}
