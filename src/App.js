import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList"
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage"
import NavBar from "./NavBar";



export default function App() {
  
  return (
    <main>
      <Header />
      <NavBar />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/character-list" component={CharacterList} />
    </main>
  );
}
