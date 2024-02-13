import useStorage from '@root/src/shared/hooks/useStorage';
import exampleThemeStorage from '@root/src/shared/storages/exampleThemeStorage';

const Delete = () => {
  const theme = useStorage(exampleThemeStorage);
  return (
    <div className={`p-1 rounded-lg group ${theme === 'light' ? 'bg-[#F8F8F8]' : 'bg-[#3A3C44]'}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 9L6.17801 16.068C6.42858 17.5715 6.55387 18.3232 6.87702 18.9156C7.35311 19.7883 8.13714 20.4525 9.07628 20.7786C9.71372 21 10.4758 21 12 21V21C13.5242 21 14.2863 21 14.9237 20.7786C15.8629 20.4525 16.6469 19.7883 17.123 18.9156C17.4461 18.3232 17.5714 17.5715 17.822 16.068L19 9"
          className="stroke-[#84868D] group-hover:stroke-[#136DF5] transition-all"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M5 6H8.5M8.5 6V5C8.5 3.89543 9.39543 3 10.5 3H13.5C14.6046 3 15.5 3.89543 15.5 5V6M8.5 6H15.5M15.5 6H19"
          className="stroke-[#84868D] group-hover:stroke-[#136DF5] transition-all"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default Delete;
