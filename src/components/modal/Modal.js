import { useState } from "react";
import CsvUpload from "./CsvUpload";
import ApiUpload from "./ApiUpload";

export default function Modal() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showCsvUpload, setShowCsvUpload] = useState(false);
  const [showApiUpload, setShowApiUpload] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === "option1") {
      setShowCsvUpload(true);
    } else if (option === "option2") {
      setShowApiUpload(true);
    }
  };

  const handleBackClick = () => {
    if (selectedOption === "option1") {
      setShowCsvUpload(false);
    } else if (selectedOption === "option2") {
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
      case "option1":
        return (
          <div>
            {showCsvUpload ? (
              <CsvUpload handleBackClick={handleBackClick} onSubmit={() => {}} />
            ) : (
              <div className="modal-box">
                <h1 className="font-bold text-2xl">Option 1</h1>
                <p>CSV upload</p>
                <div className="modal-action">
                  <button onClick={handleBackClick} className="btn">
                    Back
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      case "option2":
        return (
          <div>
            {showApiUpload ? (
              <ApiUpload handleBackClick={handleBackClick} onSubmit={() => {}} />
            ) : (
              <div className="modal-box">
                <h1 className="font-bold text-2xl">Option 2</h1>
                <p>API upload</p>
                <div className="modal-action">
                  <button onClick={handleBackClick} className="btn">
                    Back
                  </button>
                </div>
              </div>
            )}
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
