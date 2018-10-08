import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import Layout from 'antd/lib/layout'
import Menu from 'antd/lib/menu'
import Icon from 'antd/lib/icon'
import 'antd/lib/icon/style/css'
import 'antd/lib/layout/style/css'
import 'antd/lib/menu/style/css'
import Discovery from './Discovery/Discovery'
import Movie from './Movie/Movie'
import About from './About'

const { Header, Content, Sider } = Layout;

const AppLayout = () => (

    <div>
        <Layout>
            <Header className="header">
                <h3 style={{ color: '#FFF', textDecoration: 'none' }}>
                    <Link to='/'>Movie Discovery</Link>
                </h3>
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
                        <Menu.Item key="1">
                            <Link to='/'><Icon type="eye" />Discovery</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to='/about'><Icon type='info' />About</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>

                    <Content style={{
                        background: '#fff',
                        padding: 24,
                        margin: '20px 10px 10px 10px',
                        minHeight: 280
                    }}>
                        <Switch >
                            <Route path='/' exact component={Discovery} />
                            <Route path='/about' component={About} />
                            <Route path='/movie/:id' component={Movie} />
                            <Route render={() => <div><h3>Page Not Found</h3></div>} />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
)

export default AppLayout