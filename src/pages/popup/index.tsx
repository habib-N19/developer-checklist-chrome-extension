import { createRoot } from 'react-dom/client';
import '@pages/popup/index.css';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';
import { attachTwindStyle } from '@root/src/shared/style/twind';
import { Provider } from 'react-redux';
import store from './redux/store';
// import { ChakraProvider, extendTheme } from '@chakra-ui/react';
refreshOnUpdate('pages/popup');
import { HashRouter as Router } from 'react-router-dom';
import Routers from './routes/Routers';
import { ChakraProvider } from '@chakra-ui/react';
function init() {
  const appContainer = document.querySelector('#app-container');
  if (!appContainer) {
    throw new Error('Can not find #app-container');
  }
  attachTwindStyle(appContainer, document);
  const root = createRoot(appContainer);
  root.render(
    <Router>
      <Provider store={store}>
        <ChakraProvider>
          <Routers />
        </ChakraProvider>
      </Provider>
    </Router>,
  );
}

init();
