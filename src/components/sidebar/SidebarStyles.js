import styled from "styled-components";

export const SidebarContainer = styled.div`
 height:20vh;
 display:flex;
 flex-direction:column;
 place-content:center;
 

`;
export const TopbarItem = styled.div`
    display:flex;
    width:95%;
    padding:10px;
    border-bottom:1px solid #ccd2db;
    align-items:center;
`;

export const TopbarHead = styled.div`
    width:70%;
    color:#595853;
    font-weight:600;
    font-size:19px;
    
`;
export const TopbarButton = styled.div`
    width:30%;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    cursor:pointer;
    
`;

export const TopImage = styled.img`
    height:25px;
    width:25px;
    border-radius:100%;
`;

export const TopName = styled.p`
    color:#595853;
    padding-left:10px;
    font-weight:400;
`;
export const TopToggle = styled.div`
    z-index:1;
    display:${({ click }) => click ? 'flex' : 'none'};
    position:absolute;
    top:13%;
    right:30px;
    height:300px;
    width:230px;
    background-color:white;
    border-radius:20px;
    justify-content:center;
    align-items:center;
    box-shadow:
    
  0 43.8px 42.2px rgba(0, 0, 0, 0.072),
  0 6.7px 65.3px rgba(0, 0, 0, 0.086),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.026),
  0 100px 80px rgba(0, 0, 0, 0.20)
;
`;

export const UserContainer = styled.div`
    display:flex;
    flex-direction:column;
    height:fit-content;
    width:fit-content;
    justify-content:center;
    align-items:center;
`;

export const UserImage = styled.img`
    height:60px;
    width:60px;
    border-radius:100%;
 
`;
export const UserName = styled.p`
    font-weight:500;
    font-size:15px;
    color:#696a70;
    
`;
export const UserEmail = styled.p`
     font-weight:400;
    font-size:13px;
    color:#79797a;
`;

export const SignoutButton = styled.button`
    width:90px;
    height:35px;
    border-radius:20px;
    outline:none;
    border:none;
    font-weight:600;
    color:white;
    background-color:#f22e2e;
    
    `;