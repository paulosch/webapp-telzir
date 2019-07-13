import './config/reactotron';

import React from 'react';
import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';

import store from './store';

import Main from './pages/Main';
import Footer from './components/Footer';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Main />
      <Footer />
    </Provider>
  );
}

export default App;
