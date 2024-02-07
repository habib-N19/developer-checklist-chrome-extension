import LeftArrow from '../../ui/LeftArrow';
import { useNavigate } from 'react-router-dom';
import DarkMode from '../../components/Settings/DarkMode';
import RestoreDefault from '../../components/Settings/RestoreDefault';
import Alert from '../../components/Settings/Alert';
import About from '../../components/Settings/About';
const Settings = () => {
  const navigate = useNavigate();
  return (
    <div>
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
    </div>
  );
};

export default Settings;
