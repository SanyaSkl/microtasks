import React, {ChangeEvent, useState} from 'react';
import {Input} from "./Input";
import {SlowComponent} from './slowComponent/SlowComponent';


//find the problem and fix it as part of composition optimization, memo, children

export const Task_3 = () => {
    console.log('task3')

    return (
        <div>
            <div>Lags when change value</div>
            <Input/>
            <SlowComponent />
        </div>
    );
};
