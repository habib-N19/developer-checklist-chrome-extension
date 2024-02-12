import useStorage from '@root/src/shared/hooks/useStorage';
import exampleThemeStorage from '@root/src/shared/storages/exampleThemeStorage';

const LeftArrow = () => {
  const theme = useStorage(exampleThemeStorage);
  return (
    <div className={`p-1 rounded-lg group ${theme === 'light' ? 'bg-[#F8F8F8]' : 'bg-[#3A3C44]'}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 18L3.70711 12.7071C3.31658 12.3166 3.31658 11.6834 3.70711 11.2929L9 6M3.41406 12H21.4141"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-[#84868D] group-hover:stroke-[#136DF5] transition-all"
        />
      </svg>
    </div>
  );
};
export default LeftArrow;
