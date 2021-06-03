import React from 'react'
import styled from 'styled-components';

function NavItems(props) {
    return (
        <NavItem>
            <NavbarText>
                {props.props}
            </NavbarText>
        </NavItem>
    )
}

export default NavItems

const NavItem = styled.div`
    color:white;
    display:flex;
    width:100%;
    width:100%;
    text-decoration-line:none;
     border-bottom:0.5px solid white;


`;

const NavbarText = styled.p`
    padding:10px;
    color:#a2b1f5;
    font-weight:500;
   

`;