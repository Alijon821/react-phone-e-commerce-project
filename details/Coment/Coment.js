import React from "react";
import {Row, Col} from 'antd';
import './coment.css';
import AuthOne from '../Images/comnt-auth-img.jpg';
import AuthTwo from '../Images/comnt-auth-img2.jpg';
import AuthThree from '../Images/comnt-auth-img3.jpg';
import ArrowRightOutlined  from '@ant-design/icons';
import {connect, useSelector} from "react-redux";
import {enLanguage} from "../../redux/Actions/enLanguage";
import {uzLanguage} from "../../redux/Actions/uzLanguage";


function Coment(props) {
    const uzLang=useSelector(props=>props.uzLang)
    return (
        <div className="coment">
            <h3><span>3</span>{props.uzLang?'IZOHLAR':'COMMENTS'}</h3>

            <Row>
                <Col lg={24} md={24} sm={24} xs={24}>
                    <div className="comment-status-text">
                        <ul>
                            <li>
                                <Row>
                                    <Col lg={24} md={24} xs={24} sm={24}>
                                        <Row>
                                            <Col lg={3} md={24} xs={24} sm={24}><img className="" src={AuthOne} alt=""/></Col>
                                            <Col lg={21} md={24} xs={24} sm={24}><h4 className="author">JOHAN
                                                SMITH <span>{props.uzLang?'2-iyun 2016-yil':'June 2, 2016'}</span></h4>
                                                <p className="coment-content">Morbi gravida, sem non egestas ullamcorper, tellus ante laoreet nisl,
                                                    id iaculis urna eros vel turpis curabitur tristique mauris eget
                                                    lacus rutrum lobortis. Ut id elem<ArrowRightOutlined /></p>
                                            </Col>
                                        </Row>
                                        <div className="children">
                                        <ul>

                                            <li>
                                                <Row>
                                                    <Col lg={3} md={24} xs={24} sm={24}><img className="" src={AuthTwo} alt=""/></Col>
                                                    <Col lg={21} md={24} xs={24} sm={24}><h4 className="author">JOHAN
                                                        SMITH <span>{props.uzLang?'2-iyun 2016-yil':'June 2, 2016'}</span></h4>
                                                        <p className="coment-content">Morbi gravida, sem non egestas ullamcorper, tellus ante laoreet nisl,
                                                            id iaculis urna eros vel turpis curabitur tristique mauris eget
                                                            lacus rutrum lobortis. Ut id elem<ArrowRightOutlined /></p>
                                                    </Col>
                                                </Row>
                                        </li></ul>
                                        </div>
                                    </Col>
                                </Row>


                            </li>
                            <div className="comment-status-text">
                            <li><Row>
                                <Col lg={3} md={24} xs={24} sm={24}><img className="" src={AuthThree} alt=""/></Col>
                                <Col lg={21} md={24} xs={24} sm={24}><h4 className="author">JOHAN
                                    SMITH <span>{props.uzLang?'2-iyun 2016-yil':'June 2, 2016'}</span></h4>
                                    <p className="coment-content">Morbi gravida, sem non egestas ullamcorper, tellus ante laoreet nisl,
                                        id iaculis urna eros vel turpis curabitur tristique mauris eget
                                        lacus rutrum lobortis. Ut id elem<ArrowRightOutlined /></p>
                                </Col>
                            </Row></li>
                            </div>
                        </ul>
                    </div>
                </Col>
            </Row>
            <div className="comment-responsd ">
                <Row>
                    <Col lg={24} md={24} sm={24} xs={24}>
                    <h4>{props.uzLang?'JAVOBINGIZNI QOLDIRING':'LEAVE A REPLY'}</h4>

                        <Row>
                            <Col lg={6}>
                                <label for="name">{props.uzLang?'Ismingiz':'Your Name'} ({props.uzLang?'Talab qilinadi':'required'})</label>
                                <input type="text" name="name" id="name" placeholder={props.uzLang?'Ismingizni kiriting':'"create Your Name"'}/>
                            </Col>

                        </Row>
                        <Row>
                            <Col lg={6}>
                                <label for="email">{props.uzLang?'E-mailingiz':'Your Mail '}({props.uzLang?'Talab qilinadi':'required'})</label>
                                <input type="text" name="email" id="email" placeholder={props.uzLang?'E-mailingizni kiriting':'"create Your E-mail"'}/>
                            </Col>

                        </Row>
                        <Row>
                            <Col lg={6}>
                                <label for="email">{props.uzLang?'Xabaringiz':'Your Message'} ({props.uzLang?'Talab qilinadi':'required'})</label>
                                <textarea className="message" name="msg" id="msg" ></textarea>
                            </Col>

                        </Row>
                        <Row>
                            <Col lg={6}>
                                <button className="cont-submit" type="submit" name="submin">{props.uzLang?'IZOHNI YUBORISH':'SEND COMMENT'}</button>
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
    Coment
)