import React, { useContext } from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import ThemeContext from '../ThemeContext';

const NavContainer = styled.div`
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.0562);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    h3 {
        margin-left: 15px;
    }
    p {
        margin-right: 20px;
    }
    h3, p {
        &.light {
            color: black;
        }
        &.dark {
            color: white;
        }
    }
    &.light {
        background-color: white;
    }
    &.dark {
        background-color: #2B3844;
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

const Nav = ( { toggleTheme }) => {
    const lightTheme = useContext(ThemeContext);

    const handleTheme = (e) => {
        toggleTheme();
    }

    return (
        
        <NavContainer className={lightTheme ? "light" : "dark"}>
            <h3 className={lightTheme ? "light" : "dark"}>Where in the world?</h3>
            <DarkMode>
                <FontAwesomeIcon onClick={handleTheme} className="moon" icon={faMoon} color="white" stroke="black"/>
                <p className={lightTheme ? "light" : "dark"} onClick={handleTheme}>Dark Mode</p>
            </DarkMode>
        </NavContainer>
    )
}
export default Nav;