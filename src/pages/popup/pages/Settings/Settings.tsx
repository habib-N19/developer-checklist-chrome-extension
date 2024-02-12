import LeftArrow from '../../ui/LeftArrow';
import { useNavigate } from 'react-router-dom';
import DarkMode from '../../components/Settings/DarkMode';
import RestoreDefault from '../../components/Settings/RestoreDefault';
import Alert from '../../components/Settings/Alert';
import About from '../../components/Settings/About';
import useStorage from '@root/src/shared/hooks/useStorage';
import exampleThemeStorage from '@root/src/shared/storages/exampleThemeStorage';
const Settings = () => {
  const navigate = useNavigate();
  const theme = useStorage(exampleThemeStorage);

  return (
    <div className={`h-fit ${theme === 'light' ? 'bg-[#F8F8F8] text-[##1D1B22]' : 'bg-[#1D1B22] text-white'}`}>
      <button
        className="px-4 py-2 flex group items-center gap-2 font-semibold"
        title="back to tasks page"
        onClick={() => navigate('/tasks')}>
        <LeftArrow />
        <p className="font-semibold group-hover:text-[#136DF5] group-hover:transition-all">Back</p>
      </button>
      {/* settings */}
      <div>
        <DarkMode />
        <RestoreDefault />
        <Alert />
        <About />
      </div>
      <div className={`border-t  pt-6 pb-4 mt-4 ${theme === 'light' ? 'border-t-[#ECEEFC]' : 'border-t-[#3A3C44]'}`}>
        <p className="text-center text-[#84868D]">V 1.0</p>
      </div>
    </div>
  );
};

export default Settings;
