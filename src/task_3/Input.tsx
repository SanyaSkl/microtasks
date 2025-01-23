import {ChangeEvent, memo, useState} from "react";

export const Input = memo(() => {
    console.log('input')
    const [value, setValue] = useState('');

    const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
        />
    )
})


