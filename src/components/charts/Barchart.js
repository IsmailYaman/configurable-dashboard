import { Card, Title, BarChart } from '@tremor/react';

export default function Barchart({ datasources, selectedOptions }) {
    console.log('barchart', datasources);
    let chartdata = [];

    if (datasources && datasources.length > 0 && datasources[0]) {
        chartdata = datasources[0].map((item) => {
            const date = new Date(item.timestamp);
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const year = date.getFullYear().toString();
            const formattedTimestamp = `${day}-${month}-${year}`;
            return {
                timestamp: formattedTimestamp,
                temperature: item.temperature,
                humidity: item.humidity,
                carbondioxode: item.carbondioxide
            };
        });
    }

    const formattedArray = selectedOptions
        .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
        .join(', ');

    const dataFormatter = (number) =>
        `${Intl.NumberFormat('us').format(number).toString()}%`;

    return (
        <div className="lg:col-span-6 sm:col-span-12 ">
            <Card>
                <Title>{formattedArray}</Title>
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
