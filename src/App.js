import React from 'react';
import './App.css';
import DropDown from './Component/dropDown';
import Menu from './Component/menu';


let myList =  [
                {
                  title:"Home",
                  isDropDown:false,
                  link:"",
                  isActive:"",
                  items:""
                },
                {
                  title:"Services",
                  isDropDown:true,
                  link:"",
                  isActive:"",
                  items:["For entrepreneurs","For students","For hobbyists"]
                },{
                  title:"Contact",
                  isDropDown:false,
                  link:"",
                  isActive:"",
                  items:""
                }
              ]



function App() {
  return ( 
            <nav>
                <Menu listMenu={myList}/>
                {/* <DropDown items={myList}>Services</DropDown> */}
            </nav>

  );
}
export default App;
