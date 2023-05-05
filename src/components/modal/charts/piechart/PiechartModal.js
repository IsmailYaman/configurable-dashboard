import React, { useEffect, useState } from 'react';
import PiechartExample from './PiechartExample';
import { HiPlusSmall } from 'react-icons/hi2';
import Tabs from '../../Tabs';

export default function PieChartModal({
    addPiechart,
    onCreate,
    selectedOptions,
    setSelectedOptions
}) {
    const [activeButton, setActiveButton] = useState(0);
    const [title, setTitle] = useState('New piechart');

    useEffect(() => {
        const modal = document.getElementById('piechart-modal');
        modal.checked = true;
    }, []);

    const handleItemsChange = (type) => {
        if (selectedOptions.indexOf(type) === -1) {
            setSelectedOptions([...selectedOptions, type]);
        } else {
            setSelectedOptions(selectedOptions.filter((item) => item !== type));
        }
    };

    const handleButtonClick = (buttonIndex) => {
        setActiveButton(buttonIndex);
    };

    const handleAddPieChartClick = () => {
        const modal = document.getElementById('piechart-modal');
        const piechartData = {
            title: title,
            chartType: 'pie',
            data: {
                temperature: selectedOptions.some(
                    (item) => item === 'temperature'
                ),
                humidity: selectedOptions.some((item) => item === 'humidity'),
                carbondioxide: selectedOptions.some(
                    (item) => item === 'carbondioxide'
                )
            },
            timeRange:
                activeButton === 0
                    ? 'day'
                    : activeButton === 1
                    ? 'week'
                    : 'month'
        };
        // onAddDataPoint(piechartData);
        console.log(piechartData);
        addPiechart = true;
        console.log(addPiechart);
        modal.checked = false;
        onCreate(piechartData);
        // return piechartData;
    };
    return (
        <div>
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
                        <Tabs
                            tabs={[
                                {
                                    tabIndex: 1,
                                    tabTitle: 'Info',
                                    tabContent: (
                                        <div className="form-control w-full max-w-xs mx-auto py-3">
                                            <p className="font-bold pb-2">
                                                Title
                                            </p>
                                            <input
                                                type="text"
                                                placeholder="New piechart"
                                                className="input input-bordered w-full max-w-xs"
                                                value={title}
                                                onChange={handleItemsChange}
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
                                                        checked={selectedOptions.some(
                                                            (item) =>
                                                                item ===
                                                                'temperature'
                                                        )}
                                                        className="checkbox"
                                                        onChange={() =>
                                                            handleItemsChange(
                                                                'temperature'
                                                            )
                                                        }
                                                    />
                                                </label>
                                                <label className="label cursor-pointer">
                                                    <span className="label-text">
                                                        Humidity
                                                    </span>
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedOptions.some(
                                                            (item) =>
                                                                item ===
                                                                'humidity'
                                                        )}
                                                        className="checkbox"
                                                        onChange={() =>
                                                            handleItemsChange(
                                                                'humidity'
                                                            )
                                                        }
                                                    />
                                                </label>
                                                <label className="label cursor-pointer">
                                                    <span className="label-text">
                                                        Co2
                                                    </span>
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedOptions.some(
                                                            (item) =>
                                                                item ===
                                                                'carbondioxide'
                                                        )}
                                                        className="checkbox"
                                                        onChange={() =>
                                                            handleItemsChange(
                                                                'carbondioxide'
                                                            )
                                                        }
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
                                                onClick={() =>
                                                    handleButtonClick(0)
                                                }
                                            >
                                                Day
                                            </button>
                                            <button
                                                className={`btn ${
                                                    activeButton === 1
                                                        ? 'btn-active'
                                                        : ''
                                                }`}
                                                onClick={() =>
                                                    handleButtonClick(1)
                                                }
                                            >
                                                Week
                                            </button>
                                            <button
                                                className={`btn ${
                                                    activeButton === 2
                                                        ? 'btn-active'
                                                        : ''
                                                }`}
                                                onClick={() =>
                                                    handleButtonClick(2)
                                                }
                                            >
                                                Month
                                            </button>
                                        </div>
                                    )
                                }
                            ]}
                        />

                        <div className="modal-action">
                            {/* Call the handleAddPieChartClick function on button click */}
                            <button
                                className="btn"
                                onClick={handleAddPieChartClick}
                            >
                                <HiPlusSmall className="text-white text-2xl" />{' '}
                                Add piechart
                            </button>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
}
