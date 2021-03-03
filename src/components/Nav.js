import React from 'react'
import styled from 'styled-components';

const NavContainer = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    h3 {
        margin-left: 20px;
    }
    p {
        margin-right: 20px;
    }
`

const Nav = () => {
    return (
        <NavContainer>
            <h3>Where in the world?</h3>
            <p>Dark Mode</p>
        </NavContainer>
    )
}
export default Nav;