import React, { useEffect, useState } from 'react'
import { Nav, NavbarContainer, NavBarElements, NavBarItem } from './NavBarStyles'
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
                                {selected === side.path ? <NavItemsSelected key={side.id} props={side.title} /> : <NavItems key={side.id} props={side.title} />}
                            </NavBarItem>
                        ))
                    }
                </NavBarElements>
            </NavbarContainer>
        </Nav>
    )
}

export default NavBar
