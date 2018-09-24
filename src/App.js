import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import AppLayout from './components/AppLayout'
import reducers from './reducers'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

class App extends Component {
  render() {

    const devTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    const store = createStore(
      reducers,
      devTool,
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