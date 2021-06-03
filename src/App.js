import React from 'react';
import Allusers from './components/Allusers/Allusers';
import { useSelector } from 'react-redux';
import Homepage from './components/Homepage/Homepage';


function App() {

  const people = useSelector(state => state.selectedPeople.payload);


  return (

    <div>
      {people ? <Homepage /> : <Allusers />}
    </div>
  );
}

export default App;
