import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Tasks from './Tasks';
import { useNavigate } from 'react-router-dom';
import PlusIcon from '../ui/PlusIcon';
const TasksTab = () => {
  const navigate = useNavigate();
  return (
    <div className="h-fit relative px-4">
      <button className="absolute top-4" onClick={() => navigate('/')}>
        <PlusIcon />
      </button>
      <Tabs isFitted variant="enclosed" className="" height={'-webkit-fit-content'}>
        <TabList mb="1em" height={'-webkit-fit-content'}>
          <Tab className="text-xs">Webflow Developer</Tab>
          <Tab isDisabled title="coming soon">
            Add New +
          </Tab>
        </TabList>
        <TabPanels width={'max-content'} height={'-webkit-fit-content'}>
          <TabPanel height={'-webkit-fit-content'}>
            <Tasks />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default TasksTab;
