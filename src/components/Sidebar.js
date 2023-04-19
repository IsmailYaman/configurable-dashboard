import React from "react";

export default function Sidebar({ sidebarItems }) {
  return (
    <div className="flex">
      <div className="flex flex-col h-screen p-3 bg-gray-800 shadow w-50">
        <div className="space-y-3">
          <div className="flex items-center">
            <h2 className="font-bold text-white">Configurable Dashboard</h2>
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              {sidebarItems.map((sidebarItems, index) => (
                <li
                  key={index}
                  className="rounded-sm hover:bg-slate-50 hover:bg-opacity-20"
                >
                  <a
                    href={sidebarItems.link}
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    {sidebarItems.icon}
                    <span className="text-gray-100">{sidebarItems.text}</span>
                  </a>
                </li>
              ))}
              <li className="rounded-sm hover:bg-slate-50 hover:bg-opacity-20">
                datasource
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
