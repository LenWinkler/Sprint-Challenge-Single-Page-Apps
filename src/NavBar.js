import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavDiv =styled.div`
display: flex;
justify-content: center;
`


const NavBar = () => {
    return (
        <NavDiv>
            <Link to="/">Home</Link>
            <Link to="/character-list">Characters</Link>
        </NavDiv>
    )
}

export default NavBar;