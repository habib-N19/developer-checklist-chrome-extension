import { useLocation } from 'react-router-dom';
import TasksTab from '../../components/TasksTab';

const TasksPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  const index = parseInt(id);
  return (
    <div className="">
      <TasksTab id={index}></TasksTab>
    </div>
  );
};

export default TasksPage;
