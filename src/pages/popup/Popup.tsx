import '@pages/popup/Popup.css';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import Logo from './ui/Logo';
import TasksTab from './components/TasksTab';
import Return from './ui/Return';
import Settings from './ui/Settings';

const Popup = () => {
  // const theme = useStorage(exampleThemeStorage);

  return (
    <div className="">
      <div className="px-4 border-b border-b-[#ECEEFC] py-3 flex justify-between w-full">
        <div className="flex first:gap-2 last:gap-0.5  items-center">
          <Return />
          <a href="https://www.ideapeel.com/" target="_blank" title="ideapeel" rel="noreferrer">
            <Logo />
          </a>
          <h2 className="text-sm font-semibold ">Webflow Checklist</h2>
        </div>
        <Settings />
      </div>

      <div className="px-4 pt-4">
        <TasksTab></TasksTab>
      </div>
    </div>
  );
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occur </div>);
{
  /* <div
className="App"
style={{
  backgroundColor: theme === 'light' ? '#fff' : '#000',
}}>
<header className="App-header" style={{ color: theme === 'light' ? '#000' : '#fff' }}>
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/pages/popup/Popup.tsx</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: theme === 'light' && '#0281dc', marginBottom: '10px' }}>
    Learn React!
  </a>
  <button
    style={{
      backgroundColor: theme === 'light' ? '#fff' : '#000',
      color: theme === 'light' ? '#000' : '#fff',
    }}
    onClick={exampleThemeStorage.toggle}>
    Toggle theme
  </button>
</header>
</div> */
}
