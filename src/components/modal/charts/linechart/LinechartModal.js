/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Card, Title, LineChart } from '@tremor/react';
import { HiPlusSmall } from 'react-icons/hi2';
const LineChartModal = () => {
    useEffect(() => {
        const modal = document.getElementById('linechart-modal');
        modal.checked = true;
    }, []);

    const [activeTab, setActiveTab] = useState(1);
    const [activeButton, setActiveButton] = useState(0);

    const handleButtonClick = (buttonIndex) => {
        setActiveButton(buttonIndex);
    };

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 1:
                return (
                    <div className="form-control w-full max-w-xs mx-auto py-3">
                        <p className="font-bold pb-2">Title</p>
                        <input
                            type="text"
                            placeholder="New linechart"
                            className="input input-bordered w-full max-w-xs "
                        />
                    </div>
                );
            case 2:
                return (
                    <div className="form-control w-full mx-auto max-w-xs py-3">
                        <p className="font-bold">
                            Select the data you want to use
                        </p>
                        <div className="form-control ">
                            <label className="label cursor-pointer">
                                <span className="label-text">Temperature</span>
                                <input
                                    type="checkbox"
                                    checked
                                    className="checkbox"
                                />
                            </label>
                            <label className="label cursor-pointer">
                                <span className="label-text">Humidity</span>
                                <input
                                    type="checkbox"
                                    checked
                                    className="checkbox"
                                />
                            </label>
                            <label className="label cursor-pointer">
                                <span className="label-text">Co2</span>
                                <input
                                    type="checkbox"
                                    checked
                                    className="checkbox"
                                />
                            </label>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="btn-group btn-group-vertical flex justify-center lg:btn-group-vertical p-3 ">
                        <button
                            className={`btn ${
                                activeButton === 0 ? 'btn-active' : ''
                            }`}
                            onClick={() => handleButtonClick(0)}
                        >
                            Day
                        </button>
                        <button
                            className={`btn ${
                                activeButton === 1 ? 'btn-active' : ''
                            }`}
                            onClick={() => handleButtonClick(1)}
                        >
                            Week
                        </button>
                        <button
                            className={`btn ${
                                activeButton === 2 ? 'btn-active' : ''
                            }`}
                            onClick={() => handleButtonClick(2)}
                        >
                            Month
                        </button>
                    </div>
                );
            default:
                return null;
        }
    };
    const chartdata = [
        {
            year: 1951,
            'Population growth rate': 1.74
        },
        {
            year: 1952,
            'Population growth rate': 1.93
        },
        {
            year: 1953,
            'Population growth rate': 1.9
        },
        {
            year: 1954,
            'Population growth rate': 1.98
        },
        {
            year: 1955,
            'Population growth rate': 2
        }
    ];

    const dataFormatter = (number) =>
        `${Intl.NumberFormat('us').format(number).toString()}%`;

    return (
        <>
            <input
                type="checkbox"
                id="linechart-modal"
                className="modal-toggle"
            />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Linechart</h3>
                    <div>
                        <div className="tabs flex justify-center tabs-boxed">
                            <a
                                className={`tab ${
                                    activeTab === 1 ? 'tab-active' : ''
                                }`}
                                onClick={() => handleTabClick(1)}
                            >
                                Info
                            </a>
                            <a
                                className={`tab ${
                                    activeTab === 2 ? 'tab-active' : ''
                                }`}
                                onClick={() => handleTabClick(2)}
                            >
                                Data
                            </a>
                            <a
                                className={`tab ${
                                    activeTab === 3 ? 'tab-active' : ''
                                }`}
                                onClick={() => handleTabClick(3)}
                            >
                                Timeframe
                            </a>
                        </div>
                        <div
                            className="tab-content rounded-md p-3 mt-2"
                            style={{ backgroundColor: '#242933' }}
                        >
                            {renderTabContent()}
                        </div>
                    </div>
                    <p className="py-4">Example:</p>
                    <Card>
                        <Title>Population growth rate (1951 to 2021)</Title>
                        <LineChart
                            className="mt-6"
                            data={chartdata}
                            index="year"
                            categories={['Population growth rate']}
                            colors={['blue']}
                            valueFormatter={dataFormatter}
                            yAxisWidth={40}
                        />
                    </Card>
                    <div className="modal-action">
                        <label htmlFor="linechart-modal" className="btn">
                            <HiPlusSmall className="text-white text-2xl" /> Add
                            linechart
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LineChartModal;
