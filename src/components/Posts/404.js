import React from 'react'
import styled from 'styled-components';


function NotFound() {

    return (
        <SidebarContainer>
            <SidebarText>
                404 Not Found
                </SidebarText>
        </SidebarContainer>
    )
}

export default NotFound


const SidebarContainer = styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
 height:50vh;
`;

const SidebarText = styled.p`
    font-weight:700;
    color:red;
    font-size:40px;
`;