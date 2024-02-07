// import Return from '../../ui/Return';
import { useNavigate } from 'react-router-dom';
import Logo from '../../ui/Logo';
import Settings from '../../ui/Settings';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="px-4 border-b border-b-[#ECEEFC] py-3 flex justify-between w-full">
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
