//import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';
import React, {useState} from 'react';
import {Amplify, Auth} from 'aws-amplify';
import awsmobile from './aws-exports';


import '@aws-amplify/ui-react/styles.css';
//import { signUpFieldsWithoutDefault } from '@aws-amplify/ui';

Amplify.configure(awsmobile)
function App() {

const [driverDash, setDriverDash] = useState(false);
function goToDash(e) {
  e.preventDefault();
  setDriverDash(true);
  console.log('You clicked login.');
}
function goToLogin(e) {
  e.preventDefault();
  setDriverDash(false);
  Auth.signOut();
  //await 
  console.log('You clicked sign out.');
}

//show driver dash button
  return (
    <div >
    {driverDash ? (<div className="App"><button onClick={goToLogin}>Back to Login</button>
    <header className="App-header">
      
      <Dashboard/>        
    
      
      
    </header>

    </div>
    
    ) :  
    (<div className="App">
      <button onClick={goToDash}>Driver Dash</button><button onClick={goToDash}>User Dash</button>
      <header className="App-header">
      
             <img src="Nuber.png" alt="logo"></img>
    
      
      
    </header>
      </div>
      )}
    


    
    </div>
  );
}

export default App;
