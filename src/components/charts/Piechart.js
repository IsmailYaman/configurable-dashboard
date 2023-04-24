import { Card, Title, DonutChart } from '@tremor/react';

export default function PieChartExample() {
    const cities = [
        { name: 'New York', sales: 9800 },
        { name: 'London', sales: 4567 },
        { name: 'Hong Kong', sales: 3908 },
        { name: 'San Francisco', sales: 2400 },
        { name: 'Singapore', sales: 1908 },
        { name: 'Zurich', sales: 1398 }
    ];

    const valueFormatter = (number) =>
        `$ ${Intl.NumberFormat('us').format(number).toString()}`;
    return (
        <div className='m-3 lg:w-1/2 md:w-full lg:flex-grow'>
            <Card>
                <Title>Sales</Title>
                <DonutChart
                    className="mt-6"
                    data={cities}
                    category="sales"
                    index="name"
                    variant="pie"
                    valueFormatter={valueFormatter}
                    colors={[
                        'slate',
                        'violet',
                        'indigo',
                        'rose',
                        'cyan',
                        'amber'
                    ]}
                />
            </Card>
        </div>
    );
}
