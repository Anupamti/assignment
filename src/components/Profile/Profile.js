import React from 'react'
import {
    ItemAns, ItemColon,
    ItemAddress, Address,
    ItemContaienr, Itemname, ItemQuires, Item, RightTop, RightTopProfile, SidebarContainer, SidebarLeftContainer, SideBarRigtContainer, SideRightBottom, SideRightTop, Border, ItemCompany, LeftContainerTop, LeftContainerBottom, RightLeftContainer, RightRightContainer, AddressContianer, MapContainer, MapText, MapLat, MapLng
} from '../Profile/ProfileStyles'
import { useSelector } from 'react-redux'
import MapComponents from '../MapComponent/MapComponents'


function Profile() {

    const Selected = useSelector(state => state.selectedPeople.payload)
    const { name, profilepicture, email, phone, website, username } = Selected
    const { company: { name: cname, bs: cbs, catchPhrase: phrase } } = Selected
    const { address: { city, street, suite, zipcode } } = Selected
    const { address: { geo: { lat, lng } } } = Selected

    return (
        <SidebarContainer>
            <SideBarRigtContainer>
                <SideRightTop>
                    <RightTop>
                        <RightTopProfile src={profilepicture} />
                    </RightTop>
                    <Item>
                        <Itemname>{name}</Itemname>
                        <ItemContaienr>
                            <ItemQuires>
                                Username
                            </ItemQuires>
                            <ItemColon>
                                :
                            </ItemColon>
                            <ItemAns>
                                {username}
                            </ItemAns>
                        </ItemContaienr>

                        <ItemContaienr>
                            <ItemQuires>
                                e-mail
                            </ItemQuires>
                            <ItemColon>
                                :
                            </ItemColon>
                            <ItemAns>
                                {email}
                            </ItemAns>
                        </ItemContaienr>
                        <ItemContaienr>
                            <ItemQuires>
                                Phone
                            </ItemQuires>
                            <ItemColon>
                                :
                            </ItemColon>
                            <ItemAns>
                                {phone}
                            </ItemAns>
                        </ItemContaienr>

                        <ItemContaienr>
                            <ItemQuires>
                                Website
                            </ItemQuires>
                            <ItemColon>
                                :
                            </ItemColon>
                            <ItemAns>
                                {website}
                            </ItemAns>
                        </ItemContaienr>


                    </Item>
                    <Border />
                </SideRightTop>
                <SideRightBottom>

                    <Item>
                        <ItemCompany>Company</ItemCompany>
                        <ItemContaienr>
                            <ItemQuires>
                                Name
                            </ItemQuires>
                            <ItemColon>
                                :
                            </ItemColon>
                            <ItemAns>
                                {cname}
                            </ItemAns>
                        </ItemContaienr>

                        <ItemContaienr>
                            <ItemQuires>
                                catchpharase
                            </ItemQuires>
                            <ItemColon>
                                :
                            </ItemColon>
                            <ItemAns>
                                {phrase}
                            </ItemAns>
                        </ItemContaienr>
                        <ItemContaienr>
                            <ItemQuires>
                                bs
                            </ItemQuires>
                            <ItemColon>
                                :
                            </ItemColon>
                            <ItemAns>
                                {cbs}
                            </ItemAns>
                        </ItemContaienr>
                    </Item>


                </SideRightBottom>
            </SideBarRigtContainer>
            <SidebarLeftContainer>
                <LeftContainerTop>
                    <RightLeftContainer>
                        <AddressContianer>
                            <ItemAddress>
                                <Address>Address</Address>
                                <ItemContaienr>
                                    <ItemQuires>
                                        Street
                            </ItemQuires>
                                    <ItemColon>
                                        :
                            </ItemColon>
                                    <ItemAns>
                                        {street}
                                    </ItemAns>
                                </ItemContaienr>

                                <ItemContaienr>
                                    <ItemQuires>
                                        Suite
                            </ItemQuires>
                                    <ItemColon>
                                        :
                            </ItemColon>
                                    <ItemAns>
                                        {suite}
                                    </ItemAns>
                                </ItemContaienr>
                                <ItemContaienr>
                                    <ItemQuires>
                                        City
                            </ItemQuires>
                                    <ItemColon>
                                        :
                            </ItemColon>
                                    <ItemAns>
                                        {city}
                                    </ItemAns>
                                </ItemContaienr>
                                <ItemContaienr>
                                    <ItemQuires>
                                        Zipcode
                            </ItemQuires>
                                    <ItemColon>
                                        :
                            </ItemColon>
                                    <ItemAns>
                                        {zipcode}
                                    </ItemAns>
                                </ItemContaienr>
                            </ItemAddress>
                        </AddressContianer>
                    </RightLeftContainer>
                    <RightRightContainer>

                    </RightRightContainer>
                </LeftContainerTop>
                <LeftContainerBottom >
                    <MapContainer>
                        <MapComponents lat={lat} lng={lng} />
                        <MapText><MapLat><p>Lat : </p>{lat}</MapLat> <MapLng><p>Lng : </p>{lng}</MapLng></MapText>
                    </MapContainer>
                </LeftContainerBottom>
            </SidebarLeftContainer>
        </SidebarContainer>
    )
}

export default Profile
