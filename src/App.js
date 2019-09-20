import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList"
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage"
import CharacterList from "./components/CharacterList";



export default function App() {
  
  return (
    <main>
      <Header />
      <Route path="/" component={WelcomePage} />
      <Route path="/character-list" component={CharacterList} />
    </main>
  );
}
