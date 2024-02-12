import React from 'react';

const Alert = () => {
  return (
    <div className="flex px-8 py-4 items-center">
      <div className="flex-shrink mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3C8.55884 3 5.76923 5.57851 5.76923 8.75926V12.9858C5.76923 13.9629 5.36122 14.8957 4.64366 15.5589C4.05829 16.1 4.44113 17.0782 5.23827 17.0782H18.7617C19.5589 17.0782 19.9417 16.1 19.3563 15.5589C18.6388 14.8957 18.2308 13.9629 18.2308 12.9858V8.75926C18.2308 5.57851 15.4412 3 12 3Z"
            stroke="#136DF5"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M10 20.4972C10 20.4972 12 21.6285 14 20.4972"
            stroke="#136DF5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex-grow">
        <h3 className="font-semibold">Alert</h3>
        <p className="text-[#84868D]">Important Notice</p>
      </div>
      {/* <div className="w-fit inline-flex items-center justify-center bg-[#F8F8F8] rounded-full mx-auto relative flex-shrink">
        <p className=" bg-[#F96767] rounded-full p-1 w-8 h-8  text-center my-auto border text-white font-bold ">4</p>
      </div> */}
    </div>
  );
};

export default Alert;
