import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { BiChevronUp, BiChevronDown, BiX } from "react-icons/bi";

function ChatWindow({ id }) {
    const [click, setClick] = useState(false);
    const handelClick = () => {
        setClick(!click)
    }

    const selected = useSelector(state => state.selectedChat.payload)
    const { profilepicture, name } = selected
    return (
        <div>
            <ChatComponentHead click={click} onClick={handelClick}>
                <ChatComponentItem>
                    <ChatImage src={profilepicture} />
                    <ChatName>
                        {name}
                    </ChatName>
                </ChatComponentItem>
                <ChatComponentRight>
                    <BiChevronDown />
                    <BiX />
                </ChatComponentRight>
            </ChatComponentHead>
            <ChatComponent click={click}>
                <ChatMessage sent={true}>
                    <Message>
                        Lorem ipsum dolor sit amet.
                    </Message>
                </ChatMessage>
                <ChatMessage >
                    <Message>
                        Lorem ipsum dolor sit amet.
                    </Message>
                </ChatMessage>
                <ChatMessage sent={true}>
                    <Message>
                        Lorem ipsum dolor sit amet.
                    </Message>
                </ChatMessage>
                <ChatMessage >
                    <Message>
                        Lorem ipsum dolor sit amet.
                    </Message>
                </ChatMessage>
                <ChatMessage >
                    <Message>
                        Lorem ipsum dolor sit amet.
                    </Message>
                </ChatMessage>
                <TextInput click={click} />
            </ChatComponent>
        </div>
    )
}

export default ChatWindow

const ChatComponent = styled.div`
   display:${({ click }) => click ? 'flex' : 'none'};
    background-color:white;
    border:0.5px solid #304dbf;
    position:fixed;
    height:230px;
    width:208.5px;
    bottom:20px;
    right:300px;
    flex-direction:column;
    overflow-y:scroll;
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

const ChatComponentHead = styled.div`
    position:fixed;
    background-color:#304dbf;
    height:20px;
    width:190px;
    bottom:${({ click }) => click ? '250px' : '0px'};
    right:300px;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding:10px;
`;

const ChatName = styled.p`
    color:white;
    font-size:10px;
    padding-left:10px;
`;

const ChatImage = styled.img`
    height:20px;
    width:20px;
    border-radius:100%;
    background-color:white;
`;
const ChatComponentItem = styled.div`
    display:flex;
    align-items:center;
    color:white;
`;
const ChatComponentRight = styled.div`
    display:flex;
    align-items:center;
    color:white;
`;

const ChatMessage = styled.div`
    display:flex;
    padding:5px;
    height:100%;
    justify-content:${({ sent }) => sent ? 'flex-start' : 'flex-end'}
`;

const Message = styled.p`
    display:flex;
    font-size:12px;
    color:#393c40;
    background-color:#bdc1c7;
    padding:9px;
    border-radius:10px;
    font-weight:400;
    width:90px;
    height:fit-content;
`;
const TextInput = styled.input`
    display:flex;
    height:25px;
    width:201.6px;
    position: fixed;
    bottom:0px;
    right:300.7px;
    outline:none;

`;