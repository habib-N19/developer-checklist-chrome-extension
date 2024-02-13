import useStorage from '@root/src/shared/hooks/useStorage';
import exampleThemeStorage from '@root/src/shared/storages/exampleThemeStorage';
const Icon = svg => {
  const theme = useStorage(exampleThemeStorage);
  return <div className={`p-1 rounded-lg group ${theme === 'light' ? 'bg-[#F8F8F8]' : 'bg-[#3A3C44]'}`}>{svg}</div>;
};

export default Icon;
