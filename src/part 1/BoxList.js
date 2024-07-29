import React, {useState} from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import {v4 as uuid} from 'uuid';

const BoxList = () => {
    const initialState = [
        {id:uuid(), bgcolor:"red", width:50, height:50},
        {id:uuid(), bgcolor:"black", width:50, height:50},
        {id:uuid(), bgcolor:"green", width:50, height:50}
    ]
    
    const [boxList, setBoxList] = useState(initialState);
    const addBox = (newBox) => {
        setBoxList(boxList => [...boxList, {id:uuid(),...newBox}])
    }
    const removeBox = (id) => {
        setBoxList((boxList.filter(box => (box.id !=id))))
    }
    return (
        <div>
            <h3>Box List</h3>
            <NewBoxForm addBox={addBox}/>
            <div>
                {boxList.map(({id,bgcolor,width,height}) => <Box id={id} key={id} removeBox={removeBox} color={bgcolor} width={width} height={height}/>)}
            </div>
        </div>
    )
}

export default BoxList;