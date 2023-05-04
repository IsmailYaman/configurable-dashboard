export const TimeFormatter = ({ timestamp }) => {
    console.log(timestamp);
    const day = timestamp.getDate().toString().padStart(2, '0');
    const month = (timestamp.getMonth() + 1).toString().padStart(2, '0');
    const year = timestamp.getFullYear().toString();

    const formattedDate = `${day}-${month}-${year}`.toString;

    console.log(formattedDate); // output: "19-02-2021
};
