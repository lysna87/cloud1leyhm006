//1.
import React from 'react';
import Amplify from 'aws-amplify';
//2.
import awsExports from './aws-exports';
//3.
//import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react'
//import Authenticator
import { Authenticator, withAuthenticator} from '@aws-amplify/ui-react'

//4.
Amplify.configure(awsExports)

function Dashboard() {
 return(
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <p>
            Hey {user.username}, welcome to the Nuber Driver page
          </p>
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
 )
}

//6.
export default withAuthenticator(Dashboard)
