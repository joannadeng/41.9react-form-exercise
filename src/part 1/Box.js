import React from "react";
import "./Box.css"

const Box = ({removeBox, id, color, width, height}) => {
    
    return (
        <div className="Box" style={{backgroundColor:color,width:width, height:height}}>
            <button onClick={() => removeBox(id)}>X</button>
        </div>
        
    )
}

export default Box;