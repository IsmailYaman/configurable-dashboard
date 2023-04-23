import { Card, Title, LineChart } from '@tremor/react';

export default function LinechartExample() {
    const chartdata = [
      { time: "11:30", temperature: 18.7 },
      { time: "12:00", temperature: 19.3 },
      { time: "12:30", temperature: 20.5 },
      { time: "13:00", temperature: 20.9 },
      { time: "13:30", temperature: 21 }
    ];
  
    const dataFormatter = (number) =>
      `${Intl.NumberFormat('us').format(number).toString()}°C`;
  
    return (
      <Card>
        <Title>Temperature (11:30 to 13:30)</Title>
        <LineChart
          className="mt-6"
          data={chartdata}
          index="time"
          categories={['temperature']}
          colors={['blue']}
          valueFormatter={dataFormatter}
          yAxisWidth={40}
        />
      </Card>
    );
  }
  