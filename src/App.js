import React, { Component } from 'react';
import { Provider } from 'react-redux'
import configureStore from './store/store'
import MainWebFrame from './components/MainWebFrame/MainWebFrame';
import createHistory from 'history/createBrowserHistory'
export const history = createHistory();


const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store = {store}>  
        <MainWebFrame />
      </Provider>
    );
  }
}

export default App;
