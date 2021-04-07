import React, { Component } from 'react';
import { Row, Col,Form,Input,Button} from 'antd';
import './styles/Home_page.css';
import { ClockCircleOutlined,HeartOutlined,CommentOutlined,FacebookOutlined,TwitterOutlined,YoutubeOutlined,MailOutlined,InstagramOutlined,LinkedinOutlined,GooglePlusOutlined} from '@ant-design/icons';
import {connect} from "react-redux";
import {enLanguage} from "../redux/Actions/enLanguage";
import {uzLanguage} from "../redux/Actions/uzLanguage";

class Home_page extends Component {

  render() {
    const {uzLang}=this.props;
    return (
      <section>
          <div className="twich-content-area">
            <div className="container">
              <Row gutter={[16, 16]}>
                <Col lg={16} md={24}>
                    <div className="latest-news-area">
                        <div className="section-top-bar">
                            <h4>{uzLang?"SO'NGGI YANGILIKLAR":"Latest News"}</h4>
                            <ul>
                                <li role="presentation"><a href="#all">{uzLang?'HAMMASI':'Latest News'}</a></li>
                                <li role="presentation"><a href="#all">{uzLang?'sayohat':'Travel'}</a></li>
                                <li role="presentation"><a href="#all">{uzLang?'texnologiya':'Tech'}</a></li>
                                <li role="presentation"><a href="#all">{uzLang?'Sport':'Sport'}</a></li>
                                <li role="presentation"><a href="#all">{uzLang?'Taomlar':'Food'}</a></li>
                                <li role="presentation"><a href="#all">{uzLang?'turmush tarzi':'LifeStyle'}</a></li>
                                <li role="presentation"><a href="#all">{uzLang?'dizayn':'Fashion'}</a></li>
                            </ul>
                        </div>
                        <div className="tab-content">
                          <div className="latest-news">
                            <Row gutter={[16, 16]}>
                              <Col lg={12} md={24}>
                                <div className="lt-single-post">
                                  <div className="single-lt-img">
                                    <img src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/single-list-post.jpg"/>
                                    <div className="lt-img-desc">
                                      <a href="#" className="ln-post-cat">travel</a>
                                      <div className="meta-author">
                                        <div className="meta-tag-area">
                                          <span><i className="iconka"><ClockCircleOutlined /></i> {new Intl.DateTimeFormat("en-GB", {
                                                                              year: "numeric",
                                                                              month: "long",
                                                                              day: "2-digit"
                                                                            }).format()}</span>
                                          <span>
                                            <i className="iconka"><HeartOutlined /></i>124
                                          </span>
                                          <span>
                                            <i className="iconka"><CommentOutlined /></i>16
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <a href="#" className="lt-single-title">
                                    21 Treats That Will Make Your Kid's Summer The Coolest Ever<br/>
                                    Because keeping them cool (and busy!) is hot.
                                  </a>
                                  <p className='df-text'>
                                    Precariously positioned on the banks of both the IJ Bay and the Amstel River headwaters, Amsterdam made an early mark on the world with its dominant seafaring fleet and colonial aspirations in the 17th
                                  </p>
                                </div>
                              </Col>
                              <Col lg={12} md={24}>
                                <div className="list-post-item">
                                  <img src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/list-post-img1.jpg"/> 
                                  <div className="lt-post-desc">
                                    <a href="#"> Here's How To Grocery Shop And Make Lunch</a>
                                    <p>
                                    <i className="iconka"><ClockCircleOutlined/></i>
                                      {new Intl.DateTimeFormat("en-GB", {
                                                                              year: "numeric",
                                                                              month: "long",
                                                                              day: "2-digit"
                                                                            }).format()}
                                    </p>
                                  </div>
                                </div>
                                <div className="list-post-item">
                                  <img src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/list-post-img2.jpg"/> 
                                  <div className="lt-post-desc">
                                    <a href="#"> Here's How To Grocery Shop And Make Lunch</a>
                                    <p>
                                    <i className="iconka"><ClockCircleOutlined/></i>
                                      {new Intl.DateTimeFormat("en-GB", {
                                                                              year: "numeric",
                                                                              month: "long",
                                                                              day: "2-digit"
                                                                            }).format()}
                                    </p>
                                  </div>
                                </div>
                                <div className="list-post-item">
                                  <img src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/list-post-img3.jpg"/> 
                                  <div className="lt-post-desc">
                                    <a href="#"> Here's How To Grocery Shop And Make Lunch</a>
                                    <p>
                                    <i className="iconka"><ClockCircleOutlined/></i>
                                      {new Intl.DateTimeFormat("en-GB", {
                                                                              year: "numeric",
                                                                              month: "long",
                                                                              day: "2-digit"
                                                                            }).format()}
                                    </p>
                                  </div>
                                </div>
                                <div className="list-post-item">
                                  <img src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/list-post-img4.jpg"/> 
                                  <div className="lt-post-desc">
                                    <a href="#"> Here's How To Grocery Shop And Make Lunch</a>
                                    <p>
                                    <i className="iconka"><ClockCircleOutlined/></i>
                                      {new Intl.DateTimeFormat("en-GB", {
                                                                              year: "numeric",
                                                                              month: "long",
                                                                              day: "2-digit"
                                                                            }).format()}
                                    </p>
                                  </div>
                                </div>
                                <div className="list-post-item">
                                  <img src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/list-post-img5.jpg"/> 
                                  <div className="lt-post-desc">
                                    <a href="#"> Here's How To Grocery Shop And Make Lunch</a>
                                    <p>
                                    <i className="iconka"><ClockCircleOutlined/></i>
                                      {new Intl.DateTimeFormat("en-GB", {
                                                                              year: "numeric",
                                                                              month: "long",
                                                                              day: "2-digit"
                                                                            }).format()}
                                    </p>
                                  </div>
                                </div>
                                <div className="list-post-item">
                                  <img src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/list-post-img6.jpg"/> 
                                  <div className="lt-post-desc">
                                    <a href="#"> Here's How To Grocery Shop And Make Lunch</a>
                                    <p>
                                    <i className="iconka"><ClockCircleOutlined/></i>
                                      {new Intl.DateTimeFormat("en-GB", {
                                                                              year: "numeric",
                                                                              month: "long",
                                                                              day: "2-digit"
                                                                            }).format()}
                                    </p>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </div>
                    </div>
                    <div className="section-top-bar">
                      <h4>{uzLang?'turmush tarzi':'Life Style'}</h4>
                    </div>
                      <Row gutter={[16, 16]}>
                        <div className="lifestyle-post-item">
                          <Row  gutter={[16, 16]}>
                            <Col lg={8} md={24}>
                              <img src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/lifestyle/lifestyle-post-img1.jpg" />                                               
                            </Col>
                            <Col lg={16} md={24}>
                              <a href="#">A Lazy Person's Guide To Pairing Food And Wine Alazy Person</a>
                              <div className="lf-post-fback">
                                <span><i className="iconka"><ClockCircleOutlined /></i> 
                                  {new Intl.DateTimeFormat("en-GB", {year: "numeric",month: "long",day: "2-digit"}).format()}
                                </span>
                                <span><i className="iconka"><HeartOutlined /></i>124</span>
                                <span><i className="iconka"><CommentOutlined /></i>16</span>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="lifestyle-post-item">
                          <Row  gutter={[16, 16]}>
                            <Col lg={8} md={24}>
                              <img src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/lifestyle/lifestyle-post-img1.jpg" />                                               
                            </Col>
                            <Col lg={16} md={24}>
                              <a href="#">A Lazy Person's Guide To Pairing Food And Wine Alazy Person</a>
                              <div className="lf-post-fback">
                                <span><i className="iconka"><ClockCircleOutlined /></i> 
                                  {new Intl.DateTimeFormat("en-GB", {year: "numeric",month: "long",day: "2-digit"}).format()}
                                </span>
                                <span><i className="iconka"><HeartOutlined /></i>124</span>
                                <span><i className="iconka"><CommentOutlined /></i>16</span>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="lifestyle-post-item">
                          <Row  gutter={[16, 16]}>
                            <Col lg={8} md={24}>
                              <img src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/lifestyle/lifestyle-post-img1.jpg" />                                               
                            </Col>
                            <Col lg={16} md={24}>
                              <a href="#">A Lazy Person's Guide To Pairing Food And Wine Alazy Person</a>
                              <div className="lf-post-fback">
                                <span><i className="iconka"><ClockCircleOutlined /></i> 
                                  {new Intl.DateTimeFormat("en-GB", {year: "numeric",month: "long",day: "2-digit"}).format()}
                                </span>
                                <span><i className="iconka"><HeartOutlined /></i>124</span>
                                <span><i className="iconka"><CommentOutlined /></i>16</span>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="lifestyle-post-item">
                          <Row  gutter={[16, 16]}>
                            <Col lg={8} md={24}>
                              <img src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/lifestyle/lifestyle-post-img1.jpg" />                                               
                            </Col>
                            <Col lg={16} md={24}>
                              <a href="#">A Lazy Person's Guide To Pairing Food And Wine Alazy Person</a>
                              <div className="lf-post-fback">
                                <span><i className="iconka"><ClockCircleOutlined /></i> 
                                  {new Intl.DateTimeFormat("en-GB", {year: "numeric",month: "long",day: "2-digit"}).format()}
                                </span>
                                <span><i className="iconka"><HeartOutlined /></i>124</span>
                                <span><i className="iconka"><CommentOutlined /></i>16</span>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="lifestyle-post-item">
                          <Row  gutter={[16, 16]}>
                            <Col lg={8} md={24}>
                              <img src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/lifestyle/lifestyle-post-img1.jpg" />                                               
                            </Col>
                            <Col lg={16} md={24}>
                              <a href="#">A Lazy Person's Guide To Pairing Food And Wine Alazy Person</a>
                              <div className="lf-post-fback">
                                <span><i className="iconka"><ClockCircleOutlined /></i> 
                                  {new Intl.DateTimeFormat("en-GB", {year: "numeric",month: "long",day: "2-digit"}).format()}
                                </span>
                                <span><i className="iconka"><HeartOutlined /></i>124</span>
                                <span><i className="iconka"><CommentOutlined /></i>16</span>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Row> 
                </Col>
                <Col lg={8} md={24}>
                  <div className="side-bar">
                    <div className="widget widget-social">
                      <div className="widget-fb">
                        <i className="dblue"><FacebookOutlined /></i>
                        <h4>3,000</h4>
                        <h6>{uzLang?'Kuzatuvchilar':'Followers'}</h6>
                      </div>
                      <div className="widget-twitter">
                        <i className="wblue"><TwitterOutlined /></i>
                        <h4>4,000</h4>
                        <h6>{uzLang?'Muxlislar':'Fans'}</h6>
                      </div>
                      <div className="widget-g-plus">
                        <i className="red-youtube"><YoutubeOutlined /></i>
                        <h4>2,000</h4>
                        <h6>{uzLang?'Obunachilar':'Subscriber'}</h6>
                      </div>
                    </div>
                    <div className="widget widget-most-popular">
                      <div className="section-top-bar">
                       <h4>{uzLang?'ZAif mashhur':'Weakly popular'}</h4>
                      </div>   
                      <div className="list-post-item">
                        <img src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/list-post-img8.jpg"/>        
                        <div className="lt-post-desc">
                          <a href="#">Bullied by wedding guests over her dress</a>    
                          <p><i className="iconka"><ClockCircleOutlined /></i> 
                            {new Intl.DateTimeFormat("en-GB", {year: "numeric", month: "long",day: "2-digit"}).format()}
                          </p>                                                
                        </div>                                            
                      </div>
                      <div className="list-post-item">
                        <img src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/list-post-img8.jpg"/>        
                        <div className="lt-post-desc">
                          <a href="#">Bullied by wedding guests over her dress</a>    
                          <p><i className="iconka"><ClockCircleOutlined /></i> 
                            {new Intl.DateTimeFormat("en-GB", {year: "numeric", month: "long",day: "2-digit"}).format()}
                          </p>                                                
                        </div>                                            
                      </div>
                      <div className="list-post-item">
                        <img src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/list-post-img8.jpg"/>        
                        <div className="lt-post-desc">
                          <a href="#">Bullied by wedding guests over her dress</a>    
                          <p><i className="iconka"><ClockCircleOutlined /></i> 
                            {new Intl.DateTimeFormat("en-GB", {year: "numeric", month: "long",day: "2-digit"}).format()}
                          </p>                                                
                        </div>                                            
                      </div>
                      <div className="list-post-item">
                        <img src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/list-post-img8.jpg"/>        
                        <div className="lt-post-desc">
                          <a href="#">Bullied by wedding guests over her dress</a>    
                          <p><i className="iconka"><ClockCircleOutlined /></i> 
                            {new Intl.DateTimeFormat("en-GB", {year: "numeric", month: "long",day: "2-digit"}).format()}
                          </p>                                                
                        </div>                                            
                      </div>
                      <div className="list-post-item">
                        <img src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/list-post-img8.jpg"/>        
                        <div className="lt-post-desc">
                          <a href="#">Bullied by wedding guests over her dress</a>    
                          <p><i className="iconka"><ClockCircleOutlined /></i> 
                            {new Intl.DateTimeFormat("en-GB", {year: "numeric", month: "long",day: "2-digit"}).format()}
                          </p>                                                
                        </div>                                            
                      </div>
                      <div className="list-post-item">
                        <img src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/list-post-img8.jpg"/>        
                        <div className="lt-post-desc">
                          <a href="#">Bullied by wedding guests over her dress</a>    
                          <p><i className="iconka"><ClockCircleOutlined /></i> 
                            {new Intl.DateTimeFormat("en-GB", {year: "numeric", month: "long",day: "2-digit"}).format()}
                          </p>                                                
                        </div>                                            
                      </div>
                      <div className="list-post-item">
                        <img src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/list-post-img8.jpg"/>        
                        <div className="lt-post-desc">
                          <a href="#">Bullied by wedding guests over her dress</a>    
                          <p><i className="iconka"><ClockCircleOutlined /></i> 
                            {new Intl.DateTimeFormat("en-GB", {year: "numeric", month: "long",day: "2-digit"}).format()}
                          </p>                                                
                        </div>                                            
                      </div>
                      <div className="list-post-item">
                        <img src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/list-post-img8.jpg"/>        
                        <div className="lt-post-desc">
                          <a href="#">Bullied by wedding guests over her dress</a>    
                          <p><i className="iconka"><ClockCircleOutlined /></i> 
                            {new Intl.DateTimeFormat("en-GB", {year: "numeric", month: "long",day: "2-digit"}).format()}
                          </p>                                                
                        </div>                                            
                      </div>
                  </div>
                  <div className="widget widget-banner">
                    <a href="#">
                      <img src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/banner/header-sidebar-banner1.jpg"/>
                    </a>
                  </div>
                  <div className="widget widget-subscribe">
                    <h4>{uzLang?'Yangilanib turing':'Stay Updated'}</h4>
                    <p>{uzLang?"So'nggi yangiliklar va voqealar haqidagi xabarlarni olish uchun bizning xabarnomamizga yoziling!!":"Sign up for our newsletter to receive the latest news and event postings!!"}</p>
                    <Form  name="horizontal_login" layout="inline">
                      <Form.Item name={['user', 'email']}  rules={[{ type: 'email' }]}>
                        <Input placeholder={uzLang?"Emailingiz":"YOUR EMAIL"}/>
                      </Form.Item>
                      <Button  className="btn-email"  htmlType="submit"><MailOutlined /></Button>
                    </Form>
                  </div>
                </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="fitness-area">
            <div className="container">
              <div className="section-top-bar">
                <h4>{uzLang?"mashg'ulotlar":"Fitness"}</h4>
              </div>
              <div className="ft-slider-area">
                <Row gutter={[16, 16]}>
                    <Col lg={12} md={12} sm={24}>
                    <div className="ft-slider-item">
                        <img src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/slider-img/ft-slider-img1.jpg"/>
                        <div className="ft-slider-text">
                           <a className="sl-post-cat" href="#">world</a><br/>
                           <a href="#" className="sl-post-title">We Tried The New Taco Bell Chicken Nuggets And Here's What Happened</a>
                           <div className="clearfix"></div> 
                           <div className="meta-tag-area">
                              <span><i className="iconka"><ClockCircleOutlined /></i>
                                {new Intl.DateTimeFormat("en-GB", {year: "numeric",month: "long",day: "2-digit"}).format()}
                               </span>
                              <span><i className="iconka"><HeartOutlined /></i>124</span>
                              <span><i className="iconka"><CommentOutlined /></i>16</span>
                           </div>                                               
                        </div>
                      </div>
                    </Col>
                    <Col lg={12} md={12} sm={24}>
                      <div className="ft-slider-item">
                        <img src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/slider-img/ft-slider-img2.jpg"/>
                        <div className="ft-slider-text">
                           <a className="sl-post-cat" href="#">Internet</a><br/>
                           <a href="#" className="sl-post-title">Cook A Stir-Fry And We’ll Guess Your Age And Relationship Status</a>
                           <div className="clearfix"></div> 
                           <div className="meta-tag-area">
                              <span><i className="iconka"><ClockCircleOutlined /></i>
                                {new Intl.DateTimeFormat("en-GB", {year: "numeric",month: "long",day: "2-digit"}).format()}
                               </span>
                              <span><i className="iconka"><HeartOutlined /></i>124</span>
                              <span><i className="iconka"><CommentOutlined /></i>16</span>
                           </div>                                               
                        </div>
                      </div>
                    </Col>
                </Row>
              </div>
            </div>
          </div>
          <div className="short-news-area">
            <div className="container">
              <Row gutter={[16, 16]}>
                <Col lg={6} md={6} sm={24}>
                  <div className="short-news">
                    <h4 className="sn-title">{uzLang?'dunyo':'World'}</h4>
                    <p>{uzLang?"Oilaviy uslubda Italyancha Kechki Ovqatga Buyurtma Bering va Biz ularning Qancha Bo'lishini Taxmin Qilamiz":"Order A Family-Style Italian Dinner And We'll Predict How Many"}</p>
                    <span className="line"></span>
                    <p>{uzLang?"Restoran rezervasyonlaringizni dastur orqali boshqara olasizmi?":"Can You Manage your Restaurant Reservations on an App?"}</p>
                  </div>                                                            
                </Col>
                <Col lg={6} md={6} sm={24}>
                  <div className="short-news">
                    <h4 className="sn-title">{uzLang?'siyosat':'Politcs'}</h4>
                    <p>{uzLang?"Oilaviy uslubda Italyancha Kechki Ovqatga Buyurtma Bering va Biz ularning Qancha Bo'lishini Taxmin Qilamiz":"Order A Family-Style Italian Dinner And We'll Predict How Many"}</p>
                    <span className="line"></span>
                    <p>{uzLang?"Restoran rezervasyonlaringizni dastur orqali boshqara olasizmi?":"Can You Manage your Restaurant Reservations on an App?"}</p>
                  </div>                                                            
                </Col>
                <Col lg={6} md={6} sm={24}>
                  <div className="short-news">
                    <h4 className="sn-title">{uzLang?'Biznes':'Business'}</h4>
                    <p>{uzLang?"Oilaviy uslubda Italyancha Kechki Ovqatga Buyurtma Bering va Biz ularning Qancha Bo'lishini Taxmin Qilamiz":"Order A Family-Style Italian Dinner And We'll Predict How Many"}</p>
                    <span className="line"></span>
                    <p>{uzLang?"Restoran rezervasyonlaringizni dastur orqali boshqara olasizmi?":"Can You Manage your Restaurant Reservations on an App?"}</p>
                  </div>                                                            
                </Col>
                <Col lg={6} md={6} sm={24}>
                  <div className="short-news">
                    <h4 className="sn-title">{uzLang?'ilm-fan':'Science'}</h4>
                    <p>{uzLang?"Oilaviy uslubda Italyancha Kechki Ovqatga Buyurtma Bering va Biz ularning Qancha Bo'lishini Taxmin Qilamiz":"Order A Family-Style Italian Dinner And We'll Predict How Many"}</p>
                    <span className="line"></span>
                    <p>{uzLang?"Restoran rezervasyonlaringizni dastur orqali boshqara olasizmi?":"Can You Manage your Restaurant Reservations on an App?"}</p>
                  </div>                                                            
                </Col>
              </Row>
              <div className="h1-shrt-connected">
                <a href="#"><i className="social-connected"><FacebookOutlined/></i>Facebook</a>
                <a href="#"><i className="social-connected"><TwitterOutlined/></i>Twitter</a>
                <a href="#"><i className="social-connected"><GooglePlusOutlined/></i>Google+</a>
                <a href="#"><i className="social-connected"><LinkedinOutlined /></i>Linkedin</a>
                <a href="https://instagram.com/nazarov_behruzbek"><i className="social-connected"><InstagramOutlined/></i>Instagram</a>
                <a href="#"><i className="social-connected"><YoutubeOutlined/></i>YouTube</a>
              </div>
            </div>
          </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    uzLang: state.uzLang.uzLang,
  };
};
export default connect(mapStateToProps,{enLanguage,uzLanguage})(
    Home_page
);
