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
import { AiOutlineLineChart, AiOutlineBarChart, AiOutlinePieChart} from 'react-icons/ai';

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

    const renderChart = useCallback((el) => {
        if (el.chartType === 'line') {
            return <Linechart />;
        } else if (el.chartType === 'bar') {
            return <Barchart />;
        } else if (el.chartType === 'pie') {
            return <Piechart />;
        }
    }, []);

    const sidebarItems = [
        {
            icon: (
                <AiOutlineLineChart className="text-white text-2xl" />
            ),
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
        <div className="flex h-screen">
            <Sidebar
                sidebarItems={sidebarItems}
                setShowLinechartModal={setShowLinechartModal}
                setShowBarchartModal={setShowBarchartModal}
                setShowPiechartModal={setShowPiechartModal}
            />
            <div
                ref={drop}
                className="main-content w-full grid grid-rows-4 grid-flow-col gap-4"
                style={{ backgroundColor }}
            >
                {charts.length === 0 ? (
                    <div className="flex items-center mx-auto justify-center h-full text-gray-500">
                        Drag and drop here
                    </div>
                ) : (
                    charts.map(renderChart)
                )}
                {showLinechartModal && (
                    <LinechartModal
                        onCreate={(el) => setCharts((els) => [...els, el])}
                        setShowLinechartModal={setShowLinechartModal}
                    />
                )}
                {showBarchartModal && (
                    <BarchartModal
                        onCreate={(el) => setCharts((els) => [...els, el])}
                        setShowBarchartModal={setShowBarchartModal}
                    />
                )}
                {showPiechartModal && (
                    <PiechartModal
                        onCreate={(el) => setCharts((els) => [...els, el])}
                        setShowPiechartModal={setShowPiechartModal}
                    />
                )}
            </div>

            <Modal />
        </div>
    );
}

export default App;
