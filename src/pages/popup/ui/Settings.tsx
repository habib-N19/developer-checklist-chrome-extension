import useStorage from '@root/src/shared/hooks/useStorage';
import exampleThemeStorage from '@root/src/shared/storages/exampleThemeStorage';

const Settings = () => {
  const theme = useStorage(exampleThemeStorage);
  return (
    <div className={`p-1 rounded-lg group ${theme === 'light' ? 'bg-[#F8F8F8]' : 'bg-[#3A3C44]'}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M9.3 4.55885C10.4682 3.88441 11.0522 3.54719 11.6864 3.48054C11.8949 3.45862 12.1051 3.45862 12.3136 3.48054C12.9478 3.54719 13.5318 3.88441 14.7 4.55885L17.0942 5.94115C18.2624 6.61559 18.8465 6.95281 19.2213 7.4687C19.3445 7.63829 19.4496 7.82033 19.5349 8.01184C19.7942 8.59438 19.7942 9.26882 19.7942 10.6177V13.3823C19.7942 14.7312 19.7942 15.4056 19.5349 15.9882C19.4496 16.1797 19.3445 16.3617 19.2213 16.5313C18.8465 17.0472 18.2624 17.3844 17.0942 18.0588L14.7 19.4412C13.5318 20.1156 12.9478 20.4528 12.3136 20.5195C12.1051 20.5414 11.8949 20.5414 11.6864 20.5195C11.0522 20.4528 10.4682 20.1156 9.3 19.4412L6.90577 18.0588C5.73761 17.3844 5.15353 17.0472 4.77872 16.5313C4.6555 16.3617 4.5504 16.1797 4.46514 15.9882C4.20577 15.4056 4.20577 14.7312 4.20577 13.3823V10.6177C4.20577 9.26882 4.20577 8.59438 4.46514 8.01184C4.5504 7.82033 4.6555 7.63829 4.77872 7.4687C5.15353 6.95281 5.73761 6.61559 6.90577 5.94115L9.3 4.55885Z"
          className="stroke-[#84868D] group-hover:stroke-[#136DF5] transition-all"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="12"
          r="3"
          className="stroke-[#84868D] group-hover:stroke-[#136DF5] transition-all"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
};

export default Settings;
