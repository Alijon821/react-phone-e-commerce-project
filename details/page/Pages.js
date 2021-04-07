import React from "react";
import {Row,Col} from 'antd';
import './page.css';
import Travel from '../Images/blog-post-details-img2.jpg'
import Work from '../Images/blog-post-details-img3.jpg'
import Hostel from '../Images/blog-post-img3.jpg'
function Pages(){
    return(
        <div className="pages">
            <Row>
                <Col lg={24} md={24} sm={24} xs={24}>
                    <div className="allImg">
                    <Row >

                        <Col lg={12} md={24} sm={24} xs={24}>

                                <img src={Travel} alt=""/>
                        </Col>
                            <Col lg={12} md={24} sm={24} xs={24}>
                                <img src={Work} alt=""/>
                            </Col>

                    </Row>
                        <Row justify="center">
                            <Col lg={22} md={24} sm={24} xs={24}>
                                <img src={Hostel} alt=""/>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default Pages;
