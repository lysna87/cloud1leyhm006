//1.
import React from 'react';
import {Amplify, Storage} from 'aws-amplify';
//2.
//import awsExports from './aws-exports';
import awsmobile from './aws-exports';
//3.
//import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react'
//import Authenticator
import { Authenticator,  withAuthenticator} from '@aws-amplify/ui-react'

//4.
Amplify.configure(awsmobile)


function Dashboard() {
async function onChange(e){
  if(!e.target.files[0]) return
  const file = e.target.files[0];
  await Storage.put(file.name, file, {level: 'private'})
    .then(result=> console.log(result))
    .catch(err => console.log(err + "error"));

}


 return(
    <Authenticator // Default to Sign Up screen
  
    
    >

      {({ signOut, user }) => (
        <div className="App">
        <div className="driverDiv">
        
        <p><img src="Nuber.png" alt="logo"></img></p>
        
          <p>
            Hey <em>{user.username}</em>, welcome to the Nuber Driver page. 
          </p>
          <hr/>
          <div>
          <p>Do you need your license Verified? Click below to submit image.</p>
            <input type="file"
            onChange={onChange}
          />
          <hr/>
          </div>
          </div>
          <br/>
          
        </div>
      )}
    </Authenticator>
 );
}

//Require Authentication
export default withAuthenticator(Dashboard)
