import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';
//import {Auth, Hub} from './aws-amplify';
import '@aws-amplify/ui-react/styles.css';

function App() {


  return (
    <div className="App">
      <header className="App-header">
      
        <Dashboard/>        
      <h1>Hi</h1>
        
        
      </header>
    </div>
  );
}

export default App;
