import React from 'react'
import styled from 'styled-components';
import Sidebar from '../sidebar/Sidebar'
import NavBar from '../NavBar/NavBar'
import Comming from '../Posts/Comming'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Profile from '../Profile/Profile';
import NotFound from '../Posts/404';


function Homepage() {
    return (
        <Container>
            <Router>
                <NavBar />
                <MainSideBar>
                    <Sidebar />
                    <Switch>
                        <Route path="/" exact component={Profile} />
                        <Route path="/Posts" exact component={Comming} />
                        <Route path="/Gallery" exact component={Comming} />
                        <Route path="/ToDo" exact component={Comming} />
                        <Route><NotFound /></Route>
                    </Switch>
                </MainSideBar>
            </Router>
        </Container>
    )
}

export default Homepage


const Container = styled.div`
display:flex;
height:90vh;
width:98%;
`;

const MainSideBar = styled.div`
display:flex;
flex-direction:column;
width:80vw;

`;