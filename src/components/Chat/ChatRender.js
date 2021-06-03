import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { GoPrimitiveDot } from "react-icons/go";
import { removeChat, selectedChat } from '../../Redux/action/peopleAction';
import { data } from 'autoprefixer';
import ChatWindow from './ChatWindow';

function ChatRender({ id, image, name }) {
    const People = useSelector(state => state.allPeople.peoples)
    const [click, setClick] = useState();
    const [User, setUser] = useState();
    const dispatch = useDispatch();
    const handleClick = () => {
        setClick(!click)
    }

    useEffect(() => {
        dispatch(removeChat())
        People.filter((data => data.id == id))
            .map((data) => {
                const { id } = data
                setUser(id)
                dispatch(selectedChat(data))
            })
    }, [click])

    return (

        <Render>
            <RenderItem onClick={handleClick} >
                <RenderImage src={image} />
                <RenderLeft>
                    <Rendername>{name}</Rendername>
                </RenderLeft>
                <RenderActive>
                    <GoPrimitiveDot />
                </RenderActive>
            </RenderItem>
            <ChatWindow click={click} id={User} />
        </Render>
    )
}


export default ChatRender


const Render = styled.div`
    padding-left:10px;
    padding-right:10px;
   
`;

const Rendername = styled.p`    
    padding-left:10px;
    font-weight:400;
    font-size:10px;
    `;

const RenderImage = styled.img`
    border-radius:100%;
    height:25px;
    width:25px;
`;

const RenderItem = styled.a`
    display:flex;
    align-items:center;
    cursor: pointer;
    text-decoration:none;
    color:#494a46;
    
    
`;

const RenderActive = styled.div`
    display:flex;
    justify-content:flex-end;
    color: #89faa8;
    flex:0.2
`;

const RenderLeft = styled.div`
    flex:0.8
`;
