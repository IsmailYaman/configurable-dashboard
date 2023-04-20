import { useState } from "react";
import { CsvUpload } from "./CsvUpload"

export default function Modal() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [showCsvUpload, setShowCsvUpload] = useState(false);
    

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setShowCsvUpload(true);
    };

    const handleBackClick = () => {
        setSelectedOption(null);
        setShowCsvUpload(false);
    };

    const handleCloseClick = () => {
        setSelectedOption(null);
    };

    const renderContent = () => {
        switch (selectedOption) {
            case "option1":
                return (
                    <div className="modal-box">
                        {showCsvUpload ? (
                          <CsvUpload handleBackClick={handleBackClick} />
                        ) : (
                          <>
                            <h1 className="font-bold text-2xl">Option 1</h1>
                            <p>CSV upload</p>
                            <div className="modal-action">
                              <button onClick={() => setShowCsvUpload(true)} className="btn">
                                Upload CSV
                              </button>
                              <button onClick={handleBackClick} className="btn">
                                Back
                              </button>
                            </div>
                          </>
                        )}
                    </div>
                );
            case "option2":
                return (
                    <div className="modal-box">
                        <h1 className="font-bold text-2xl">Option 2</h1>
                        <p>API endpoint</p>
                        <div className="modal-action">
                            <button onClick={handleBackClick} className="btn">
                                Back
                            </button>
                        </div>
                    </div>
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
                        <h3 className="font-bold text-lg">
                            Please select a datasource to use.
                        </h3>
                        <div className="my-5 flex flex-col items-center">
                            <button
                                onClick={() => handleOptionClick("option1")}
                                className="btn w-full flex-shrink-0 mb-5 py-20"
                            >
                                <p className="text-3xl">CSV file</p>
                            </button>
                            <button
                                onClick={() => handleOptionClick("option2")}
                                className="btn w-full flex-shrink-0 py-20"
                            >
                                <p className="text-3xl">API endpoint</p>
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
