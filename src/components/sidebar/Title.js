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
        <div onDoubleClick={handleDoubleClick} onBlur={handleBlur}>
            {editable ? (
                <input
                    type="text"
                    value={value}
                    className={'input input-bordered'}
                    onChange={handleChange}
                />
            ) : (
                <h1 className="font-bold text-white">{value}</h1>
            )}
        </div>
    );
}
