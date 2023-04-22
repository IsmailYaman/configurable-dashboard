import React from 'react';
import { useDrag } from 'react-dnd';
import { HiOutlineCloud } from 'react-icons/hi2';

function DraggableItem({ type, data, children, sidebarItems }) {
  const [{ isDragging }, drag] = useDrag({
    type: data,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        alert(`You dropped ${type.name} into ${dropResult.name}!`);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });
  const opacity = isDragging ? 0.4 : 1;

  return (
    <li
      ref={drag}
      style={{ opacity }}
      className={`rounded-sm hover:bg-slate-50 hover:bg-opacity-20`}
    >
      {children ? (
        children
      ) : (
        <a href={sidebarItems.link} className="flex items-center p-2 space-x-3 rounded-md">
          {sidebarItems.icon}
          <span className="text-gray-100">{sidebarItems.text}</span>
        </a>
      )}
    </li>
  );
}

export default function Sidebar({ sidebarItems }) {
  return (
    <div className="flex">
      <div className="flex flex-col h-screen p-3 bg-gray-800 shadow">
        <div className="space-y-3">
          <div className="flex items-center">
            <h2 className="font-bold text-white">Configurable Dashboard</h2>
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              {sidebarItems.map((sidebarItem, index) => (
                <DraggableItem
                  key={index}
                  type={{ name: sidebarItem.type }}
                  data={sidebarItem.type}
                  sidebarItems={sidebarItem}
                />
              ))}
              <DraggableItem type="datasource" data="datasource">
                <a
                  href="#datasource-modal"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <HiOutlineCloud className="text-white text-2xl" />
                  <span className="text-gray-100">Datasource</span>
                </a>
              </DraggableItem>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
