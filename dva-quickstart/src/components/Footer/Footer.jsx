import React from "react"
import styles from './Footer.css';
class Footer extends React.Component {
    constructor(props) {
        super(props),
            this.state = {}
    }
    render() {
        return (
            <div className={styles.copy_main}>
                <a className={styles.bai_a} href="">网站地图</a> | <a className={styles.bai_a} href="">联系我们</a> | <a className={styles.bai_a} href="">加入收藏夹</a>
                <br />上海银行版权所有   沪ICP备14020744    未经上海银行许可，任何组织或个人不得链接上海银行网站
			    <p>
                    <a className={styles.copy_img} href=""><img src={require('../../assets/police.png')} /></a>
                    <a className={styles.copy_img} href=""><img src={require("../../assets/zx110.png")} /></a>
                    <img className={styles.copy_img} src={require("../../assets/icp01.png")} />                   
                    {/* <!--可信网站图片LOGO安装开始--> */}
                    <script src="http://kxlogo.knet.cn/seallogo.dll?sn=e17041031010767311luyk000000&amp;size=4"></script><a href="" ></a>
                    {/* <!--可信网站图片LOGO安装结束--> */}
                </p>
                <div className={styles.footer_div}>
                    <a className={styles.footer_a} href=""><img className={styles.fl} src={require("../../assets/Webpolice.png")} />
                        <p className={styles.copy_p}>沪公网安备 31011502003675号</p>
                    </a>
                </div>
                <p></p>
            </div>
        )
    }
}
export default Footer