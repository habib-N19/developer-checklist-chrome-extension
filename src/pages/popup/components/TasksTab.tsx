import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Tasks from './Tasks';
const TasksTab = () => {
  return (
    <div className="h-fit pt-6 px-4">
      <Tabs isFitted variant="enclosed" height={'-webkit-fit-content'}>
        <TabList mb="1em" height={'-webkit-fit-content'}>
          <Tab>Webflow Developer Checklist</Tab>
          <Tab isDisabled title="coming soon">
            Add New +{' '}
          </Tab>
        </TabList>
        <TabPanels height={'-webkit-fit-content'}>
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
