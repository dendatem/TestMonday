import React from 'react';

type ButtonType = {
    title:string;
    onClickHandler:()=>void;
    maxValue:boolean;

}


const Button = (props:ButtonType) => {
    return (
        <button onClick={props.onClickHandler} disabled={props.maxValue}>
            {props.title}
            </button>
       );
};

export default Button;

