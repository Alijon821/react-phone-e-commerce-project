import React from 'react';
import {Row,Col} from 'antd';
import './tags.css'
import {ArrowLeftOutlined, EyeOutlined,ArrowRightOutlined} from "@ant-design/icons";
import Pasture1 from '../Images/blog-post-nav-thumb1.jpg';
import Man from '../Images/blog-post-nav-thumb2.jpg';
import Twitter from '../Icons/icons8-twitter-24.png';
import Facebook from '../Icons/icons8-facebook-48.png';
import {connect, useSelector} from "react-redux";
import {enLanguage} from "../../redux/Actions/enLanguage";
import {uzLanguage} from "../../redux/Actions/uzLanguage";





function Tags(props){
    const uzLang=useSelector(props=>props.uzLang)
    return(
        <div className="tags">
            <div className="teg-nav1">
                <Row>
                    <Col lg={24} md={24} sm={24} xs={24}>
                        <h4>{props.uzLang?'Teglar':'Tags'}</h4>
                        <Row>
                        <Col lg={10}  md={24} sm={24} xs={24}>
                            <Row>
                                <Col lg={8} md={24} sm={24} xs={24}>
                            <a href="#">{props.uzLang?'Fotogalereya':'Photography'}</a>
                                </Col>
                                 <Col lg={8} md={24} sm={24} xs={24}>
                                 <a href="#">{props.uzLang?'Illustratsiya':'Illustration'}</a>
                                 </Col>
                                <Col lg={8} md={24} sm={24} xs={24}><a href="#">{props.uzLang?"San'at":"Art"}</a>
                                </Col>

                            </Row>
                            <Row>
                                 <Col lg={10} md={24} sm={24} xs={24}>
                                 <img className="pasture" src={Pasture1} alt=""/>
                                 </Col>
                                 <Col lg={14} md={12} sm={24} xs={24}>
                                 <div className="blg-nav-text">
                                 <a className="nav-link" href="#"><ArrowLeftOutlined />{props.uzLang?'OLDINGI MAQOLA':'PREVIOUS POST'}</a>
                                 <a href="#">{props.uzLang?"Ba'zan tayfunlar keladi":"Sometimes Typhoons Come"}</a>
                                 <span><EyeOutlined />820</span>
                                 </div>
                                 </Col>

                            </Row>
                        </Col>
                            <Col lg={4}></Col>
                        <Col lg={8}  md={24} sm={24} xs={24}>

                               <Row>
                                   <Col lg={12}  md={12} sm={12} xs={12}></Col>
                                   <Col lg={2}  md={12} sm={12} xs={12}><img src={Twitter} alt=""/></Col>
                                   <Col lg={2}  md={12} sm={12} xs={12}><img className="facebook" src={Facebook} alt=""/></Col>
                                   <Col lg={2}  md={12} sm={12} xs={12}><span className="total-like">730</span></Col>
                               </Row>
                            <Row>
                                <Col lg={16}  md={24} sm={24} xs={24}>
                                    <a href="#" className="nav-link">{props.uzLang?"KEYINGI MAQOLA":"NEXT POST"}<ArrowRightOutlined /></a>
                                    <a href="#" className="bg">{props.uzLang?'Kemalarni Yoqing':'Burn The Ships'}</a>
                                    <span><EyeOutlined />404</span>
                                </Col>
                                <Col lg={8}  md={24} sm={24} xs={24}>
                                    <img src={Man} alt=""/>
                                </Col>
                            </Row>

                        </Col>
                        </Row>



                    </Col>

                </Row>

            </div>
        </div>
    )
}
const mapStateToProps = (state) => {

    return {
        uzLang: state.uzLang.uzLang,
    };
};
export default connect(mapStateToProps,{enLanguage,uzLanguage})(
    Tags
)