import React from 'react';

type CarType = {
    manufacturer: string
    model: string
}

type TopCarsType = {
    Cars: Array<CarType>
}

export const Cars = (props: TopCarsType) => {
    return (
        <table>
            <tr>
                {props.Cars.map((objCar, index) => {
                    return (
                        <tr>
                            <th> manufacturer:  {objCar.manufacturer}</th>
                            <td> model:  {objCar.model}</td>
                        </tr>

                    )
                })}
            </tr>
        </table>
    );
};


