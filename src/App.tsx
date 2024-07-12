import React from 'react';



function App() {
    // const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello Im Vasya!')
    // }
    // const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello Im Ivan!')
    // }

    const onClickHandler=(name:string)=>{
        console.log(name)
    }

    return(
        <div>
            <button onClick={() => onClickHandler("Vasya")}>MyYouTubeChanel-1</button>
            <button onClick={() => onClickHandler("Ivan")}>MyYouTubeChanel-2</button>
        </div>

    )
}

export default App;