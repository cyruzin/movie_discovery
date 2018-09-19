import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import { Layout, Menu, Icon } from 'antd';
import Discovery from './components/Discovery'
import './App.css'

class App extends Component {
  render() {

    const store = createStore(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      applyMiddleware(ReduxThunk)
    )

    const { SubMenu } = Menu;
    const { Header, Content, Sider } = Layout;


    return (
      <Provider store={store}>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">Movie Discovery</Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Sider
              breakpoint="lg"
              collapsedWidth="0"
              width={200}
              style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <SubMenu key="sub1" title={<span><Icon type="eye" />Discovery</span>}>
                  <Menu.Item key="1">Movies</Menu.Item>
                  <Menu.Item key="2">About</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Content
                style={{ background: '#fff', padding: 24, margin: '40px 10px 10px 10px', minHeight: 280 }}>
                <Discovery />
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Provider>
    )
  }
}

export default App
