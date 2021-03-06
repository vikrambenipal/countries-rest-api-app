import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons'

const NavContainer = styled.div`
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.0562);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    h3 {
        margin-left: 15px;
    }
    p {
        margin-right: 20px;
    }
`
const DarkMode = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    .moon {
        margin-right: 15px;
        stroke: black;
        stroke-width: 25;
    }
`

const Nav = () => {
    return (
        <NavContainer>
            <h3>Where in the world?</h3>
            <DarkMode>
                <FontAwesomeIcon className="moon" icon={faMoon} color="white" stroke="black"/>
                <p>Dark Mode</p>
            </DarkMode>
        </NavContainer>
    )
}
export default Nav;