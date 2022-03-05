import HomeDefault from "./Screens/Default/Home";
import HomeAuth from "./Screens/Auth/Home";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("user_stack") && localStorage.getItem("token")) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []);
  return <div className="App">{auth ? <HomeAuth /> : <HomeDefault />}</div>;
}

export default App;
