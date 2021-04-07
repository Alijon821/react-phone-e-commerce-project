import React from 'react';
import 'antd/dist/antd.css';
import {Row, Col} from 'antd';
import './body.css';
import ImgChair from '../Images/blog-post-details-img.jpg';
import {connect, useSelector} from "react-redux";
import {enLanguage} from "../../redux/Actions/enLanguage";
import {uzLanguage} from "../../redux/Actions/uzLanguage";

function Body(props) {
    const uzLang=useSelector(props=>props.uzLang)
    return (
        <div className="body">
            <div className="-container">
                <Row justify="center">
                    <Col lg={6} md={24} sm={24} xs={24}>
                        <a href="#">{props.uzLang?'BOSH SAHIFA':'HOME'} > {props.uzLang?'FOTOGALEREYA':'PHOTOGRAPHY'}</a>

                    </Col>


                </Row>
                <div className="text">
                    <Row>
                        <Col lg={24} md={24} sm={24} xs={24}>
                            <span>{props.uzLang?"Qanday qilib oson foydalanishni o'rganish orzularini talqin qilish":"Dream Interpretation How to learn to easy to use how can do"}</span>
                        </Col>
                    </Row>
                    <div className="chair">
                        <Row>

                            <Col lg={24} md={24} sm={24} xs={24}>
                                <img src={ImgChair} alt=""/>
                            </Col>
                        </Row>
                    </div>
                    <Row justify="center">
                        <Col lg={14} md={14} sm={16} xs={24}>
                            <p>Staying calm, composed and maintaining strong self esteem in today’s tough environment
                                can be
                                difficult but is not impossible if you follow a few simple guidelines. Here are 6 tips
                                you
                                can use as a starter guide to self improvement.

                            </p>
                            <p>Everything and everyone else around you can affect your self esteem. Other people can
                                deliberately or inadvertently damage your self image. Unchecked people and circumstances
                                can ultimately destroy your self esteem and pull you down in ways you won’t even notice.
                                Don’t let these influences get the best of you. But what should you avoid?

                            </p>
                            <Row><Col lg={24} md={24} sm={24} xs={24}>
                                <div className="vl">

                                    <h3>You’ve heard the expression, “Just believe it and it will come.” Well,
                                        technically,
                                        that is true, however, ‘believing’ is not just thinking that you can have it; it
                                        is
                                        also feeling that it is possible.</h3>
                                </div>
                            </Col></Row>
                            <p>For my life to get better I have to get better. For things to change I have to change. I
                                am mine.
                                This is my life and I am the creator of my destiny.</p>

                        </Col>
                    </Row>

                </div>



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
    Body
)