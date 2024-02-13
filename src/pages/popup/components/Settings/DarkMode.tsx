import useStorage from '@root/src/shared/hooks/useStorage';
import { motion, AnimatePresence } from 'framer-motion';
import './DarkMode.css';
import exampleThemeStorage from '@root/src/shared/storages/exampleThemeStorage';

const DarkMode = () => {
  const theme = useStorage(exampleThemeStorage);
  console.log(theme);

  return (
    <div className="flex px-8 py-4 items-center">
      <div className="flex-shrink mr-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="icon/palatte">
            <circle id="Ellipse" cx="8" cy="10" r="2" stroke="#136DF5" strokeWidth="1.5" />
            <circle id="Ellipse_2" cx="17" cy="10" r="1" fill="#136DF5" />
            <circle id="Ellipse_3" cx="13.5" cy="7.5" r="1.5" fill="#136DF5" />
            <circle id="Ellipse_4" cx="16.5" cy="15.5" r="0.5" fill="#136DF5" />
            <path
              id="Ellipse_5"
              d="M15.1313 20.4403C18.5581 19.1685 21 15.8694 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.2051 4.03031 14.0826 5.22913 14.2052L10.1295 14.7064C11.6846 14.8655 12.7826 16.3042 12.5256 17.8462C12.2505 19.4971 13.5621 21.0227 15.1313 20.4403Z"
              stroke="#136DF5"
              strokeWidth="1.5"
            />
          </g>
        </svg>
      </div>
      <div className="flex-grow">
        <h3 className="font-semibold">Dark Mode</h3>
        <p className="text-[#84868D]">Switch Theme</p>
      </div>
      <button
        className={`container_toggle ${theme === 'light' ? '' : 'container_dark'}`}
        // data-darkmode={isOn}
        onClick={exampleThemeStorage.toggle}
        style={{ justifyContent: theme === 'dark' ? 'flex-end' : 'flex-start' }}>
        <motion.div layout className="handle">
          <AnimatePresence exitBeforeEnter initial={false}>
            <motion.i
              className={`icon far fa-${theme === 'light' ? 'moon' : 'sun'}`}
              key={theme === 'light' ? 'moon' : 'sun'}
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          </AnimatePresence>
        </motion.div>
      </button>
    </div>
  );
};

export default DarkMode;
