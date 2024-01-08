import React from 'react';
import {Provider} from 'react-redux';

import RootApp from './index';
import {store} from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <RootApp />
    </Provider>
  );
};

export default App;
