import { useState } from 'react';

export default function InDevelopment() {
    const [showAlert, setShowAlert] = useState(true);

    const handleClick = () => {
        setShowAlert(false);
    };
    return (
        <div>
            {/* {showAlert && ( */}
                <div className="alert shadow-lg">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="stroke-info flex-shrink-0 w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                        </svg>
                        <span>This project is still in development.</span>
                    </div>
                    {/* <div className="flex-none">
                        <button
                            onClick={handleClick}
                            className="btn btn-sm btn-primary"
                        >
                            X
                        </button>
                    </div> */}
                </div>
            {/* )} */}
        </div>
    );
}
