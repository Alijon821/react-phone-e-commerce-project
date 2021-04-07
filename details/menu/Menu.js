import React from 'react';
import 'antd/dist/antd.css';
import {Row, Col} from 'antd';
import './menu.css';
import ImgSearch from '../Icons/google-web-search-icon-18-fffff7-16.png'
import {SearchOutlined} from '@ant-design/icons';

function Menu(){
    return(
        <Row>  <Col lg={24} md={24} xs={24} sm={24}>
        <div className="menu-area">
            <div className="-container">
                <Row>
                    <Col lg={20} md={18} xs={18} sm={18}>
                        <ul>
                            <li>HOMEPAGE</li>
                            <li>Fashion</li>
                            <li>Sport</li>
                            <li>travel</li>
                            <li>About us</li>
                            <li>Contact</li>
                            <li>Pages</li>
                        </ul>
                    </Col>
                    <Col lg={4} md={1} xs={1} sm={1} >
                        <img src={ImgSearch} alt=""/>
                    </Col>
                </Row>
            </div>

        </div>
        </Col>
        </Row>
    )
}
export default Menu