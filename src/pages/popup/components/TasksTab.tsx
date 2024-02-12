import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Tasks from './Tasks';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TProject, deleteProject } from '../redux/features/rootTasksSlice';
import useStorage from '@root/src/shared/hooks/useStorage';
import exampleThemeStorage from '@root/src/shared/storages/exampleThemeStorage';
const TasksTab = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useStorage(exampleThemeStorage);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const projects = useSelector((state: any) => state.rootTasks);
  // console.log();
  const handleDeleteProject = (projectTitle: string) => {
    dispatch(deleteProject({ projectTitle }));
    console.log('clicked');
  };

  return (
    <div
      className={`pt-4  h-fit relative ${
        theme === 'light' ? 'bg-[#F8F8F8] text-[#1D1B22]' : 'text-white bg-[#3A3C44]'
      }`}>
      <button
        className="absolute w-fit h-fit z-10 top-5 left-5 text-white"
        onClick={() => {
          console.log('clicked');
          navigate('/');
        }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#84868D"
          className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </button>
      <Tabs variant="enclosed" className="" height={'-webkit-fit-content'}>
        <TabList borderBottom="none" height={'-webkit-fit-content'}>
          {projects.initialStateData.map((project: TProject, index: number) => {
            return (
              <Tab
                key={index}
                _selected={{ bg: theme === 'light' ? 'white' : '#1D1B22' }}
                className="first:ml-12 py-2 px-2 text-xs font-semibold">
                {project.projectTitle}
                {projects.initialStateData.length > 1 && (
                  <button className="pl-1" onClick={() => handleDeleteProject(project.projectTitle)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3.38245 12.6667L12.6175 3.33339M3.38247 3.33337L12.6176 12.6667"
                        stroke="#84868D"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                )}
              </Tab>
            );
          })}
        </TabList>
        <TabPanels
          padding={0}
          margin={0}
          backgroundColor={theme === 'light' ? 'white' : '#1D1B22'}
          width={'max-content'}
          height={'-webkit-fit-content'}>
          {projects.initialStateData.map((project: TProject, index: number) => {
            return (
              <TabPanel padding={0} key={index}>
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
