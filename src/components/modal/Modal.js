import { useState } from 'react';
import CsvUpload from './CsvUpload';
import ApiUpload from './ApiUpload';
import { ErrorAlert } from '../global-components/Alert';

export default function Modal() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [showCsvUpload, setShowCsvUpload] = useState(false);
    const [showApiUpload, setShowApiUpload] = useState(false);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        if (option === 'csv') {
            setShowCsvUpload(true);
        } else if (option === 'api') {
            setShowApiUpload(true);
        }
    };

    const handleBackClick = () => {
        if (selectedOption === 'csv') {
            setShowCsvUpload(false);
        } else if (selectedOption === 'api') {
            setShowApiUpload(false);
        }
        setSelectedOption(null);
    };

    const handleCloseClick = () => {
        setSelectedOption(null);
        setShowCsvUpload(false);
        setShowApiUpload(false);
    };

    const renderContent = () => {
        switch (selectedOption) {
            case 'csv':
                return showCsvUpload ? (
                    <CsvUpload
                        handleBackClick={handleBackClick}
                        onSubmit={() => {}}
                    />
                ) : (
                    <ErrorAlert message={'Something went wrong!'} />
                );
            case 'api':
                return showApiUpload ? (
                    <ApiUpload
                        handleBackClick={handleBackClick}
                        onSubmit={() => {}}
                    />
                ) : (
                    <ErrorAlert message={'Something went wrong!'} />
                );
            default:
                return (
                    <div className="modal-box relative">
                        <button
                            id="datasource-modal-close"
                            onClick={handleCloseClick}
                            className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                            ✕
                        </button>
                        <h1 className="font-bold text-2xl">Datasource</h1>
                        <p className=" text-lg">
                            Please select a datasource to use.
                        </p>
                        <div className="my-5 flex flex-col ">
                            <button
                                onClick={() => handleOptionClick('csv')}
                                className="btn btn-block mb-5 h-40 items-center"
                            >
                                <p className="text-3xl mx-auto">CSV file</p>
                            </button>
                            <button
                                onClick={() => handleOptionClick('api')}
                                className="btn btn-block h-40 items-center"
                            >
                                <p className="text-3xl mx-auto">API endpoint</p>
                            </button>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="modal" id="datasource-modal">
            {renderContent()}
        </div>
    );
}
