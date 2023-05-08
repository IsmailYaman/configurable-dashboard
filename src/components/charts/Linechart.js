import { Card, Title, LineChart } from '@tremor/react';
import { ErrorAlert } from '../global-components/Alert';
// import TimeFormatter from '../global-components/TimeFormatter';
export default function Linechart({ datasources, selectedOptions }) {
    console.log('linechart', datasources);
    let chartdata = [];

    if (datasources && datasources.length > 0 && datasources[0]) {
        chartdata = datasources[0]
            .map((item) => {
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
            })
            .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp)); // sort by timestamp
    }

    console.log(selectedOptions);

    const dataFormatter = (number) =>
        `${Intl.NumberFormat('us').format(number).toString()}`;

    return (
        <div className="lg:col-span-6 md:col-span-12">
            <Card>
                {chartdata.length > 0 ? (
                    <Title>{selectedOptions}</Title>
                ) : (
                    <Title>No data provided</Title>
                )}
                {chartdata.length > 0 ? (
                    <LineChart
                        className="mt-6"
                        data={[...chartdata]}
                        index={'timestamp'}
                        categories={selectedOptions}
                        colors={['red', 'blue', 'green']}
                        valueFormatter={dataFormatter}
                        yAxisWidth={40}
                    />
                ) : (
                    <ErrorAlert
                        message={
                            'No data provided. Please refresh the page and select a datasource first.'
                        }
                    />
                )}
            </Card>
        </div>
    );
}
