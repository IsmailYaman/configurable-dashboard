import React, { useState } from 'react';
export default function Title() {
    const [editable, setEditable] = useState(false);
    const [value, setValue] = useState('Configurable Dashboard');

    const handleDoubleClick = () => {
        setEditable(true);
    };

    const handleBlur = () => {
        setEditable(false);
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <h1 onDoubleClick={handleDoubleClick} onBlur={handleBlur}>
            {editable ? (
                <input
                    type="text"
                    value={value}
                    className={'input input-bordered'}
                    onChange={handleChange}
                />
            ) : (
                <h2 className="font-bold text-white">{value}</h2>
            )}
        </h1>
    );
}
