import { Card, Title, BarChart } from '@tremor/react';

export default function Barchart({ datasources, selectedOptions }) {
    console.log('barchart', datasources);
    // const chartdata = datasources.map((item) => { //werkt (gedeeltelijk) met api alleen
    const chartdata = datasources.map((item) => {
        return {
            timestamp: item.timestamp ? item.timestamp.toString() : '',
            temperature: item.temperature,
            humidity: item.humidity,
            carbondioxode: item.carbondioxide
        };
    });
    console.log(selectedOptions);
    const dataFormatter = (number) =>
        `${Intl.NumberFormat('us').format(number).toString()}%`;

    return (
        <div className="lg:col-span-6 sm:col-span-12 ">
            <Card>
                <Title>Population growth rate (1951 to 2021)</Title>
                <BarChart
                    className="mt-6"
                    data={[...chartdata]}
                    index={'timestamp'}
                    categories={selectedOptions}
                    colors={['red']}
                    valueFormatter={dataFormatter}
                    yAxisWidth={40}
                />
            </Card>
        </div>
    );
}
