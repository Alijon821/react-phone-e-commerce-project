import React from 'react';
import 'antd/dist/antd.css';
import {Row, Col} from 'antd';
import './header.css';
import ImgOne from '../Images/logo.png';
import ImgTwo from '../Images/header-top-banner2.jpg';
import {
    ClockCircleOutlined,
    AntCloudOutlined,
    FacebookOutlined,
    TwitterOutlined,
    GooglePlusOutlined,
    LinkedinOutlined,
    YoutubeOutlined,


} from '@ant-design/icons';


function Header() {
    return (
        <>
            <div className="header">
                <div className="headerOne">

                <Row>
                    <Col span={24}>

                        <div className="icon">
                            <Col lg={12} md={24} sm={24} xs={24}>
                                <ClockCircleOutlined/>
                                <span>Monday, October 5, 2017</span>
                                <AntCloudOutlined/>
                                <span>61of</span>
                            </Col>
                        </div>
                        <div className="iconOne">
                            <Col lg={12} md={18} sm={24} xs={24}>
                                <FacebookOutlined/>
                                <TwitterOutlined/>
                                <GooglePlusOutlined/>
                                <LinkedinOutlined/>
                                <YoutubeOutlined />


                            </Col>
                        </div>
                    </Col>
                </Row>
                </div>
                <div className="images">
                   <Row>
                       <Col lg={8} md={24} sm={24} xs={24} ><img src={ImgOne} alt=""/></Col>
                       <Col lg={16} md={24} sm={24} xs={24} ><img className="ImgTwo" src={ImgTwo} alt=""/></Col>
                   </Row>

            </div>
            </div>

        </>
    )
}

export default Header;
