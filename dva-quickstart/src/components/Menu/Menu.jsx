import React from 'react';
import style from './Menu.css';
import { connect } from 'dva'
import { withRouter } from 'react-router-dom';
class Menu extends React.Component {
    constructor(props) {
        super(props);
    }
    states = {
        navs: [
            { name: "首页", path: "/home" },
            { name: "个人业务", path: "/my" },
            { name: "公司业务", path: "/company" },
            { name: "中小企业", path: "/firm" },
            { name: "电子银行", path: "/bank" },
            { name: "信用卡", path: "/bankcard" },
            { name: "投资者关系", path: "/investor" },
            { name: "村镇银行", path: "/town" },
        ],
    }
    togglePath = (path) => {
        console.log(path)
        if(path){
            this.props.history.push({
                pathname: path
            })
        }
        
    }

    render() {
        return (
            <ul className={style.menu}>
                {this.states.navs.map((item) => {
                    return (
                        <li key={item.path}>
                            <a href="javascript:;" onClick={this.togglePath.bind(this, item.path)}>{item.name}</a>
                        </li>
                    );
                })}     
            </ul>
        )
    }
}

Menu = withRouter(Menu);
export default connect((state) => {
    return state
})(Menu)
