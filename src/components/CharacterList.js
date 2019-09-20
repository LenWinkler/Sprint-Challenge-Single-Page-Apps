import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [chars, setChars] = useState({});

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log(res);
        const data = res.data.results;
        setChars(data)
      })
      .catch(err => {console.log('uh oh', err)})
  }, [])


  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      <CharacterCard chars={chars}/>
    </section>
  );
}
