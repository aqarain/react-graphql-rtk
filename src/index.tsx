import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { GlobalStyles } from './styles/GlobalStyles';
import { ENDPOINT } from './utils/constants';
import { Provider } from 'react-redux';
import { store } from './store/store';

const client = new ApolloClient({
  uri: ENDPOINT,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
