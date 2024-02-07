const DarkMode = () => {
  return (
    <div className="flex px-8 py-4 items-center">
      <div className="flex-shrink mr-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="icon/palatte">
            <circle id="Ellipse" cx="8" cy="10" r="2" stroke="#136DF5" strokeWidth="1.5" />
            <circle id="Ellipse_2" cx="17" cy="10" r="1" fill="#136DF5" />
            <circle id="Ellipse_3" cx="13.5" cy="7.5" r="1.5" fill="#136DF5" />
            <circle id="Ellipse_4" cx="16.5" cy="15.5" r="0.5" fill="#136DF5" />
            <path
              id="Ellipse_5"
              d="M15.1313 20.4403C18.5581 19.1685 21 15.8694 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.2051 4.03031 14.0826 5.22913 14.2052L10.1295 14.7064C11.6846 14.8655 12.7826 16.3042 12.5256 17.8462C12.2505 19.4971 13.5621 21.0227 15.1313 20.4403Z"
              stroke="#136DF5"
              strokeWidth="1.5"
            />
          </g>
        </svg>
      </div>
      <div className="flex-grow">
        <h3 className="font-semibold">Dark Mode</h3>
        <p className="text-[#84868D]">Switch Theme</p>
      </div>
      <div className="w-fit flex-shrink">
        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="32" viewBox="0 0 52 32" fill="none">
          <g clipPath="url(#clip0_98_2947)">
            <path
              d="M36 0H16C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32H36C44.8366 32 52 24.8366 52 16C52 7.16344 44.8366 0 36 0Z"
              fill="#D9D9D9"
            />
            <path
              d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_98_2947">
              <rect width="52" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default DarkMode;
