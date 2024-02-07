import React from 'react';
import { createRoot } from 'react-dom/client';
import '@pages/popup/index.css';
// import Popup from '@pages/popup/Popup';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';
import { attachTwindStyle } from '@root/src/shared/style/twind';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
refreshOnUpdate('pages/popup');
// import { PersistGate } from 'redux-persist/integration/react';
import { HashRouter as Router } from 'react-router-dom';
import Routers from './routes/Routers';
function init() {
  const appContainer = document.querySelector('#app-container');
  if (!appContainer) {
    throw new Error('Can not find #app-container');
  }
  attachTwindStyle(appContainer, document);
  const root = createRoot(appContainer);
  const theme = extendTheme({
    colors: {
      accent: {
        100: '#136DF5',
      },
    },
  });

  root.render(
    <Router>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <ChakraProvider theme={theme}>
          <Routers />
          {/* <Popup /> */}
        </ChakraProvider>
        {/* </PersistGate> */}
      </Provider>
      ,
    </Router>,
  );
}

init();
