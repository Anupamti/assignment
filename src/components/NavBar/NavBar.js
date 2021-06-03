import React, { useEffect, useState } from 'react'
import { Nav, NavbarContainer, NavBarElements, NavbarIcon, NavBarItem, NavbarText } from './NavBarStyles'
import { SideBarData } from './NavBarData';
import NavItems from './NavItems';
import NavItemsSelected from './NavItemsSelected';

function NavBar() {

    const [selected, setSelected] = useState()


    useEffect(() => {
        setSelected(window.location.pathname)
    }, [selected])

    return (
        <Nav>
            <NavbarContainer>
                <NavBarElements>
                    {
                        SideBarData.map((side) => (
                            <NavBarItem href={side.path}>
                                {selected === side.path ? <NavItemsSelected props={side.title} /> : <NavItems props={side.title} />}
                            </NavBarItem>
                        ))
                    }
                </NavBarElements>
            </NavbarContainer>
        </Nav>
    )
}

export default NavBar
