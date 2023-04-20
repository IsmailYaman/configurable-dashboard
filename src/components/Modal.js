import { useState } from 'react';

export default function Modal() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleBackClick = () => {
    setSelectedOption(null);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case 'option1':
        return (
          <div className="modal-box">
            <h1 className="font-bold text-2xl">Option 1</h1>
            <p>Option 1 content</p>
            <div className="modal-action">
              <button onClick={handleBackClick} className="btn">
                Back
              </button>
            </div>
          </div>
        );
      case 'option2':
        return (
          <div className="modal-box">
            <h1 className="font-bold text-2xl">Option 2</h1>
            <p>Option 2 content</p>
            <div className="modal-action">
              <button onClick={handleBackClick} className="btn">
                Back
              </button>
            </div>
          </div>
        );
      default:
        return (
          <div className="modal-box">
            <h1 className="font-bold text-2xl">Datasource</h1>
            <h3 className="font-bold text-lg">
              Congratulations random Internet user!
            </h3>
            <p className="py-4">
              You've been selected for a chance to get one year of
              subscription to use Wikipedia for free!
            </p>
            <div className="modal-action">
              <button onClick={() => handleOptionClick('option1')} className="btn">
                Option 1
              </button>
              <button onClick={() => handleOptionClick('option2')} className="btn">
                Option 2
              </button>
            </div>
          </div>
        );
    }
  };

  return <div className="modal" id="datasource-modal">{renderContent()}</div>;
}
