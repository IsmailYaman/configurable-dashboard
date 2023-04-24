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
    HiOutlinePresentationChartLine,
    HiOutlineChartBar,
    HiOutlineChartPie
} from 'react-icons/hi2';

function App() {
    const [showLinechartModal, setShowLinechartModal] = useState(false);
    const [showBarchartModal, setShowBarchartModal] = useState(false);
    const [showPiechartModal, setShowPiechartModal] = useState(false);
    const [elements, setElements] = useState([]);

    console.log(elements);
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

    const renderElement = useCallback((el) => {
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
                <HiOutlinePresentationChartLine className="text-white text-2xl" />
            ),
            text: 'Linechart',
            type: 'linechart'
        },
        {
            icon: <HiOutlineChartBar className="text-white text-2xl" />,
            text: 'Barchart',
            type: 'barchart'
        },
        {
            icon: <HiOutlineChartPie className="text-white text-2xl" />,
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
                className="main-content h-full w-5/6"
                style={{ backgroundColor }}
            >
                {elements.map(renderElement)}
                {showLinechartModal && (
                    <LinechartModal
                        onCreate={(el) => setElements((els) => [...els, el])}
                        setShowLinechartModal={setShowLinechartModal}
                    />
                )}
                {showBarchartModal && (
                    <BarchartModal
                        onCreate={(el) => setElements((els) => [...els, el])}
                        setShowBarchartModal={setShowBarchartModal}
                    />
                )}
                {showPiechartModal && (
                    <PiechartModal
                        onCreate={(el) => setElements((els) => [...els, el])}
                        setShowPiechartModal={setShowPiechartModal}
                    />
                )}
            </div>
            <Modal />
        </div>
    );




}

export default App;
