import React from 'react';
import { useSelector } from 'react-redux';
import Homepage from './components/Homepage/Homepage';
import NavBar from './components/NavBar/NavBar';
import Sidebar from './components/sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Comming from './components/Posts/Comming';
import NotFound from './components/Posts/four';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Allusers from './components/Allusers/Allusers';


function App() {

  const people = useSelector(state => state.selectedPeople.payload);

  return (

    <div>
      {people ? (
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
        </Container>) : (<Allusers />)}
    </div>
  );
}

export default App;

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