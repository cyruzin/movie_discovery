import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import ReduxThunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'

import reducers from './store/reducers'

import AppLayout from './components/AppLayout'

import './App.css'


class App extends Component {
  render () {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const store = createStore(
      reducers,
      {},
      composeEnhancers(applyMiddleware(ReduxThunk))
    )

    return (
      <Provider store={store}>
        <BrowserRouter>
          <AppLayout />
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App