import useStorage from '@root/src/shared/hooks/useStorage';
import exampleThemeStorage from '@root/src/shared/storages/exampleThemeStorage';

const Download = () => {
  const theme = useStorage(exampleThemeStorage);
  return (
    <button className={`p-1 rounded-lg group ${theme === 'light' ? 'bg-[#F8F8F8]' : 'bg-[#3A3C44]'}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M21 16V16.4C21 16.9574 21 17.2361 20.9631 17.4693C20.7598 18.753 19.753 19.7598 18.4693 19.9631C18.2361 20 17.9574 20 17.4 20H6.6C6.0426 20 5.76389 20 5.5307 19.9631C4.24702 19.7598 3.24025 18.753 3.03693 17.4693C3 17.2361 3 16.9574 3 16.4V16"
          stroke="#84868D"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 12.0759L12 16M12 16L7 12.0759M12 16V4"
          stroke="#84868D"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default Download;
