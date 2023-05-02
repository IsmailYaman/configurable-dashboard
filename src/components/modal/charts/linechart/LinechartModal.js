import React, { useEffect, useState } from 'react';
import LinechartExample from './LinechartExample';
import { HiPlusSmall } from 'react-icons/hi2';
import Tabs from '../../Tabs';

export default function LineChartModal({ addLinechart, onCreate, data }) {
    const [activeButton, setActiveButton] = useState(0);
    const [isTemperatureChecked, setIsTemperatureChecked] = useState(false);
    const [isHumidityChecked, setIsHumidityChecked] = useState(false);
    const [isCo2Checked, setIsCo2Checked] = useState(false);
    const [title, setTitle] = useState('New linechart');

    // const chartData = data[0].map((data) => data.temperature);
    useEffect(() => {
        const modal = document.getElementById('linechart-modal');
        modal.checked = true;
    }, []);

    const handleItemsChange = (event) => {
        setIsTemperatureChecked(!isTemperatureChecked);
        setIsHumidityChecked(!isHumidityChecked);
        setIsCo2Checked(!isCo2Checked);
        setTitle(event.target.value);
    };

    const handleButtonClick = (buttonIndex) => {
        setActiveButton(buttonIndex);
    };

    const handleAddLineChartClick = () => {
        const modal = document.getElementById('linechart-modal');
        const linechartData = {
            title: title,
            chartType: 'line',
            data: {
                temperature: isTemperatureChecked,
                humidity: isHumidityChecked,
                co2: isCo2Checked
            },
            timeRange:
                activeButton === 0
                    ? 'day'
                    : activeButton === 1
                    ? 'week'
                    : 'month'
        };
        // onAddDataPoint(linechartData);
        console.log(linechartData);
        addLinechart = true;
        console.log(addLinechart);
        modal.checked = false;
        onCreate(linechartData);
        // return linechartData;
    };
    return (
        <div>
            <>
                <input
                    type="checkbox"
                    id="linechart-modal"
                    className="modal-toggle"
                />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">{title}</h3>
                        <p className="py-4">Preview:</p>
                        <LinechartExample />
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
                                                placeholder="New barchart"
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
                                                        checked={
                                                            isTemperatureChecked
                                                        }
                                                        className="checkbox"
                                                        onChange={
                                                            handleItemsChange
                                                        }
                                                    />
                                                </label>
                                                <label className="label cursor-pointer">
                                                    <span className="label-text">
                                                        Humidity
                                                    </span>
                                                    <input
                                                        type="checkbox"
                                                        checked={
                                                            isHumidityChecked
                                                        }
                                                        className="checkbox"
                                                        onChange={
                                                            handleItemsChange
                                                        }
                                                    />
                                                </label>
                                                <label className="label cursor-pointer">
                                                    <span className="label-text">
                                                        Co2
                                                    </span>
                                                    <input
                                                        type="checkbox"
                                                        checked={isCo2Checked}
                                                        className="checkbox"
                                                        onChange={
                                                            handleItemsChange
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
                            {/* Call the handleAddLineChartClick function on button click */}
                            <button
                                className="btn"
                                onClick={handleAddLineChartClick}
                            >
                                <HiPlusSmall className="text-white text-2xl" />{' '}
                                Add linechart
                            </button>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
}
