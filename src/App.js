import "./sass/styles.scss";
import React,{Component} from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {paths} from "./config.js";
import Footer from "./components/footer";

class App extends Component{
  render(){
    let routeContent = paths.map((item,idx)=>{
      return <Route path={item.path} element={item.element} key={idx}/>
    });
    return(
      <BrowserRouter>
        <Routes>
          {routeContent}
        </Routes>
        <Footer/>
      </BrowserRouter>
    )
  }
}

export default App;