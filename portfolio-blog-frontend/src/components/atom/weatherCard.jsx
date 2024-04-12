const WeatherCard = () => {
  return (
    <>
      <div className="flex  items-center justify-center">
        <div className="flex w-full max-w-xs flex-col rounded bg-white p-4">
          {/*<div className="text-xl font-bold">Sydney</div>*/}
          {/*<div className="text-sm text-gray-500">Thursday 10 May 2020</div>*/}
          <div className="mt-6 inline-flex h-24 w-24 items-center justify-center self-center rounded-lg text-6xl text-indigo-400">
            <svg
              className="h-32 w-32"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              ></path>
            </svg>
          </div>
          <div className="mt-6 flex flex-row items-center justify-center">
            <div className="text-6xl font-medium">24°</div>
            <div className="ml-6 flex flex-col items-center">
              <div>Cloudy</div>
              <div className="mt-1">
                <span className="text-sm">
                  <i className="far fa-long-arrow-up"></i>
                </span>
                <span className="text-sm font-light text-gray-500">28°C</span>
              </div>
              <div>
                <span className="text-sm">
                  <i className="far fa-long-arrow-down"></i>
                </span>
                <span className="text-sm font-light text-gray-500">20°C</span>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-row justify-between">
            <div className="flex flex-col items-center">
              <div className="text-sm font-medium">Wind</div>
              <div className="text-sm text-gray-500">9k/h</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-sm font-medium">Humidity</div>
              <div className="text-sm text-gray-500">68%</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-sm font-medium">Visibility</div>
              <div className="text-sm text-gray-500">10km</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
