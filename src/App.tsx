import React, {useState} from 'react';
import './App.css';
import Button from "./Button";


export type AppType = any;

function App() {
    const [counter, setCounter] = useState(0)
    const [maxValue,setMaxvalue]= useState(false)


    const sum = () => {
        if (counter<5){
            setCounter(counter+1);
        } else{
            setMaxvalue(true);
        }
    };

    let style = maxValue ? "error" : "";
    const reset = () =>{
        setCounter(0)
    };

    return (
        <div className="App">
            <div>React Counter</div>
            <span className={style}>{counter}</span>
            <Button title={"+"} onClickHandler={sum} maxValue={maxValue}/>
            <Button title={"reset"} onClickHandler={reset} maxValue={false}/>
        </div>
    )

}

export default App;


