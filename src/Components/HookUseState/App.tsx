import React, {useState} from 'react';



function App() {

    //let a = 1
    let[a, setA] = useState(0)

const onClickHandler = () => {
    setA(++a)
}

const onClickHandler2 = () => {
        setA(0)
}

    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandler2}>0</button>
        </div>


    )
}

export default App;