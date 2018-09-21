import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import AppLayout from './components/AppLayout'
import DiscoveryReducer from './components/Discovery/reducers/DiscoveryReducer'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

const reducers = combineReducers({
  discovery: DiscoveryReducer
})

class App extends Component {
  render() {

    const store = createStore(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      applyMiddleware(ReduxThunk)
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
