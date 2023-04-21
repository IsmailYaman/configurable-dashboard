import React, { useState } from "react";
import Papa from "papaparse";

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
      },
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
      <h1 className="font-bold text-2xl">CSV Upload</h1>
      <input type="file" onChange={handleCsvUpload} />
      {csvData && <pre>{JSON.stringify(csvData, null, 2)}</pre>}
    </div>
  );
}
