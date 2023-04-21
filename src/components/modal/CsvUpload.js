import React, { useState } from 'react';
import Papa from 'papaparse';

export default function CsvUpload({ handleBackClick }) {
    const [csvData, setCsvData] = useState(null);

    const handleCsvUpload = (e) => {
        const file = e.target.files[0];
        Papa.parse(file, {
            header: true,
            dynamicTyping: true,
            complete: function (results) {
                console.log(results.data);
                setCsvData(results.data);
            }
        });
    };

    return (
        <div className="modal-box relative">
            <button
                id="datasource-modal-close"
                onClick={handleBackClick}
                className="btn btn-sm btn-circle absolute right-2 top-2"
            >
                ✕
            </button>
            <h1 className="font-bold text-2xl mb-2">CSV Upload</h1>
            <p className="text-lg mb-5">Upload a CSV file</p>
            <input
                type="file"
                className="file-input file-input-bordered w-full"
                onChange={handleCsvUpload}
            />
            {csvData && (
                <div className="mt-6 max-w-xl">
                    <h2 className="text-lg font-medium mb-2">CSV Data</h2>
                    <div className="max-h-[400px] overflow-y-auto bg-gray-700 text-gray-100 p-4 rounded-md">
                        <pre className="text-sm">
                            {JSON.stringify(csvData, null, 2)}
                        </pre>
                    </div>
                </div>
            )}
        </div>
    );
}
