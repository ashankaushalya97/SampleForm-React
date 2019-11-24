import React from "react";
import logo from "./helmet.png";
import "./App.css";

class App extends React.Component{
  render(){
    return(
      <div>
        <img src={logo} width="100" height="100" className="logo"/>
        <h1 className="app-title">Spare Categories</h1>
        <div className="container">
          Add a category...
          <br/>
          <input
            type="text"
            className="input-text"
            placeholder="Write a category"
          />
          <button
            className="add-btn"
          >Add</button>
          <div className="list">
            <ul>
              <li>
                <input type="checkbox" name="" id="" />
                helmet<button className="btn">Delete</button>
              </li>
            </ul>
          </div>
        </div>  
      </div>
    );
  }
}
export default App;