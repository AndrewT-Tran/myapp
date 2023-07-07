import React, { useState } from "react";

const KittyForm = props => {
    const { addFunction } = props;

    const formSubmit = e => {
        e.preventDefault(); // prevent the form from refreshing the page
        addFunction("test");
    };

    const [kittyData, setKittyData] = useState({
        kName: "",
        kDesc: "",
        kImg: ""
    });


    const handleChange = e => {
        const { name, value } = e.target;
        setKittyData({
            ...kittyData,
            [name]: value
        });
    };

    return (
        <form onSubmit={formSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" name="kName" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="kDesc">Description: </label>
                <input type="text" name="kDesc" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="img">Image URL: </label>
                <input type="text" name="kImg" onChange={handleChange} />
            </div>
            <input type="submit" value="Add Kitty" />
        </form>
    );
};

export default KittyForm;