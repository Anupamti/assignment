import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removePeople } from '../../Redux/action/peopleAction'
import AllUsersChat from '../Chat/AllUsers'
import { SidebarContainer, SignoutButton, TopbarButton, TopbarHead, TopbarItem, TopImage, TopName, TopToggle, UserContainer, UserEmail, UserImage, UserName } from './SidebarStyles'
import { SideBarData } from '../NavBar/NavBarData'
function Sidebar() {
    const people = useSelector(state => state.selectedPeople.payload)
    const [click, setClick] = useState()
    const { name, profilepicture, email } = people

    const dispatch = useDispatch()

    const remove = () => {
        dispatch(removePeople())
    }

    const handelClick = () => {
        setClick(!click)
    }
    return (
        <SidebarContainer>
            <TopbarItem>
                <TopbarHead>
                    {
                        SideBarData.map((Nav) => (
                            window.location.pathname === Nav.path && <p>{Nav.title}</p>
                        ))
                    }
                </TopbarHead>
                <TopbarButton onClick={handelClick} >
                    <TopImage src={profilepicture} />
                    <TopName>
                        {name}
                    </TopName>
                    <TopToggle click={click}>
                        <UserContainer>
                            <UserImage src={profilepicture} />
                            <UserName>
                                {name}
                            </UserName>
                            <UserEmail>
                                {email}
                            </UserEmail>
                            <SignoutButton onClick={remove}>
                                Sign Out
                            </SignoutButton>
                        </UserContainer>
                    </TopToggle>
                </TopbarButton>
            </TopbarItem>
            <AllUsersChat />
        </SidebarContainer>
    )
}

export default Sidebar
