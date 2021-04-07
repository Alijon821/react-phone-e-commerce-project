import React from "react";
import {Row, Col} from 'antd';
import './cards.css';
import TravelTwo from '../Images/related-post-img.jpg'
import {connect, useSelector} from "react-redux";
import {enLanguage} from "../../redux/Actions/enLanguage";
import {uzLanguage} from "../../redux/Actions/uzLanguage";

function Cards(props){
    const uzLang=useSelector(props=>props.uzLang)
    return(
        <div className="cards">
            <Row>
                <Col lg={24} md={24} sm={24} xs={24}>
                    <h3>{props.uzLang?"TEGISHLI MAQOLALAR":"RELATED ARTICLE"}</h3>
                    <Col lg={24} md={24} sm={24} xs={24}>
                    <Row gutter={[32, 16]}>
                        <Col lg={7} md={12} sm={24} xs={24}>
                        <div className="cardTwo">
                            <img src={TravelTwo} alt=""/>
                            <p>{props.uzLang?"4-iyun 2016-yil":"04 JUNE 2016"}</p>
                            <a>{props.uzLang?"Barcha Davrlar dahosi bo'lish uchun Qadamlar":"VIVAMUS ET TURPIS LACINIA"}</a>

                            <p>{props.uzLang?"Admin orqali maqola":"Post by AD-MINE"}</p>
                        </div>
                        </Col>

                        <Col lg={7} md={12} sm={24} xs={24}>
                            <div className="cardTwo">
                            <img src={TravelTwo} alt=""/>
                            <p>{props.uzLang?"4-iyun 2016-yil":"04 JUNE 2016"}</p>
                            <a>{props.uzLang?"Barcha Davrlar dahosi bo'lish uchun Qadamlar":"VIVAMUS ET TURPIS LACINIA"}</a>
                                <p>{props.uzLang?"Admin orqali maqola":"Post by AD-MINE"}</p>
                            </div>
                        </Col>



                        <Col lg={7} md={12} sm={24} xs={24}>
                            <div className="cardTwo">
                            <img src={TravelTwo} alt=""/>
                            <p>{props.uzLang?"4-iyun 2016-yil":"04 JUNE 2016"}</p>
                            <a>{props.uzLang?"Barcha Davrlar dahosi bo'lish uchun Qadamlar":"VIVAMUS ET TURPIS LACINIA"}</a>
                                <p>{props.uzLang?"Admin orqali maqola":"Post by AD-MINE"}</p>
                            </div>
                        </Col>


                    </Row>
                    </Col>
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
    Cards
)