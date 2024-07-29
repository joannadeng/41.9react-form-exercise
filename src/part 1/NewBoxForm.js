import React, { useState } from "react";


const NewBoxForm = ({addBox}) => {
    const initialState = {
        bgcolor:" ",
        height:" ",
        width:" "
    }

    const [boxEle, setBoxEle] = useState(initialState);

    const handleChange = (e) => {
        const {name,value} = e.target;
        if(!isNaN(value)) {
            setBoxEle(boxEle => ({
            ...boxEle,
            [name]:+value
            }))
        }else{
            setBoxEle(boxEle => ({
                ...boxEle,
                [name]:value
                }))
        } 
    }


    const handleSubmit =(e) => {
        e.preventDefault();
        addBox({...boxEle});
        setBoxEle(initialState);  // why cant reset ?
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="bgcolor">Background Color</label>
            <input 
            id="bgcolor"
            name="bgcolor"
            value={boxEle.value}
            type="text"
            placeholder="background color"
            onChange={handleChange}
            />

            <label htmlFor="width">Width</label>
            <input 
            id="width"
            name="width"
            value={boxEle.value}
            type="number"
            min="30"
            placeholder="width"
            onChange={handleChange}
            />

            <label htmlFor="height">Height</label>
            <input 
            id="height"
            name="height"
            value={boxEle.value}
            type="number"
            min="30"
            placeholder="height"
            onChange={handleChange}
            />
            <button>Submit!</button>
        </form>

    )
}

export default NewBoxForm;