/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Main from './App/Main';
import { store, persistor } from './App/store/index';

class App extends React.Component {

  render(){
    return(
      <Provider store = {store}>
        <PersistGate loading = {null} persistor = {persistor}>
          <Main/>
        </PersistGate>
      </Provider>
    );
  }
}
export default App;
