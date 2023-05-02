import { useDrag } from 'react-dnd';

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

export default function DraggableItems({
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
