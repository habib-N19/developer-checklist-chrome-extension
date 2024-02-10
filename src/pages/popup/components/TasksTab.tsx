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
    <div className="h-fit relative px-4">
      <button className="absolute top-1 left-2 text-white" onClick={() => navigate('/')}>
        <PlusIcon />
      </button>
      <Tabs variant="enclosed" className="ml-8" height={'-webkit-fit-content'}>
        <TabList mb="1em" height={'-webkit-fit-content'}>
          {projects.initialStateData.map((project: TProject, index: number) => {
            return (
              <Tab key={index} className="text-xs">
                {project.projectTitle}
              </Tab>
            );
          })}
        </TabList>
        <TabPanels width={'max-content'} height={'-webkit-fit-content'}>
          {projects.initialStateData.map((project: TProject, index: number) => {
            return (
              <TabPanel key={index}>
                <Tasks project={project} />
              </TabPanel>
            );
          })}
          {/* <TabPanel height={'-webkit-fit-content'}>
            <Tasks />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        */}
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default TasksTab;
