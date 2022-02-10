import HomeDefault from './Screens/Default/Home';
import HomeAuth from './Screens/Auth/Home';
import { useState } from 'react';
import './App.css'

function App() {
  const  [auth , setAuth] = useState(false)
  return (
    <div className="App">
     {
       auth ? <HomeAuth /> : <HomeDefault />
     }
    </div>
  );
}

export default App;
