import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { removePeople } from '../../Redux/action/peopleAction';


function Comming() {

    return (
        <SidebarContainer>
            <SidebarText>
                Comming Soon
                </SidebarText>
        </SidebarContainer>
    )
}

export default Comming


const SidebarContainer = styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
 height:50vh;
`;

const SidebarText = styled.p`
    font-weight:700;
    color:#ecf0d3;
    font-size:40px;
`;