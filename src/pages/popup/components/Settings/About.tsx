const About = () => {
  return (
    <div className="flex px-8 py-4 items-center">
      <div className="flex-shrink mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#136DF5" strokeWidth="1.5" />
          <path d="M12 12V16" stroke="#136DF5" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="12" cy="9" r="1" fill="#136DF5" />
        </svg>
      </div>
      <div className="flex-grow">
        <h3 className="text-base font-semibold">About App</h3>
        <p className="text-[#84868D]">Learn More About Our App</p>
      </div>
      <div className="w-fit relative flex-shrink">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M11.1559 6.08832L12.8451 4.39926C14.7108 2.53358 17.7359 2.53358 19.6016 4.39925C21.4674 6.26493 21.4674 9.28978 19.6016 11.1555L17.9125 12.8445M6.08848 11.1555L4.39933 12.8445C2.53356 14.7102 2.53356 17.7351 4.39933 19.6007C6.26511 21.4664 9.29013 21.4664 11.1559 19.6007L12.8451 17.9117M6.99497 16.5469L16.5502 6.99219"
            stroke="#84868D"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default About;
