/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import PiechartExample from './PiechartExample';
import { HiPlusSmall } from 'react-icons/hi2';

const PieChartModal = (title) => {
    useEffect(() => {
        const modal = document.getElementById('piechart-modal');
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
                            placeholder="New piechart"
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

    return (
        <>
            <input
                type="checkbox"
                id="piechart-modal"
                className="modal-toggle"
            />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Piechart</h3>
                    <p className="py-4">Preview:</p>
                    <PiechartExample />
                    <div>
                        <div className="tabs flex justify-center tabs-boxed mt-3">
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

                    <div className="modal-action">
                        <label htmlFor="piechart-modal" className="btn">
                            <HiPlusSmall className="text-white text-2xl" /> Add
                            piechart
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PieChartModal;
