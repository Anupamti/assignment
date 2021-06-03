import React, { useEffect } from 'react'
import { BoxContainer, BoxTop, BoxTopText, BoxBottom, UsersContainer } from './AllUsersStyles'
import UsersRender from './usersRender'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setPeople } from '../../Redux/action/peopleAction'

function Allusers() {
    const dispatch = useDispatch();
    const fetchData = async () => {
        try {
            const res = await axios.get("https://panorbit.in/api/users.json");
            dispatch(setPeople(res.data.users))
        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchData()
    })

    const people = useSelector(state => state.allPeople.peoples)
    return (
        <UsersContainer>
            <BoxContainer>
                <BoxTop>
                    <BoxTopText>
                        Select an account
                        </BoxTopText>
                </BoxTop>
                <BoxBottom>
                    {
                        people.map(({ name, profilepicture, id }) => (
                            <UsersRender id={id} name={name} image={profilepicture} />
                        ))
                    }

                </BoxBottom>
            </BoxContainer>
        </UsersContainer>
    )
}

export default Allusers
