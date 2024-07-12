import React, {useState} from "react";
import {Cars} from "./Cars";


function carsApp() {
    let [topCars, setTopCars] = useState([
            {manufacturer: 'BMW', model: 'X5'},
            {manufacturer: 'Mercedes', model: 'MLS'},
            {manufacturer: 'Audi', model: 'Q7'}
        ]
    )

    return (
        <div>
        <Cars Cars={topCars}/>
    </div>
)
}

export default carsApp;

