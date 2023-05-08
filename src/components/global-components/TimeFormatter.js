import React from 'react';

function TimeFormatter({ dateString }) {
    const date = new Date(dateString);
    const formattedDate = `${date.getDate().toString().padStart(2, '0')}-${(
        date.getMonth() + 1
    )
        .toString()
        .padStart(2, '0')}-${date.getFullYear()}`;
    return <span>{formattedDate}</span>;
}

export default TimeFormatter;
