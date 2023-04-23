import { useState } from 'react';
import { ChartTypes } from './components/ChartTypes';
import Linechart from './components/modal/charts/linechart/Linechart';
import LinechartModal from './components/modal/charts/linechart/LinechartModal';
import BarchartModal from './components/modal/charts/barchart/BarchartModal';
import PiechartModal from './components/modal/charts/piechart/PiechartModal';
import Modal from './components/modal/Modal';
import Sidebar from './components/Sidebar';
import { useDrop } from 'react-dnd';
import {
    HiOutlinePresentationChartLine,
    HiOutlineChartBar,
    HiOutlineChartPie
} from 'react-icons/hi2';

function App(linechartData) {
    const [showLinechartModal, setShowLinechartModal] = useState(false);
    const [showBarchartModal, setShowBarchartModal] = useState(false);
    const [showPiechartModal, setShowPiechartModal] = useState(false);
    const [showLineChart, setShowLineChart] = useState(false);

    // setShowLineChart(true);
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
        <div className="flex flex-wrap">
            <div className="flex flex-shrink-0">
                <Sidebar
                    sidebarItems={sidebarItems}
                    setShowLinechartModal={setShowLinechartModal}
                    setShowBarchartModal={setShowBarchartModal}
                    setShowPiechartModal={setShowPiechartModal}
                />
            </div>
            <div
                ref={drop}
                className="main-content flex-grow h-screen flex justify-center items-center"
                style={{ backgroundColor }}
            >
                <h1 className="text-bold text-center">
                    {isActive
                        ? 'Drop here'
                        : 'Start by dragging a chart from the sidebar'}
                </h1>

                {showLinechartModal && (
                    <LinechartModal
                        setShowLinechartModal={setShowLinechartModal}
                    />
                )}
                {showBarchartModal && (
                    <BarchartModal
                        setShowBarchartModal={setShowBarchartModal}
                    />
                )}
                {showPiechartModal && (
                    <PiechartModal
                        setShowPiechartModal={setShowPiechartModal}
                    />
                )}
            </div>
            <Modal />
            {showLineChart && <Linechart />}
        </div>
    );
}

export default App;
