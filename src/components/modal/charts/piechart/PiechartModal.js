/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import PiechartExample from './PiechartExample';
import { HiPlusSmall } from 'react-icons/hi2';
import ModalTabs from '../../ModalTabs';

const PieChartModal = () => {
    const [activeButton, setActiveButton] = useState(0);
    const [title, setTitle] = useState('New piechart');

    useEffect(() => {
        const modal = document.getElementById('piechart-modal');
        modal.checked = true;
    }, []);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleButtonClick = (buttonIndex) => {
        setActiveButton(buttonIndex);
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
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">Preview:</p>
                    <PiechartExample />
                    <ModalTabs
                        tabs={[
                            {
                                tabIndex: 1,
                                tabTitle: 'Info',
                                tabContent: (
                                    <div className="form-control w-full max-w-xs mx-auto py-3">
                                        <p className="font-bold pb-2">Title</p>
                                        <input
                                            type="text"
                                            placeholder="New barchart"
                                            className="input input-bordered w-full max-w-xs"
                                            value={title}
                                            onChange={handleTitleChange}
                                        />
                                    </div>
                                )
                            },
                            {
                                tabIndex: 2,
                                tabTitle: 'Data',
                                tabContent: (
                                    <div className="form-control w-full mx-auto max-w-xs py-3">
                                        <p className="font-bold">
                                            Select the data you want to use
                                        </p>
                                        <div className="form-control ">
                                            <label className="label cursor-pointer">
                                                <span className="label-text">
                                                    Temperature
                                                </span>
                                                <input
                                                    type="checkbox"
                                                    checked
                                                    className="checkbox"
                                                />
                                            </label>
                                            <label className="label cursor-pointer">
                                                <span className="label-text">
                                                    Humidity
                                                </span>
                                                <input
                                                    type="checkbox"
                                                    checked
                                                    className="checkbox"
                                                />
                                            </label>
                                            <label className="label cursor-pointer">
                                                <span className="label-text">
                                                    Co2
                                                </span>
                                                <input
                                                    type="checkbox"
                                                    checked
                                                    className="checkbox"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                )
                            },
                            {
                                tabIndex: 3,
                                tabTitle: 'Time',
                                tabContent: (
                                    <div className="btn-group btn-group-vertical flex justify-center lg:btn-group-vertical p-3 ">
                                        <button
                                            className={`btn ${
                                                activeButton === 0
                                                    ? 'btn-active'
                                                    : ''
                                            }`}
                                            onClick={() => handleButtonClick(0)}
                                        >
                                            Day
                                        </button>
                                        <button
                                            className={`btn ${
                                                activeButton === 1
                                                    ? 'btn-active'
                                                    : ''
                                            }`}
                                            onClick={() => handleButtonClick(1)}
                                        >
                                            Week
                                        </button>
                                        <button
                                            className={`btn ${
                                                activeButton === 2
                                                    ? 'btn-active'
                                                    : ''
                                            }`}
                                            onClick={() => handleButtonClick(2)}
                                        >
                                            Month
                                        </button>
                                    </div>
                                )
                            }
                        ]}
                    />

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
