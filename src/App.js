import { useState, useCallback } from 'react';
import { ChartTypes } from './components/ChartTypes';
import LinechartModal from './components/modal/charts/linechart/LinechartModal';
import BarchartModal from './components/modal/charts/barchart/BarchartModal';
import PiechartModal from './components/modal/charts/piechart/PiechartModal';
import Linechart from './components/charts/Linechart';
import Barchart from './components/charts/Barchart';
import Piechart from './components/charts/Piechart';
import Modal from './components/modal/DatasourceModal';
import Sidebar from './components/Sidebar';
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

    console.log(charts);
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

    const renderChart = useCallback((element) => {
        if (element.chartType === 'line') {
            return <Linechart />;
        } else if (element.chartType === 'bar') {
            return <Barchart />;
        } else if (element.chartType === 'pie') {
            return <Piechart />;
        }
    }, []);

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
            />
            <div
                className="main-content w-screen h-screen"
                style={{ backgroundColor }}
            >
                {charts.length === 0 ? (
                    <div ref={drop} className="grid grid-cols-4 h-screen gap-2 p-2">
                        <strong className='absolute top-0 right-0 bottom-0 left-0 m-auto w-60 h-12'>Drag and drop a widget here.</strong>
                        <div className="bg-slate-800 bg-opacity-50 rounded-sm"></div>
                        <div className="bg-slate-800 bg-opacity-50 rounded-sm"></div>
                        <div className="bg-slate-800 bg-opacity-50 rounded-sm"></div>
                        <div className="bg-slate-800 bg-opacity-50 rounded-sm"></div>
                        <div className="bg-slate-800 bg-opacity-50 rounded-sm"></div>
                        <div className="bg-slate-800 bg-opacity-50 rounded-sm"></div>
                        <div className="bg-slate-800 bg-opacity-50 rounded-sm"></div>
                        <div className="bg-slate-800 bg-opacity-50 rounded-sm"></div>
                        <div className="bg-slate-800 bg-opacity-50 rounded-sm"></div>
                        <div className="bg-slate-800 bg-opacity-50 rounded-sm"></div>
                        <div className="bg-slate-800 bg-opacity-50 rounded-sm"></div>
                        <div className="bg-slate-800 bg-opacity-50 rounded-sm"></div>
                    </div>
                    // this should be just <GridField ref={drop} />
                ) : (
                    charts.map(renderChart)
                )}
                {showLinechartModal && (
                    <LinechartModal
                        onCreate={(element) =>
                            setCharts((elements) => [...elements, element])
                        }
                        setShowLinechartModal={setShowLinechartModal}
                    />
                )}
                {showBarchartModal && (
                    <BarchartModal
                        onCreate={(element) =>
                            setCharts((elements) => [...elements, element])
                        }
                        setShowBarchartModal={setShowBarchartModal}
                    />
                )}
                {showPiechartModal && (
                    <PiechartModal
                        onCreate={(element) =>
                            setCharts((elements) => [...elements, element])
                        }
                        setShowPiechartModal={setShowPiechartModal}
                    />
                )}
            </div>

            <Modal />
        </div>
    );
}

export default App;
