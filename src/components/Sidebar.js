import { useDrag } from 'react-dnd';
import { HiOutlineCloud } from 'react-icons/hi2';
import InDevelopment from './global-components/InDevelopmentAlert';

function callModal(
    sidebarItems,
    setShowLinechartModal,
    setShowBarchartModal,
    setShowPiechartModal
) {
    if (sidebarItems.type === 'linechart') {
        setShowLinechartModal(true);
    } else if (sidebarItems.type === 'barchart') {
        setShowBarchartModal(true);
    } else if (sidebarItems.type === 'piechart') {
        setShowPiechartModal(true);
    }
}

function DraggableItems({
    data,
    children,
    sidebarItems,
    setShowLinechartModal,
    setShowBarchartModal,
    setShowPiechartModal
}) {
    const [{ isDragging }, drag] = useDrag({
        type: data,
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                callModal(
                    sidebarItems,
                    setShowLinechartModal,
                    setShowBarchartModal,
                    setShowPiechartModal
                );
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });

    const opacity = isDragging
        ? 'opacity-30 cursor-grabbing'
        : 'opacity-100 cursor-grab';

    return (
        <li
            ref={drag}
            className={`rounded-sm bg-slate-600 bg-opacity-50 hover:bg-slate-500 hover:bg-opacity-20 } ${opacity} `}
        >
            {children ? (
                children
            ) : (
                <a
                    href={sidebarItems.link}
                    className="flex items-center p-2 space-x-3 rounded-md"
                >
                    {sidebarItems.icon}
                    <span className="text-gray-100">{sidebarItems.text}</span>
                </a>
            )}
        </li>
    );
}

export default function Sidebar({
    sidebarItems,
    setShowLinechartModal,
    setShowBarchartModal,
    setShowPiechartModal
}) {
    return (
            <div className="flex flex-col p-3 h-screen bg-gray-800 shadow">
                <div className="space-y-3">
                    <div className="flex items-center">
                        <h2 className="font-bold text-white">
                            Configurable Dashboard
                        </h2>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 text-sm">
                            <li className="rounded-sm bg-slate-600 bg-opacity-50 hover:bg-slate-500 hover:bg-opacity-20">
                                <a
                                    href="#datasource-modal"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <HiOutlineCloud className="text-white text-2xl" />
                                    <span className="text-gray-100">
                                        Datasource
                                    </span>
                                    {/* <div className="badge badge-accent">CSV: Office stats</div> */}
                                </a>
                            </li>
                        </ul>
                        <hr className="mb-4 h-0.5 border-t-0 bg-slate-500 opacity-100 dark:opacity-50" />
                        <span className="pb-3 block">Widgets</span>
                        <ul className="grid  grid-cols-2 gap-2">
                            {sidebarItems.map((sidebarItem, index) => (
                                <DraggableItems
                                    key={index}
                                    type={{ name: sidebarItem.type }}
                                    data={sidebarItem.type}
                                    sidebarItems={sidebarItem}
                                    setShowLinechartModal={
                                        setShowLinechartModal
                                    }
                                    setShowBarchartModal={setShowBarchartModal}
                                    setShowPiechartModal={setShowPiechartModal}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="relative h-full">
                    <div className="absolute bottom-0">
                        <InDevelopment/>
                    </div>
                </div>
            </div>
    );
}
