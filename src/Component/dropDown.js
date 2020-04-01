import React from "react"

const DropDown = (props) =>{
    return <div>{props.children}
        <div>
            {props.items.map(e=>
                    <li><a href="#">{e}</a></li>
            )}
        </div>
    </div>
}
export default DropDown