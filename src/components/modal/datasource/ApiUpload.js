import { useState } from 'react';
import { SuccessAlert, ErrorAlert } from '../../global-components/Alert';

export default function ApiUpload({ handleBackClick, onSubmit }) {
    const [apiData, setApiData] = useState({});
    const [url, setUrl] = useState('');
    const [key, setKey] = useState('');
    const [status, setStatus] = useState(null);
    const [data, setData] = useState(null);

    const handleUrlChange = (event) => {
        setUrl(event.target.value);
    };

    const handleKeyChange = (event) => {
        setKey(event.target.value);
    };

    const handleConnect = () => {
        fetch(url, {
            headers: {
                Authorization: key ? `Bearer ${key}` : undefined
            }
        })
            .then((response) => {
                if (response.ok) {
                    setStatus('Connected');

                    return response.json();
                } else {
                    setStatus('Connection Failed');
                    return Promise.reject(new Error('Connection failed'));
                }
            })
            .then((data) => {
                setData(data);
                setApiData(data);
            })
            .catch((error) => {
                console.error(error);
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
            <h1 className="font-bold text-2xl">API upload</h1>
            <p className="text-lg mb-5">
                Provide an API url and optionally a key
            </p>
            <div className="my-5 flex flex-col">
                <label htmlFor="api-url" className="font-bold mb-2">
                    API URL:
                </label>
                <input
                    type="text"
                    id="api-url"
                    value={url}
                    onChange={handleUrlChange}
                    className="input input-bordered mb-5"
                />
                <label htmlFor="api-key" className="font-bold mb-2">
                    API Key:
                </label>
                <input
                    type="text"
                    id="api-key"
                    value={key}
                    onChange={handleKeyChange}
                    className="input input-bordered w-full mb-5"
                />
                <button
                    onClick={handleConnect}
                    className="btn w-full flex-shrink-0 py-2 "
                >
                    Connect
                </button>

                {status === 'Connected' && data !== null ? (
                    <>
                        <SuccessAlert message="API connection successful!" />
                        <h2 className="text-lg font-medium mb-2 mt-4">
                            Choose a name for your datasource
                        </h2>
                        <input
                            type="text"
                            placeholder="Choose a name"
                            className="input input-bordered w-full "
                        />
                        <div>
                            <div className="mt-6 max-w-xl">
                                <h2 className="text-lg font-medium mb-2">
                                    API data
                                </h2>
                                <div className="max-h-[350px] overflow-y-auto bg-gray-700 text-gray-100 p-4 rounded-md">
                                    <pre className="text-sm">
                                        {JSON.stringify(data, null, 2)}
                                    </pre>
                                </div>
                            </div>
                        </div>
                        <button
                            className="btn float-right mt-3"
                            onClick={() => onSubmit(apiData)}
                        >
                            Save
                        </button>
                    </>
                ) : (
                    status !== null && (
                        <ErrorAlert message="Error! Could not connect to API." />
                    )
                )}
            </div>
        </div>
    );
}
