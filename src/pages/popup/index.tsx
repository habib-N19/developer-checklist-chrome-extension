import React from 'react';
import { createRoot } from 'react-dom/client';
import '@pages/popup/index.css';
import Popup from '@pages/popup/Popup';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';
import { attachTwindStyle } from '@root/src/shared/style/twind';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ChakraProvider } from '@chakra-ui/react';
refreshOnUpdate('pages/popup');
// import { PersistGate } from 'redux-persist/integration/react';

function init() {
  const appContainer = document.querySelector('#app-container');
  if (!appContainer) {
    throw new Error('Can not find #app-container');
  }
  attachTwindStyle(appContainer, document);
  const root = createRoot(appContainer);
  root.render(
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <ChakraProvider>
        <Popup />
      </ChakraProvider>
      {/* </PersistGate> */}
    </Provider>,
  );
}

init();
