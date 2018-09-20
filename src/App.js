import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import './App.css'
import AppLayout from './layout/AppLayout'
import DiscoveryReducer from './modules/discovery/reducers/DiscoveryReducer'

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
        <AppLayout />
      </Provider>
    )
  }
}

export default App
