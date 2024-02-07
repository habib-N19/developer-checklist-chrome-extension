import { Route, Routes } from 'react-router-dom';
import Popup from '../Popup';
import TasksPage from '../pages/TasksPage.tsx/TasksPage';
import Main from '../Layout/Main';
import Settings from '../pages/Settings/Settings';

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<Popup />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Routers;
