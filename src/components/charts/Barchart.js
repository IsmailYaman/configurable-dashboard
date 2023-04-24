import { Card, Title, BarChart } from '@tremor/react';
export default function Barchart() {
    const chartdata = [
        {
            year: 1951,
            'Population growth rate': 1.74
        },
        {
            year: 1952,
            'Population growth rate': 1.93
        },
        {
            year: 1953,
            'Population growth rate': 1.9
        },
        {
            year: 1954,
            'Population growth rate': 1.98
        },
        {
            year: 1955,
            'Population growth rate': 2
        }
    ];

    const dataFormatter = (number) =>
        `${Intl.NumberFormat('us').format(number).toString()}%`;

    return (
        <div className="m-3  lg:w-1/2 md:w-full lg:flex-grow">
            <Card>
                <Title>Population growth rate (1951 to 2021)</Title>
                <BarChart
                    className="mt-6"
                    data={chartdata}
                    index="year"
                    categories={['Population growth rate']}
                    colors={['blue']}
                    valueFormatter={dataFormatter}
                    yAxisWidth={40}
                />
            </Card>
        </div>
    );
}
