import React from 'react'
import styled from 'styled-components';
import { FiChevronRight } from "react-icons/fi";

function NavItemsSelected(props) {
    return (

        <NavItems>
            <NavbarText>
                {props.props}
            </NavbarText>
            <NavbarIcon>
                <FiChevronRight />
            </NavbarIcon>
        </NavItems>


    )
}


export default NavItemsSelected

const NavItems = styled.div`
    color:white;
    display:flex;
    width:100%;
    width:100%;
    text-decoration-line:none;
    border-bottom:0.5px solid white;
    padding-top:5px;
    padding-bottom:5px;

 
`;
const NavbarIcon = styled.p`
    border-top-left-radius:100%;
    border-bottom-left-radius:100%;
    padding:5px;
    align-items:flex-end;
    background-color:white;
    color:gray;
   
 
`;
const NavbarText = styled.p`
    padding-top:5px;
    width:100%;
    color:#ebefff;
    font-weight:600;
    display:flex;
    padding-left:1vw;


`;