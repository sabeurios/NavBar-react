import React from 'react';
import './App.css';
import Items from './Component/items';
import Menu from './Component/menus';


let myList = [
                {
                    link : "#",
                    title : "For entrepreneurs"
                },
                {
                    link : "#",
                    title : "For Students"
                },
                {
                    lien : "#",
                    title : "For hobbyists"
                }
              ]

function App() {
  return <div className="navbar">
       <ul className="navbar-element">
           <Menu>Home</Menu>
           <Menu>Services <Items dropDwn= {myList}/> </Menu>
           <Menu>Contact </Menu>
       </ul>
  </div>
  }
export default App;
