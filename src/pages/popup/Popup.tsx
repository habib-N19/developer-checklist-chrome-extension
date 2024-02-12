import '@pages/popup/Popup.css';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import OnBoarding from './pages/OnBoarding/OnBoarding';
import useStorage from '@root/src/shared/hooks/useStorage';
import exampleThemeStorage from '@root/src/shared/storages/exampleThemeStorage';

const Popup = () => {
  const theme = useStorage(exampleThemeStorage);

  return (
    <div
      className={`${theme === 'light' ? 'bg-white text-[#1d1b22]' : 'bg-[#1d1b22] text-white'}`}
      // style={{
      //   backgroundColor: theme === 'light' ? '#fff' : '#000',
      // }}
    >
      <OnBoarding />
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
