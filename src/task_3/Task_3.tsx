import React, {ChangeEvent, ReactNode, useCallback, useState} from 'react';


//find the problem and fix it as part of composition optimization, memo, children

type Task3PropsType = {
    children: ReactNode
}

export const Task_3 = ({children}: Task3PropsType) => {
    console.log('task3')
    const [value, setValue] = useState('');

    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value), []);

    return (
        <div>
            <div>Lags when change value</div>
            <input type="text" value={value} onChange={onChange}/>
            {children}
        </div>
    );
};
