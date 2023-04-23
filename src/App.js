import { ChartTypes } from './components/ChartTypes';
import LinechartModal from './components/modal/charts/linechart/LinechartModal';
import Modal from './components/modal/Modal';
import Sidebar from './components/Sidebar';
import { useDrop } from 'react-dnd';
import {
    HiOutlinePresentationChartLine,
    HiOutlineChartBar,
    HiOutlineChartPie
} from 'react-icons/hi2';

function App() {
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
        backgroundColor = 'darkgreen';
    } else if (canDrop) {
        backgroundColor = 'darkkhaki';
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
            <div className="w-1/4 flex-shrink-0">
                <Sidebar sidebarItems={sidebarItems} />
            </div>
            <div ref={drop} style={{ backgroundColor }}>
                <p className="text-bold">Drop here!</p>
            <LinechartModal />
            </div>
            <Modal />
        </div>
    );
}

export default App;
