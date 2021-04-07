import React,{Component} from "react";
import './Footer.css';
import { Row, Col } from 'antd';
import { createFromIconfontCN,ClockCircleOutlined,EyeOutlined,HeartOutlined,RightOutlined,TwitterOutlined,UpOutlined} from '@ant-design/icons';
import Scroll from "react-scroll";
import {connect} from "react-redux";
import {enLanguage} from "../redux/Actions/enLanguage";
import {uzLanguage} from "../redux/Actions/uzLanguage";
import AOS from 'aos';
var Link = Scroll.Link;
class Footer extends  Component{
    constructor(props, context) {
        super(props, context);
        AOS.init();
    }
    componentWillReceiveProps (){
        AOS.refresh();
    }

    render() {
        const {uzLang}=this.props;
        const IconFont = createFromIconfontCN({
            scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
        });
        return(
            <div className="footer">
                <div className="footer1">
                    <div className="container">
                        <div className="news-update">
                            <a href="#"><h1>{uzLang?'Yangiliklar Yangilanishi':'News Update'}</h1></a>
                        </div>
                        <Row>
                            <Col   className=" box">
                                <h2>{uzLang?'Biz Haqimizda':'ABOUT US'}</h2>
                                <p>
                                    {uzLang?"Agar sizda sayt bo'yicha qo'shimcha savol va takliflar bo'lsa adminstratorlar orqali bizga bog'lanishingiz mumkin":" This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat"}
                                </p>
                                <br/>
                                <p>{uzLang?"Agar siz bizning so'nggi yangiliklarni olishni istasangiz to'g'ridan-to'g'ri elektron pochtangizni yuboring":"If you want to receive our latest news send directly to your email,"}</p>
                            </Col>
                            <Col   className=" box">
                                <h2>{uzLang?"So'nggi xabarlar":"RECENT POSTS"}</h2>
                                <a href="#"><p>{uzLang?"Oliy ta'lim muassasalari online ta'limga qaytmoqda":"Build A Smoothie Bowl And We’ll Reveal Your Age And"} </p></a>
                                <div className="nnnn">
                                    <p className="clock"><span className="span1"><ClockCircleOutlined className="ClockCircleOutlined"/></span>Nov 1,2017 <span className="span2"><EyeOutlined/></span>15k<span className="span3"><HeartOutlined/></span>278</p>
                                </div>
                                <div className="a2">
                                    <a href="#"><p>{uzLang?"Biz yangi TACO qo'ng'irog'ini tovuq uyalarida sinab ko'rdik":"We Tried The New Taco Bell Chicken Nuggets And Here's Wh"}</p></a>
                                </div>
                                <p className="clock"><ClockCircleOutlined/>{uzLang?'21-fevral':'Nov 1,2017'} <span className="span2"><EyeOutlined/></span>15k<span className="span3"><HeartOutlined/></span>278</p>
                            </Col>
                            <Col   className=" box">
                                <h2>{uzLang?"KO'PROQ TOPISH":"FIND MORE"}</h2>
                                <div>
                                    <div className="mmmm mmmm1">
                                        <a href="#"><span className="righticon1"><RightOutlined /></span>{uzLang?'Dunyo':'World'}<span className="righticon2"><RightOutlined /></span></a>
                                    </div>
                                    <div className="mmmm">
                                        <a href="#"><span className="righticon1"><RightOutlined /></span>Internet<span className="righticon2"><RightOutlined /></span></a>
                                    </div>
                                    <div className="mmmm">
                                        <a href="#"><span className="righticon1"><RightOutlined /></span>{uzLang?'Sayohat':'Travel'}<span className="righticon2"><RightOutlined /></span></a>
                                    </div>
                                    <div className="mmmm">
                                        <a href="#"><span className="righticon1"><RightOutlined /></span>{uzLang?'Texnologiya':'Technology'}<span className="righticon2"><RightOutlined /></span></a>
                                    </div>
                                    <div  className="mmmm mmmm5">
                                        <a href="#"><span className="righticon1"><RightOutlined /></span>{uzLang?'Dizayn':'Fashion'}<span className="righticon2"><RightOutlined /></span></a>
                                    </div>
                                </div>
                            </Col>
                            <Col   className=" box">
                                <h2>TWITTER</h2>
                                <div className="twitter">
                                    <div className="twitter-icon">
                                        <span><TwitterOutlined /></span>
                                    </div>
                                    <div className="twitter-info">
                                        <p>
                                            {uzLang?'Zako talabalari orqali':' johan-themeforest PSD Template by'} <span className="creative-span">@creative</span> {uzLang?'da':'on'} <span className="creative-span">@dribbble </span>
                                            <a href="#">https://t.co/Chi9zl8Rig</a><br/><span>{uzLang?'24 kun oldin':'24 days ago'}</span>
                                        </p>
                                    </div>
                                </div>

                                <div style={{display:"flex"}}>
                                    <div className="twitter-icon">
                                        <span><TwitterOutlined/></span>
                                    </div>
                                    <div className="twitter-info">
                                        <p>
                                            {uzLang?"Ko'proq olish":" Get more"} <span className="creative-span">@creative</span> {uzLang?'da':'on'} <span className="creative-span">@dribbble </span>
                                            <a href="#">https://t.co/666</a><br/><span>{uzLang?'12 kun oldin':'12 days ago'}</span>
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="footer-end">
                        <center>Copyright@2021 Thmeforest.com</center>
                    </div>
                </div>
                <Link activeClass="active" to="yuqoriga"  smooth={true} duration={800}  style={{position:'fixed',top:'650px',right:'50px'}}>
                    <p style={{border:'none',width:'50px',height:'50px',color:'white',fontSize:'25px',borderRadius:'50px',textAlign:'center',backgroundColor:'black'}}><UpOutlined /></p>
                </Link>
            </div>
        )
    }

}

const mapStateToProps = (state) => {

    return {
        uzLang: state.uzLang.uzLang,
    };
};
export default connect(mapStateToProps,{enLanguage,uzLanguage})(
    Footer
);