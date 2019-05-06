import React from 'react';
import { connect } from 'dva';
import style from './Company.css';
import Header from "../../components/Header/Header.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import Menu from "../../components/Menu/Menu.jsx"
import Lunbotu from "../../components/Lunbotu/Lunbotu.jsx"
function Company() {
  return (
    <div className={style.war}>
                    {/* 头部 、、、、、、、、、、、、、、、、、*/}
        <div className={style.headers}>
          <Header/>
          <Menu/>
        </div>
                    {/* 内容、、、、、、、、、、、、、、、、、、 */}
        <div className={style.container}>
                     {/* 右侧浮动内容 */}
          <div className={`${style.fr} ${style.w706}`}>
                    {/* 轮播图 */}
            <div className={style.rolling}><Lunbotu/></div>
                    {/* 四个卡片 */}
            <div className={`${style.fl} ${style.w348}`}>卡片1，高度已经写死，需要根据内容适配来改高度</div>
            <div className={`${style.fr} ${style.w348}`}>卡片2，高度已经写死，需要根据内容适配来改高度</div>
            <div className={`${style.fl} ${style.w348}`}>卡片3，高度已经写死，需要根据内容适配来改高度</div>
            <div className={`${style.fr} ${style.w348}`}>卡片4，高度已经写死，需要根据内容适配来改高度</div>
                    {/* 选项卡 */}
            <div className={`${style.fr} ${style.t_bar}`}>选项卡组件</div>
          </div>
                    {/* 左侧浮动内容 */}
          <div className={`${style.fl} ${style.w_263}`}>
                    {/* 个人网上银行小卡片 */}
            <div className={style.gr_car}>个人网上银行小卡片</div>
                    {/* 手风琴 */}
            <div className={style.accordion}>手风琴组件</div>
                    {/* 图片 */}
            <div className={style.w_263}>图片</div>
          </div>
        </div>
                    {/* 底部 //////////////*/}
        <div className={`${style.footers} ${style.clear}`}>
                <Footer/>
        </div>
    </div>
  );
}

Company.propTypes = {
};

export default connect()(Company);
