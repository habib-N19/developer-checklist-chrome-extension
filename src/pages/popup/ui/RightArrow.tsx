import useStorage from '@root/src/shared/hooks/useStorage';
import exampleThemeStorage from '@root/src/shared/storages/exampleThemeStorage';

const RightArrow = () => {
  const theme = useStorage(exampleThemeStorage);
  return (
    <div className={`p-1 rounded-lg group ${theme === 'light' ? 'bg-[#F8F8F8]' : 'bg-[#3A3C44]'}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M15 6L20.2929 11.2929C20.6834 11.6834 20.6834 12.3166 20.2929 12.7071L15 18M20.5859 12H2.58594"
          className="stroke-[#84868D] group-hover:stroke-[#136DF5] transition-all"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default RightArrow;
