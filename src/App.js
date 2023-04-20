import Sidebar from "./components/Sidebar";
import Modal from "./components/Modal";
import {
    HiOutlinePresentationChartLine,
    HiOutlineChartBar,
    HiOutlineChartPie,
} from "react-icons/hi2";
import { Droppable } from "react-drag-and-drop";

function App() {
    const openModal = console.log("open modal");

    const sidebarItems = [
        {
            link: "/dashboard",
            icon: (
                <HiOutlinePresentationChartLine className="text-white text-2xl" />
            ),
            text: "Linechart",
            type: "linechart",
            trigger: "linechartModal",
        },
        {
            link: "/profile",
            icon: <HiOutlineChartBar className="text-white text-2xl" />,
            text: "Barchart",
            type: "barchart",
            trigger: "barchartModal",
        },
        {
            link: "/settings",
            icon: <HiOutlineChartPie className="text-white text-2xl" />,
            text: "Piechart",
            type: "piechart",
            trigger: "piechartModal",
        },
    ];
    return (
        <div className="flex flex-wrap">
            <div className="w-1/4 flex-shrink-0">
                <Sidebar sidebarItems={sidebarItems} />
            </div>

            <Droppable
                types={["linechart", "barchart", "piechart"]}
                onDrop={openModal}
            >
                <div>
                    <p className="text-bold">Drop here!</p>
                </div>
            </Droppable>

            <Modal/>
        </div>
    );
}

export default App;
