import styled from "styled-components";


export const UsersContainer = styled.div`
    background-image:url("https://cutewallpaper.org/21/white-and-blue-backgrounds/Background-Blue-PowerPoint-Backgrounds-for-Free-PowerPoint-.jpeg");
    display:flex;
    justify-content:center;
    height:120vh;
    align-items:center;
    
`;

export const BoxContainer = styled.div`
    height:90vh;
    width:40vw;
    background-color:white;
    border-radius:20px;
    box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12)
;

`;

export const BoxTop = styled.div`
    border-top-left-radius:20px;
    border-top-right-radius:20px;
    background-color:#f4f5f0;
    height:15vh;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const BoxTopText = styled.h4`
   color:brown;
`;
export const BoxBottom = styled.div`
    overflow-y:scroll;
    width: 100%;
    height: 80%;
    ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: lightgray;
    border-radius: 10px;
  }
   /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }


`;