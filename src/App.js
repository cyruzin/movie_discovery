import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import { Layout } from 'antd';
import Discovery from './components/Discovery'
import './App.css'

class App extends Component {
  render() {

    const store = createStore(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      applyMiddleware(ReduxThunk)
    )

    const { Header, Content } = Layout

    return (
      <Provider store={store}>
        <Layout>
          <Header style={{ backgroundColor: '#00A0E9', color: '#FFF' }}>
            <h1>Movie Discovery</h1>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Discovery />
          </Content>
        </Layout>
      </Provider>
    )
  }
}

export default App
