import styled from 'styled-components';

export const SidebarContainer = styled.div`
    display:flex;
    height:140vh;
  
`;
export const SideBarRigtContainer = styled.div`
    display:flex;
    flex:0.4;
    flex-direction:column;
    border-right:1px solid lightgray;
`;

export const SidebarLeftContainer = styled.div`
    display:flex;
    flex:0.6;
    flex-direction:column;

`;

export const SideRightTop = styled.div`
    flex:0.5;
    display:flex;
    height:fit-content;
    padding:20px;
    flex-direction:column;
`;

export const SideRightBottom = styled.div`
    flex:0.5;
      height:fit-content;
`;


export const RightTop = styled.div`
    display:flex;
    justify-content:center;
   
`;

export const RightTopProfile = styled.img`
    height:180px;
    width:180px;
    border-radius:100%;
`;
export const Item = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    flex-direction:column;
    align-items:center;
    
`;
export const Itemname = styled.p`
    color:#47484a;
    font-size:18px;
    font-weight:600;
    display:flex;
    justify-content:center;
    
    
`;
export const ItemContaienr = styled.div`
     display:flex;
     width:90%;
     height:40px;
     align-items:center;
     justify-content:center;

     
`;
export const ItemQuires = styled.p`
    color:#a2a5ab;
    font-size:16px;
    font-weight:500;
    display:flex;
    flex:0.3;
    justify-content:flex-end;
     
`;
export const ItemColon = styled.p`
    display:flex;
    flex:0.1;
    color:#b8babf;
    font-size:15px;
    font-weight:500;
    justify-content:center;
    
`;
export const ItemAns = styled.p`
    display:flex;
    flex:0.6;
    color:#47484a;
    font-size:16px;
    font-weight:600;
    justify-content:flex-start;
    word-break:break-all;

`;

export const Border = styled.div`
    border:0.3px solid lightgray;
`;

export const ItemCompany = styled.p`
    color:#a2a5ab;
    display:flex;
    font-size:18px;
    font-weight:600;
    justify-content:center;
`;

export const LeftContainerTop = styled.div`
    flex:0.2;
    display:flex;
`;

export const LeftContainerBottom = styled.div`
    flex:0.8;
    
`;

export const RightLeftContainer = styled.div`
    flex:0.7;
   display:flex;
   justify-content:center;
   align-items:center;

`;

export const RightRightContainer = styled.div`
    flex:0.3
`;
export const AddressContianer = styled.div`
    height:100%;
    width:100%;
`;
export const ItemAddress = styled.div`
        margin-left:20px;
`;

export const Address = styled.div`
    color:#a2a5ab;
    display:flex;
    font-size:18px;
    font-weight:600;
`;

export const MapContainer = styled.div`
    margin-left:10px;
    height:400px;
    width:45vw;
    justify-content:center;
    align-items:center;
    border-radius:200px;
`;
export const MapText = styled.div`
    width:100%;
    display:flex;
    justify-content:flex-end;
`;
export const MapLat = styled.p`
    display:flex;
    align-items:center;
    font-size:14px;
`;

export const MapLng = styled.p`
    margin-left:10px;
     display:flex;
    align-items:center;
    font-size:14px;
`;
