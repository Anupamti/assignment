import React, { useState } from 'react'
import { IoChatboxOutline } from "react-icons/io5";
import styled from 'styled-components';
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { useSelector } from 'react-redux';
import ChatRender from './ChatRender';
function AllUsersChat() {

    const [click, setClick] = useState();
    const people = useSelector(state => state.allPeople.peoples)

    const handelClick = () => {
        setClick(!click)
    }

    return (
        <div>
            <ChatComponent onClick={handelClick} click={click}>
                <ChatLeft>
                    <ChatIcon>
                        <IoChatboxOutline />
                    </ChatIcon>
                    <Chat>
                        Chats
            </Chat>
                </ChatLeft>
                <ChatRigth>
                    <ChatIconUp>
                        {click ? <BiChevronDown /> : <BiChevronUp />}
                    </ChatIconUp>
                </ChatRigth>

            </ChatComponent>
            <ChatWindow click={click}>
                {
                    people.map(({ name, profilepicture, id }) => (
                        <ChatRender id={id} name={name} image={profilepicture} />
                    ))
                }
            </ChatWindow>
        </div>

    )
}

export default AllUsersChat

const ChatWindow = styled.div`
    display:${({ click }) => click ? 'flex' : 'none'};
    background-color:white;
    border:0.5px solid #304dbf;
    position:fixed;
    height:250px;
    width:208.5px;
    bottom:0px;
    right:20px;
    flex-direction:column;
    overflow-y:scroll;
    z-index:1;
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

const ChatComponent = styled.div`
    z-index:1;
    position:fixed;
    background-color:#304dbf;
    height:20px;
    width:190px;
    bottom:${({ click }) => click ? '250px' : '0px'};
    right:20px;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding:10px;
`;
const ChatIcon = styled.div`
    display:flex;
    color:white;
`;

const ChatIconUp = styled.div`
     display:flex;
    color:white;
`;

const Chat = styled.div`
    margin-left:10px;
    color:white;
    font-weight:400;

`;
const ChatRigth = styled.div`
    display:flex;
    align-items:center;
`;
const ChatLeft = styled.div`
    display:flex;
    align-items:center;
`;
const ChatUsers = styled.div`
    background-color:black;
`;