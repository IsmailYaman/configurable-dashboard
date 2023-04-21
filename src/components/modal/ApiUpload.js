import { useState } from "react";

export default function ApiUpload(props) {
  const [url, setUrl] = useState("");
  const [key, setKey] = useState("");
  const [status, setStatus] = useState(null);

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleKeyChange = (event) => {
    setKey(event.target.value);
  };

  const handleConnect = () => {
    fetch(url, {
      headers: {
        Authorization: key ? `Bearer ${key}` : undefined,
      },
    })
      .then((response) => {
        if (response.ok) {
          setStatus("Connected");
        } else {
          setStatus("Connection Failed");
        }
      })
      .catch(() => {
        setStatus("Connection Failed");
      });
  };

  return (
    <div className="modal-box">
      <h1 className="font-bold text-2xl">API upload</h1>
      <div className="my-5 flex flex-col items-center">
        <label htmlFor="api-url" className="font-bold mb-2">
          API URL:
        </label>
        <input
          type="text"
          id="api-url"
          value={url}
          onChange={handleUrlChange}
          className="border border-gray-400 px-2 py-1 rounded-sm mb-5"
        />
        <label htmlFor="api-key" className="font-bold mb-2">
          API Key:
        </label>
        <input
          type="text"
          id="api-key"
          value={key}
          onChange={handleKeyChange}
          className="border border-gray-400 px-2 py-1 rounded-sm mb-5"
        />
        <button onClick={handleConnect} className="btn w-full flex-shrink-0 py-2">
          Connect
        </button>
        {status && (
          <p className={status === "Connected" ? "text-green-600" : "text-red-600"}>
            {status}
          </p>
        )}
      </div>
      <div className="modal-action">
        <button onClick={props.handleBackClick} className="btn">
          Back
        </button>
      </div>
    </div>
  );
}
