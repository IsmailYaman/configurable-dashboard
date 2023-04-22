export default function linechartModal() {
    return (
        <div className="modal-box relative">
            <button
                id="datasource-modal-close"
                onClick={console.log("hello")}
                className="btn btn-sm btn-circle absolute right-2 top-2"
            >
                ✕
            </button>
            <h1 className="font-bold text-2xl">Datasource</h1>
            <p className=" text-lg">Please select a datasource to use.</p>
            <div className="my-5 flex flex-col ">
                <button
                    onClick={console.log("hello")}
                    className="btn btn-block mb-5 h-40 items-center"
                >
                    <p className="text-3xl mx-auto">CSV file</p>
                </button>
                <button
                    onClick={console.log("hello")}
                    className="btn btn-block h-40 items-center"
                >
                    <p className="text-3xl mx-auto">API endpoint</p>
                </button>
            </div>
        </div>
    );
}
