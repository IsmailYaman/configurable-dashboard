import React, { useEffect } from 'react';
import { HiPlusSmall } from 'react-icons/hi2';
const PieChartModal = () => {
    useEffect(() => {
        const modal = document.getElementById('piechart-modal');
        modal.checked = true;
    }, []);

    return (
        <>
            <input
                type="checkbox"
                id="piechart-modal"
                className="modal-toggle"
            />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">
                        Piechart
                    </h3>
                    <p className="py-4">this</p>
                    <div className="modal-action">
                        <label htmlFor="piechart-modal" className="btn">
                            <HiPlusSmall className="text-white text-2xl" /> Add piechart
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PieChartModal;
