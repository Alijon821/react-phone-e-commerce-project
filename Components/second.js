import React from 'react';
import '../Css/seconds.css';
import 'antd/dist/antd.css';
import {FaPlayCircle} from "react-icons/fa";
import {Button, Col, Row} from "antd";
import {connect} from "react-redux";
import {enLanguage} from "../redux/Actions/enLanguage";
import {uzLanguage} from "../redux/Actions/uzLanguage";
class Second extends React.Component{
    render() {
        const {uzLang}=this.props;
        return(
            <React.Fragment>
                <div className="containerrr">
                    <Row>
                        <Col md={16} sm={16} xs={24}>
                            <div className="post_area">
                             <div className="post_item">
                               <Row>
                                   <Col lg={12} xs={24}><img className="post_item_img"  src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/cmn-post/cmn-post-img1.jpg" alt="post image"/></Col>
                                   <Col lg={12} xs={24}>
                                       <div className="post_item_info"><a href="#">Althusser Competing Interpellations</a>
                                           <p className="post_item_text">This is Photoshop's version of Lorem Ipsum. Proin
                                               gravida nibh vel velit au</p></div>
                                       <div className="author_info">
                                           <img src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/post-author-img.jpg" alt="error" style={{borderRadius:'100%',marginRight:'10px',width:'50px',marginLeft:'20px'}}/>
                                           <span>Mabello Fox</span>
                                           <span>Art & Illustration</span>
                                           <span>2 hours ago</span>
                                       </div>
                                   </Col>
                               </Row>
                             </div>
                                <div className="post_item">
                                    <Row>
                                        <Col lg={12} xs={24}><img className="post_item_img"  src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/cmn-post/cmn-post-img2.jpg" alt="post image"/></Col>
                                        <Col lg={12} xs={24}>
                                            <div className="post_item_info"><a href="#">Peace On Earth A Wonderful Wish But</a>
                                                <p className="post_item_text">This is Photoshop's version of Lorem Ipsum. Proin
                                                    gravida nibh vel velit au</p></div>
                                            <div className="author_info">
                                                <img src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/post-author-img.jpg" alt="error" style={{borderRadius:'100%',marginRight:'10px',width:'50px',marginLeft:'20px'}}/>
                                                <span>Mabello Fox</span>
                                                <span>Art & Illustration</span>
                                                <span>2 hours ago</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="post_item">
                                    <Row>
                                        <Col lg={12} xs={24}><img className="post_item_img"  src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/cmn-post/cmn-post-img3.jpg" alt="post image"/></Col>
                                        <Col lg={12} xs={24}>
                                            <div className="post_item_info"><a href="#">Natural Home Treatment For Cellulite</a>
                                                <p className="post_item_text">This is Photoshop's version of Lorem Ipsum. Proin
                                                    gravida nibh vel velit au</p></div>
                                            <div className="author_info">
                                                <img src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/post-author-img.jpg" alt="error" style={{borderRadius:'100%',marginRight:'10px',width:'50px',marginLeft:'20px'}}/>
                                                <span>Mabello Fox</span>
                                                <span>Art & Illustration</span>
                                                <span>2 hours ago</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="post_item">
                                    <Row>
                                        <Col lg={12} xs={24}><img className="post_item_img"  src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/cmn-post/cmn-post-img4.jpg"/></Col>
                                        <Col lg={12} xs={24}>
                                            <div className="post_item_info"><a href="#">Roar With Confidence</a>
                                                <p className="post_item_text">This is Photoshop's version of Lorem Ipsum. Proin
                                                    gravida nibh vel velit au</p></div>
                                            <div className="author_info">
                                                <img src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/post-author-img.jpg" alt="error" style={{borderRadius:'100%',marginRight:'10px',width:'50px',marginLeft:'20px'}}/>
                                                <span>Mabello Fox</span>
                                                <span>Art & Illustration</span>
                                                <span>2 hours ago</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="post_item">
                                    <Row>
                                        <Col lg={12} xs={24}><img className="post_item_img"  src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/cmn-post/cmn-post-img5.jpg"/></Col>
                                        <Col lg={12} xs={24}>
                                            <div className="post_item_info"><a href="#">Harness The Power Of Words In Your Life</a>
                                                <p className="post_item_text">This is Photoshop's version of Lorem Ipsum. Proin
                                                    gravida nibh vel velit au</p></div>
                                            <div className="author_info">
                                                <img src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/post-author-img.jpg" alt="error" style={{borderRadius:'100%',marginRight:'10px',width:'50px',marginLeft:'20px'}}/>
                                                <span>Mabello Fox</span>
                                                <span>Art & Illustration</span>
                                                <span>2 hours ago</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="post_item">
                                    <a href="#"> <img style={{width:'100%'}} src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/banner/adv2-banner.jpg" alt="error"/></a>
                                </div>
                            </div>
                        </Col>
                        <Col md={8} sm={8} xs={24}>
                            <div className="sidebar">
                                <div className="sidebar_1">

                                    <div className="nameDiv"><h4>{uzLang?"DUNYO BO'YLAB":"AROUND THE WORLD"} <p><hr/></p></h4></div>
                                    <img src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/side-bar/around-world.jpg" alt="error"/>
                                    <a href="#">The Aftermath of a Deadly Airstrike in Afghanistan</a>
                                    <p className="df-text">There are many unanswered questions about how a hospital in
                                        Kunduz came to be a target.</p>
                                    <ul>
                                        <li>Editorial: The Biggest Questions Awaiting the Supreme Court</li>
                                        <li>The Stone: What Art Unveils</li>
                                        <li>Your Evening Briefing</li>
                                    </ul>
                                </div>
                                <div className="sidebar_2">
                                    <div className="nameDiv"><h4>{uzLang?'VIDEONI TOMOSHA QILING':'watch video'} <p><hr/></p></h4></div>
                                    <div className="videos">
                                        <div className="watch">
                                            <a href="#"><img src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/coverage-area/blog-post-img1.jpg" alt="video wvi-thumbnail"/></a>
                                           <div className="show"> <div className="video_info">
                                               <a href="#"><FaPlayCircle style={{color:'white',marginRight:'10px'}}/></a>
                                               <span className="duration">2.20</span>

                                           </div></div>
                                        </div>

                                    </div>
                                    <a href="#" className="video_title">Hillary Clinton Calls On Gun Owners To
                                        'Take Back' Second Amendment</a>
                                    <div className="videos">
                                        <div className="watch">
                                            <a href="#"><img src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/coverage-area/blog-post-img3.jpg" alt="video wvi-thumbnail"/></a>
                                            <div className="show"> <div className="video_info">
                                                <a href="#"><FaPlayCircle style={{color:'white',marginRight:'10px'}}/></a>
                                                <span className="duration">3.10</span>

                                            </div></div>
                                        </div>

                                    </div>
                                    <a href="#" className="video_title">1,069 Days Later, Senate Gets Around To Filling Court Vacancy</a>
                                    <div className="videos">
                                        <div className="watch">
                                            <a href="#"><img src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/coverage-area/blog-post-img2.jpg" alt="video wvi-thumbnail"/></a>
                                            <div className="show"> <div className="video_info">
                                                <a href="#"><FaPlayCircle style={{color:'white',marginRight:'10px'}}/></a>
                                                <span className="duration">5.0</span>

                                            </div></div>
                                        </div>

                                    </div>
                                    <a href="#" className="video_title">If You Love Animals, This Device Will Horrify You</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        )
    }

}

const mapStateToProps = (state) => {

    return {
        uzLang: state.uzLang.uzLang,
    };
};
export default connect(mapStateToProps,{enLanguage,uzLanguage})(
    Second
);