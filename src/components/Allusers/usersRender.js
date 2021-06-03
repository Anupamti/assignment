import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selected } from '../../Redux/action/peopleAction'
function UsersRender({ id, image, name }) {

    const People = useSelector(state => state.allPeople.peoples)
    const dispatch = useDispatch();
    const handleClick = () => {
        People.filter((data => data.id == id))
            .map((data) => {
                dispatch(selected(data))
            })
    }

    return (
        <Render>
            <RenderItem onClick={handleClick}>
                <RenderImage src={image} />
                <Rendername>{name}</Rendername>
            </RenderItem>
        </Render>
    )
}

export default UsersRender

const Render = styled.div`
    padding-left:30px;
    padding-right:30px;
`;

const Rendername = styled.p`    
    padding-left:10px;
    font-weight:400;
    `;

const RenderImage = styled.img`
    border-radius:100%;
    height:25px;
    width:25px;
`;

const RenderItem = styled.a`
    display:flex;
    align-items:center;
    border-bottom:0.3px solid lightgray;
    cursor: pointer;
    text-decoration:none;
    color:#494a46;
`;
