import React,{useState} from "react"
import {BrowserRouter} from "react-router-dom"
import "./App.css"
import {Route} from "react-router-dom"
import Menu from "./Components/Menu/index"
import HomePage from "./Pages/HomePage"
import LoginPage from "./Pages/LoginPage"
import RegistroPage from "./Pages/RegistroPage"
import DetallePage from "./Pages/DetallePage"
function App() {
  const [login,setLogin] = useState((localStorage.getItem("token")?true:false));
  return (
    <BrowserRouter>
        <Menu login={login} setLogin={setLogin}/>
        <Route path="/" exact component={HomePage} />
        <Route path="/ingresar" exact component={()=><LoginPage setLogin={setLogin} />} />
        <Route path="/registro" exact component={RegistroPage} />
        <Route path="/producto/:id" exact component={DetallePage} />
    </BrowserRouter>
  );
}

export default App;