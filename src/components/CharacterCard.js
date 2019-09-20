import React from "react";

export default function CharacterCard({ chars }) {
  return <div>
    <img>{chars.image}</img>
    <h2>Name: {chars.name}</h2>
    <p>Appeared in {chars.episode.length} episodes</p>
    <p>Current status: [{chars.status}]</p>
    </div>
}
