import React, { Component } from 'react'
import "./AboutUs.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Row, Col, Card, } from 'antd';
import 'antd/dist/antd.css';
import { StepForwardOutlined, } from '@ant-design/icons';
import IconBar from './IconBar';
import { GooglePlusOutlined, ClockCircleOutlined, CommentOutlined } from '@ant-design/icons'
import Carousel from './Carousel'
import {connect} from "react-redux";
import {enLanguage} from "../redux/Actions/enLanguage";
import {uzLanguage} from "../redux/Actions/uzLanguage";

export class AboutUs extends Component {
    render() {

const {uzLang}=this.props;
        const ArrayList = [
            {
                id: 1,
                img: "http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/side-bar/most-populer/msp-img2.jpg",
                text: "Gravida placerat taciti lacinia netus facilitis"
            },

            {
                id: 2,
                img: "https://lh3.googleusercontent.com/l4WJXoK0kN5SUMxrs-kIa1eQR0ksPa9VFgcu9lLRS_SzVOr68R0SDyrT95xbVQyeCjPWhg=s120",
                text: "How to use a website to then a brand"
            },

            {
                id: 3,
                img: "https://lh3.googleusercontent.com/PFjda4pVk9uE-YzOIjGlFviPdOLxHWI-ZHl5_7J6ysgDLdS3DlOj-QxHtBfPaVIAxoAQ=s120",
                text: "Should creatives be unionized or earn"
            },

            {
                id: 4,
                img: "https://lh3.googleusercontent.com/ZUdIYLkm04MqwzMc-0FOj-9VjHekAOJIJDk_ZC5QI7KMTVuBNVQ8Ig-9QAR6fD-zQ18a=s120",
                text: "Mesmerizing minima- list to logo design"
            },

            {
                id: 5,
                img: "https://lh3.googleusercontent.com/NVy-5ukN1GZ5XglmlNrO7luGEiymuPIzXKViVucOoV3Rz3ssrrpBf6N6KHfLvpsMXS-Kf5c=s120",
                text: "Mobile first: Luke Wro- blewski interview"
            },


        ]

        return (
            <div style={{marginTop:'50px'}}>
                <div className="container">
                    <Row>
                        <Col md={16} sm={24} >


                            <img src="img/img-1.jpg" alt="" />
                            <p className="textBigFirst mt-4 black-text">
                                I get inspired when food is the purest form of itself.
                                A peach from a farmer’s market at the end of August tastes
                                exactly like a peach should. I’ve worked at a grocery store
                                and two farms, and can attest to the fact that eating seasonally
                                will change your take on everyday cooking. My intention is to make
                                food taste good through using natural ingredients: whole grains,
                                healthy fats, natural sugar alternatives and the like. I would qualify
                                salad as my favorite food, but a bit of indulgence will certainly wiggle in
                                amongst the vegetables. I don't subscribe to one particular diet or foods that are
                                labeled as "good" or "bad." I try to eat a lot of produce... that's the short story.
                                What I can promise is that here, you will find recipes that use seasonal ingredients,
                                with an intention to not overcomplicate natural foods. I don’t really measure, so the
                                recipes are usually educated guesses that should work for you. Alter my suggestions based
                                on your own tastes- a little more of this, a little less of that. This is art, not science,
                                if you ask me.
                               </p>
                            <p className="textBigSecond mt-3 mb-4 black-text">
                                My love, Hugh, happens to be quite the talented photographer.  A completely self-taught, image-making mastermind.
                                This blog is our adventure together; for him to take photos, me to learn more about cooking, and enjoy food in good
                                company. We had a precious little boy, Curran, May of 2014 and are even more smitten than we assumed we'd be.
                               </p>

                            <img src="img/img-2.jpg" alt="error image" />

                            <p className="textBigTRhird mt-3 black-text">
                                We released our first cookbook with Ten Speed Press in early fall of
                                2012 - Sprouted Kitchen: A Tastier Take on Whole Foods. It is essentially
                                an echo of the blog's style: a collection of breakfast, snacks, appetizers,
                                mains and treat ideas. The book is mostly vegetarian and produce focused,
                                and my goal is to bridge the gap between eating well and entertaining.
                                Our second book, Bowl + Spoon, was released April 2015 and is a book full
                                of recipes focused around a single vessel - the bowl. The recipes are
                                straight forward, adaptable and full of enough color and flavor to warrant
                                serving to company but comfortable enough for weeknight meals on the couch.
                            </p>
                            <h4 className="FAQ mt-5">FAQ</h4>
                            <h5 className="FAQ-QuestionOne ">{uzLang?"Qanday kamrea uskunalari Hughdan foydalanadi?":"What kind of camera equipment does Hugh use?"}</h5>
                            <p className="FAQ-QuestionTwo black-text">I make most of the images you see on Sprouted Kitchen with a Canon
                            5D Mark III + Canon 50mm f/1.2L prime lens. For the tighter images,
                                  I'll use a Sigma 50mm f/2.8 EX DG Macro prime lens.</p>
                            <h6 className="mt-4">For a complete rundown on what's in my bag or on my desk, you can click here.</h6>
                            <h5 className="FAQ-QuestionThree mt-4">Do you do giveaways and product review?</h5>
                            <p className="FAQ-QuestionFour mt-3 black-text">We do not. We do sponsored posts and you may email me for a rate sheet.</p>
                            <p className="FAQ-QuestionFive mt-4 black-text">Yes! Both recipe development and food photography, respectively, are careers we pursue outside of this space. You can find Hugh's food portfolio here. What you see here on Sprouted Kitchen demonstrates our consistency of style, and if you like what you see, we're up for new projects and opportunities.</p>
                            <h4 className="hTags ">{uzLang?"Mening sevimli taomlarim?":"My favorite foods?"}</h4>
                            <p className="FAQ-QuestionSix hTags  mt-3 black-text">Eggs. Leeks. Greens of any sort. Ice Cream. Toasted + Unsalted Pistachios. </p>
                            <h5 className="FAQ-QuestionSeven hTags ">{uzLang?"Hughning sevimli ta'omlari?":"Hugh's favorite foods?"}</h5>
                            <p className="hTags black-text">Nutella. Cheeseburgers. Coffee. Bacon. Sara's Turkey Meatballs. </p>

                        </Col>

                        <Col md={8} sm={24}>
                            <div className="Icons">

                                <Row>
                                    <Col md={8} sm={24}>
                                        <IconBar hovers="red" color="#3F67C0" price="156.570" text={uzLang?"Muxlislar":"Fans"} Icon="icon-facebook" />
                                    </Col>
                                    <Col md={8} sm={24}>
                                        <IconBar color="#35B5EB" price="3.562" text={uzLang?"Kuzatuvchilar":"Followers"} Icon="icon-twitter" />
                                    </Col>
                                    <Col md={8} sm={24}>
                                        <IconBar color="#EB5B4C" price="29.546" text={uzLang?"Kuzatuvchilar":"Followers"} Icon="icon-facebook" />
                                    </Col>
                                </Row>


                                <h3 className="mt-5">{uzLang?'ENG MASHHUR':'MOST POPULAR'}</h3>
                                <div className="MostPopular">
                                    <div className="LineOnBorder"></div>
                                    <Row className="mt-3">
                                        <Col md={22} offset={1} sm={24} >

                                            <img className="ImageInRightDiv" src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/side-bar/most-populer/msp-img1.jpg" alt="error img" />
                                            <div className="ShadowOpacityIMG"></div>
                                            <p className="TextOnImage">Flames top Jets in long</p>
                                            <p className="DateText "> <ClockCircleOutlined />May 06, 2014  <CommentOutlined /> 10    </p>


                                        </Col>
                                    </Row>
                                    {ArrayList.map(item=> (

                                            <Row  className="mt-5">
                                                <Col md={9} offset={1} sm={24}>
                                                    <img src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/side-bar/most-populer/msp-img2.jpg" alt="error img" />

                                                </Col>

                                                <Col className="TextInDiv" md={13} sm={24}>
                                                    <a className="LinkText" href="#"><p className="TextOne black-text">{item.text}</p></a>

                                                </Col>
                                            </Row>
                                            

                                        
                                    ))}
                                    <br />
                                </div>
                                <div className="RightDivImages">
                                    <img className="mt-5" src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/banner/header-sidebar-banner3.jpg" alt="error images" />
                                </div>
                                <div className="CarouselWrapper mt-5">
                                      <Carousel img="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/side-bar/hot-post/hpost-img1.jpg" text="Feds open formal probe into Tesla" color="#F4B711" btnText="SOCIAL"/>
                                      <Carousel img="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/side-bar/hot-post/hpost-img2.jpg" text="Nielsen forecasts smaller Black Friday crowds" color="#209CC9" btnText="TECHNOLOGY"/>
                                      <Carousel img="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/side-bar/hot-post/hpost-img3.jpg" text="Butterball talks turkey Fewer fresh" color="#01C181" btnText="BUSINESS"/>
                                      <Carousel img="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/side-bar/hot-post/hpost-img4.jpg" text="Premier League: the race for the title (and Europe)" color="#E0437C" btnText="SPORTS"/>
                                </div>
                                




                            </div>



                        </Col>
                    </Row>










                </div>




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
    AboutUs
)
