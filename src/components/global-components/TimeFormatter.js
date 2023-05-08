const TimeFormatter = ({ timestamp }) => {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    const formattedTimestamp = `${day}-${month}-${year}`;
    return formattedTimestamp;
};

export default TimeFormatter;
