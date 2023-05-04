import { useState, useCallback } from 'react';
import { ChartTypes } from './components/ChartTypes';
import LinechartModal from './components/modal/charts/linechart/LinechartModal';
import BarchartModal from './components/modal/charts/barchart/BarchartModal';
import PiechartModal from './components/modal/charts/piechart/PiechartModal';
import Linechart from './components/charts/Linechart';
import Barchart from './components/charts/Barchart';
import Piechart from './components/charts/Piechart';
import Modal from './components/modal/datasource/DatasourceModal';
import Sidebar from './components/sidebar/Sidebar';
import { useDrop } from 'react-dnd';
import {
    AiOutlineLineChart,
    AiOutlineBarChart,
    AiOutlinePieChart
} from 'react-icons/ai';
import GridField from './GridField';

function App() {
    const [showLinechartModal, setShowLinechartModal] = useState(false);
    const [showBarchartModal, setShowBarchartModal] = useState(false);
    const [showPiechartModal, setShowPiechartModal] = useState(false);
    const [charts, setCharts] = useState([]);
    const [datasources, setDatasources] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([
        'temperature',
        'humidity',
        'carbondioxide'
    ]);

    console.log(datasources);

    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: [
            ChartTypes.LINECHART,
            ChartTypes.BARCHART,
            ChartTypes.PIECHART
        ],
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    }));

    const isActive = canDrop && isOver;
    let backgroundColor = '#2A303C';
    if (isActive) {
        backgroundColor = 'rgb(173, 173, 173, 0.2)';
    } else if (canDrop) {
        backgroundColor = 'rgb(173, 173, 173, 0.4)';
    }

    const renderChart = useCallback(
        (element) => {
            if (element.chartType === 'line') {
                return (
                    <Linechart
                        datasources={datasources}
                        selectedOptions={selectedOptions}
                    />
                );
            } else if (element.chartType === 'bar') {
                return <Barchart />;
            } else if (element.chartType === 'pie') {
                return <Piechart />;
            }
        },
        [datasources, selectedOptions]
    );

    const sidebarItems = [
        {
            icon: <AiOutlineLineChart className="text-white text-2xl" />,
            text: 'Linechart',
            type: 'linechart'
        },
        {
            icon: <AiOutlineBarChart className="text-white text-2xl" />,
            text: 'Barchart',
            type: 'barchart'
        },
        {
            icon: <AiOutlinePieChart className="text-white text-2xl" />,
            text: 'Piechart',
            type: 'piechart'
        }
    ];

    return (
        <div className="flex">
            <Sidebar
                sidebarItems={sidebarItems}
                setShowLinechartModal={setShowLinechartModal}
                setShowBarchartModal={setShowBarchartModal}
                setShowPiechartModal={setShowPiechartModal}
                onDatasourceSave={(ds) => setDatasources([...datasources, ds])}
            />
            <div
                ref={drop}
                className={
                    charts.length === 0
                        ? 'main-content w-screen h-screen'
                        : 'main-content w-screen grid-flow-row-dense p-6 grid grid-cols-12 gap-5'
                }
                style={{ backgroundColor }}
            >
                {charts.length === 0 ? <GridField /> : charts.map(renderChart)}
                {showLinechartModal && (
                    <LinechartModal
                        selectedOptions={selectedOptions}
                        setSelectedOptions={setSelectedOptions}
                        open={open}
                        onClose={() => setOpen(false)}
                        onCreate={(element) =>
                            setCharts((elements) => [...elements, element])
                        }
                        setShowLinechartModal={setShowLinechartModal}
                        data={datasources}
                    />
                )}
                {showBarchartModal && (
                    <BarchartModal
                        selectedOptions={selectedOptions}
                        setSelectedOptions={setSelectedOptions}
                        open={open}
                        onClose={() => setOpen(false)}
                        onCreate={(element) =>
                            setCharts((elements) => [...elements, element])
                        }
                        setShowLinechartModal={setShowLinechartModal}
                        data={datasources}
                    />
                )}
                {showPiechartModal && (
                    <PiechartModal
                        selectedOptions={selectedOptions}
                        setSelectedOptions={setSelectedOptions}
                        open={open}
                        onClose={() => setOpen(false)}
                        onCreate={(element) =>
                            setCharts((elements) => [...elements, element])
                        }
                        setShowLinechartModal={setShowLinechartModal}
                        data={datasources}
                    />
                )}
            </div>

            <Modal onSave={(ds) => setDatasources([...datasources, ds])} />
        </div>
    );
}

export default App;
