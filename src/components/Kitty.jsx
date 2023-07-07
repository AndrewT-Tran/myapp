import React, { useState } from 'react';


const Kitty = props => {
    const { id, name, img, desc, removeFunction } = props;
    const [adopted, setAdopted] = useState(false);
    const handleRemove = () => {
        removeFunction(id);
    }


    return (
        <div className="KittyBox">
            <h2>{name}</h2>
            <hr />
            <img src={(`${img}`)} alt={name} />
            <p>{desc}</p>
            <button onClick={()=>setAdopted(!adopted)}>{adopted?"Cancel":"Adopt"}</button>
            <button onClick={handleRemove}>Remove</button>
        </div >
    );
};


export default Kitty;
