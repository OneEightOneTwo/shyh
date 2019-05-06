import React from "react"
import style from './Header.css';
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logo: require('../../assets/logo.gif'),
            src: require('../../assets/search_01.gif')
        }
    }
    ToIndex = () => {
        // <Route path="/index" exact component={IndexPage} />
        console.log(this);
    }
    // data() {
    //     url: '../../asssts/logo.gif';
    // }
    //     let {
    //     url
    // } = this.Header
    render() {
        return (
            <div className={style.header}>
                <div className={style.container}>
                    <div className={style.logo}><img src={this.state.logo} alt="" /></div>
                    <div className={style.submenu}>
                        客服热线：95594 |
                        <a href="javascript:;">上海银行概况 |</a>
                        <a href="javascript:;">客户服务| </a>
                        <a href="javascript:;">人才招聘 |</a>
                        <a href="javascript:;">在线学习 |  </a>
                        <a href="javascript:;">村镇银行 |</a>
                        <a href="javascript:;">繁体中文</a>
                        <a href="javascript:;"> |English</a>
                    </div>
                    <div className={style.search}>
                        <input className={style.input01} type="text" placeholder="请输入关键字" />
                        <input className={style.fr} type="image" src={this.state.src} />
                    </div>
                </div>
            </div>
        )
    }
}


export default Header


