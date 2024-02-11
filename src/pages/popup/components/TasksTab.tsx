import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Tasks from './Tasks';
import { useNavigate } from 'react-router-dom';
import PlusIcon from '../ui/PlusIcon';
import { useSelector } from 'react-redux';
import { TProject } from '../redux/features/rootTasksSlice';
const TasksTab = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const projects = useSelector((state: any) => state.rootTasks);
  console.log('redux tasks pre toggle initial state', projects);
  return (
    <div className="pt-4 bg-[#F8F8F8] h-fit relative">
      <button className="absolute top-5 left-5 text-white" onClick={() => navigate('/')}>
        <PlusIcon />
      </button>
      <Tabs variant="enclosed" className="" height={'-webkit-fit-content'}>
        <TabList mb="" height={'-webkit-fit-content'}>
          {projects.initialStateData.map((project: TProject, index: number) => {
            return (
              <Tab key={index} _selected={{ bg: 'white' }} className="ml-12 text-xs font-semibold">
                {project.projectTitle}
              </Tab>
            );
          })}
        </TabList>
        <TabPanels backgroundColor="white" width={'max-content'} height={'-webkit-fit-content'}>
          {projects.initialStateData.map((project: TProject, index: number) => {
            return (
              <TabPanel key={index}>
                <Tasks project={project} />
              </TabPanel>
            );
          })}
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default TasksTab;
