import React, { useEffect } from 'react';
import { HiPlusSmall } from 'react-icons/hi2';
const BarchartModal = () => {
    useEffect(() => {
        const modal = document.getElementById('barchart-modal');
        modal.checked = true;
    }, []);

    return (
        <>
            <input
                type="checkbox"
                id="barchart-modal"
                className="modal-toggle"
            />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">
                        Barchart
                    </h3>
                    <p className="py-4">this</p>
                    <div className="modal-action">
                        <label htmlFor="barchart-modal" className="btn">
                            <HiPlusSmall className="text-white text-2xl" /> Add barchart
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BarchartModal;
