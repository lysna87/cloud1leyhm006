//1.
import React from 'react';
import {Amplify, Storage} from 'aws-amplify';
//2.
//import awsExports from './aws-exports';
import awsmobile from './aws-exports';
//3.
//import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react'
//import Authenticator
import { Authenticator, CheckboxField, withAuthenticator} from '@aws-amplify/ui-react'

//4.
Amplify.configure(awsmobile)
//Amplify.configure(awsExports)//

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
        
        <p>Placeholder for icon</p>
          <p>
            Hey {user.username}, welcome to the Nuber Driver page. 
          </p>
          <div>
            <input type="file"
            onChange={onChange}
          />
          </div>
          </div>
          <br/>
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
 );
}

//Require Authentication
export default withAuthenticator(Dashboard)
