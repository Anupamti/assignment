import React from 'react'
import styled from 'styled-components';


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