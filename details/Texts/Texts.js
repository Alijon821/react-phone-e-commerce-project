import React from "react";
import {Row, Col} from 'antd';
import './texts.css';
import {connect, useSelector} from "react-redux";
import {enLanguage} from "../../redux/Actions/enLanguage";
import {uzLanguage} from "../../redux/Actions/uzLanguage";



function Texts(props) {
    const uzLang=useSelector(props=>props.uzLang)
    return (
        <div className="texts1">
            <Row>
                <Col lg={24} md={24} sm={24} xs={24}>
                    <div className="blog-text">
                        <Row justify="center">
                            <Col lg={12} md={24} sm={24} xs={24}>
                                <p>I can stop looking for events, people and circumstances to blame. I only need to look
                                    inside. No matter how influential you are you cannot control the circumstances and
                                    events of
                                    your life. There are only three things over which you have absolute and total
                                    control and
                                    these are all you need. It forms the total experience of life.</p>
                            </Col>
                            <Col lg={16} md={24} sm={24} xs={24}>
                                <h4>{props.uzLang?"Mening fikrlarim ,Mening harakatlarim va So'zlarim doim nazorat ostida":"My thoughts, my actions and my words are always under my conscious"}</h4>
                            </Col>
                            <Col lg={14} md={24} sm={24} xs={24}>
                                <ul>
                                    <li>{props.uzLang?"Boshqaruvni qaytarib olish uchun motivatsion gipoterapiya":"Hypnotherapy For Motivation Getting The Drive Back"}</li>
                                    <li>{props.uzLang?"Ildamlik bilan Harakat":"Roar With Confidence"}</li>
                                    <li>{props.uzLang?"Buyuk Motivatsion so'zlar o'ntaligi":"Motivational Sayings Ten Great Ones"}</li>
                                    <li>{props.uzLang?"HAyotingizda so'zlarning kuchidan foydalaning":"Harness The Power Of Words In Your Life"}</li>
                                </ul>
                            </Col>
                        </Row>








                    </div>

                </Col>

            </Row>

        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        uzLang: state.uzLang.uzLang,
    };
};
export default connect(mapStateToProps,{enLanguage,uzLanguage})(
    Texts
)
