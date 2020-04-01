import React from "react"

const Menu = (props) => {
    console.log("je suis ici:   "+((props.listMenu.filter(x=>x.items.length > 0).map(e=>(e.items)))))
return  <div>
            <div  className="flex">
                {props.listMenu.map(e=>
                    <div>{e.title}</div>
                )}
            </div>
            <div>
                {(
                    props.listMenu.filter(x=>x.items.length > 0).map(e=>(e.items)).map(p=>
                        <li><a href="#">{p}</a></li>
                ))} 
                
            </div>
        </div>
}
export default Menu