import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login, getUserData } from './Auth.redux'
//两个reducers 每个reducers都有一个state
// 合并redecers
@connect(
    // state => state.auth// this.props.assgin(state.auth)
    state => { return state.auth }
    , {
        login, getUserData
    }
)
class Auth extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            solders: ['一二三四五', '山上有老虎', '老虎不吃人',]
        }
    }
    componentDidMount() {
        this.props.getUserData()
    }
    render() {
        return (
            <div>
                {this.props.isAuth ? <Redirect to='/dashboard' /> : null}
                <h2>我的名字是{this.props.user},年龄{this.props.age}</h2>
                <h2>你没有权限，需要登录才能看</h2>
                <button onClick={this.props.login}>登录</button>
                <h3>1111{this.props.name}</h3>
                <h3>是否登录：{this.props.isAuth ? '已登录' : '未登录'}</h3>
                <div>
                    {
                        this.state.solders.map((val) => {
                            return <div key={val}>{val}</div>
                        })
                    }
                </div>
            </div>
        )
    }
}
export default Auth;