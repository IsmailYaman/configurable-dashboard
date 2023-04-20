import React from "react";
import { Draggable } from "react-drag-and-drop";
import { HiOutlineCloud } from "react-icons/hi2";

export default function Sidebar({ sidebarItems }) {
    const modalTypes = ["linechart", "barchart", "piechart", "datasource"];
    return (
        <div className="flex">
            <div className="flex flex-col h-screen p-3 bg-gray-800 shadow">
                <div className="space-y-3">
                    <div className="flex items-center">
                        <h2 className="font-bold text-white">
                            Configurable Dashboard
                        </h2>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            {sidebarItems.map((sidebarItems, index) => (
                                <Draggable
                                    key={index}
                                    type={sidebarItems.type}
                                    data={sidebarItems.trigger}
                                >
                                    <li className="rounded-sm hover:bg-slate-50 hover:bg-opacity-20">
                                        <a
                                            href={sidebarItems.link}
                                            className="flex items-center p-2 space-x-3 rounded-md"
                                        >
                                            {sidebarItems.icon}
                                            <span className="text-gray-100">
                                                {sidebarItems.text}
                                            </span>
                                        </a>
                                    </li>
                                </Draggable>
                            ))}
                            <li className="rounded-sm hover:bg-slate-50 hover:bg-opacity-20">
                                <a
                                    href="#datasource-modal"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <HiOutlineCloud className="text-white text-2xl"/>
                                    <span className="text-gray-100">
                                       {modalTypes[3]}
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
