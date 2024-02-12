// import Return from '../../ui/Return';
import { useNavigate } from 'react-router-dom';
import Logo from '../../ui/Logo';
import Settings from '../../ui/Settings';
import useStorage from '@root/src/shared/hooks/useStorage';
import exampleThemeStorage from '@root/src/shared/storages/exampleThemeStorage';

const Header = () => {
  const navigate = useNavigate();
  const theme = useStorage(exampleThemeStorage);
  return (
    <div
      className={`px-4  py-3 flex justify-between w-full ${
        theme === 'light'
          ? 'bg-white text-black border-b  border-b-[#ECEEFC]'
          : 'bg-[#1D1B22] text-white border-b border-b-[#3A3C44]'
      }`}>
      <div className="flex first:gap-2 last:gap-0.5  items-center">
        {/* <Return /> */}
        <a href="https://www.ideapeel.com/" target="_blank" title="ideapeel" rel="noreferrer">
          <Logo />
        </a>
        <h2 className="text-sm font-semibold ">Webflow Checklist</h2>
      </div>
      <button onClick={() => navigate('/settings')}>
        <Settings />
      </button>
    </div>
  );
};

export default Header;
