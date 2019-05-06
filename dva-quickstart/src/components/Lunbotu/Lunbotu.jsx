import React from "react"
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import "./Lunbotu.css"
class Lunbotu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imgurl: [
                { page: "1", url: require("../../assets/lbt1.jpg") },
                { page: "2", url: require("../../assets/lbt2.jpg") },
                { page: "3", url: require("../../assets/lbt3.jpg") },
                { page: "4", url: require("../../assets/lbt4.jpg") }
            ]
        }
    }
    render() {
        return (
            <Carousel effect="fade" autoplay="true">
                {this.state.imgurl.map((item) => {
                    return (<div key={item.page}><h3><img src={item.url} /></h3></div>)
                })}
            </Carousel>
        )
    }


}
export default Lunbotu