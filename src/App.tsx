import React from 'react';
import {Button} from "./Components/Button";


function App() {
    const Button1Foo=(subscriber: string, age: number, address: string)=>{
        console.log(subscriber, age, address)
    }
    const Button2Foo=(subscriber: string, age: number)=>{
        console.log(subscriber, age)
    }
    const Button3Foo=(subscriber: string)=>{
        console.log(subscriber)
    }
    return (
        <div>
            <Button name={'MyYouTubeChanel-1'} callBack={() => Button1Foo('im Vasya', 21, 'Minsk')}/>
            <Button name={'MyYouTubeChanel-2'} callBack={() => Button2Foo('im Ivan', 35)}/>
            <Button name={'Stupid button'} callBack={() => Button3Foo('im stupid button')}/>
        </div>

    )
}

export default App;