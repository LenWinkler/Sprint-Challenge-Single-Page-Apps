import React from "react";

export default function CharacterCard({ image, name, episode, status}) {
  // console.log('props', props);
  return <div className="char-card">
    <img>{image}</img>
    <h2>Name: {name}</h2>
    <p>Appeared in {episode} episodes</p>
    <p>Current status: [{status}]</p>
    </div>
}
