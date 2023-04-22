import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Modal from './components/modal/Modal';
import { useDrop } from 'react-dnd';

import {
  HiOutlinePresentationChartLine,
  HiOutlineChartBar,
  HiOutlineChartPie
} from 'react-icons/hi2';
import { ChartTypes } from './components/ChartTypes';

function App() {
  const [modalType, setModalType] = useState(null);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: [ChartTypes.LINECHART, ChartTypes.BARCHART, ChartTypes.PIECHART],
    drop: () => ({ name: 'Dustbin' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  const isActive = canDrop && isOver
  let backgroundColor = '#2A303C'
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  }

  const sidebarItems = [
    {
      
      icon: (
        <HiOutlinePresentationChartLine className="text-white text-2xl" />
      ),
      text: 'Linechart',
      type: 'linechart',
     
    },
    {
     
      icon: <HiOutlineChartBar className="text-white text-2xl" />,
      text: 'Barchart',
      type: 'barchart',
   
    },
    {
      icon: <HiOutlineChartPie className="text-white text-2xl" />,
      text: 'Piechart',
      type: 'piechart',
   
    }
  ];

  return (
      <div className="flex flex-wrap">
        <div className="w-1/4 flex-shrink-0">
          <Sidebar sidebarItems={sidebarItems} />
        </div>
        <div ref={drop} style={{ backgroundColor }}>
          <p className="text-bold">Drop here!</p>
        </div>
        <Modal modalType={modalType} onClose={() => setModalType(null)} />
      </div>
  );
}

export default App;
