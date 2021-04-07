import React from 'react';
import 'antd/dist/antd.css';
import '../Css/third.css';
import {Button, Col, Row} from "antd";
import {FaCircle,FaComment,FaHeart,FaEye} from "react-icons/fa";
import {connect} from "react-redux";
import {enLanguage} from "../redux/Actions/enLanguage";
import {uzLanguage} from "../redux/Actions/uzLanguage";
class Third extends React.Component{
    render() {
        const {uzLang}=this.props;
        return(
            <React.Fragment>
              <div className="containerr">
                  <div className="nameDiv"><h4>{uzLang?'TELEVIDENIYA YANGILIKLARI':'coverages'} <p><hr/></p></h4></div>
                  <Row>
                      <Col xs={24} sm={24} md={12} lg={8}><div className="coverages-item" style={{marginBottom:'20px',position:'relative',boxSizing:'border-box',marginRight:'10px',width:'90%', backgroundColor:'#f5f5f5',boxShadow:'1px 2px 5px 1px  rgba(0, 0, 0,0.3)'}}>
                          <div className="coverages-item_text" >
                              <div className="about_bloger">
                                  <img className="bloger_img" style={{width:'100px',float:'left',borderRadius:'100%',padding:'20px',marginLeft:'15px',marginTop:'10px'}} src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/post-author-img.jpg" alt="bloger image"/>
                                  <div className="bloger_info">
                                      <a href="#" style={{fontSize:'16px',padding:'20px 0x',letterSpacing:'0.01em',fontWeight:'500',lineHeight:'19px',paddingTop:'35px',color:'#000000',fontFamily:'Montserrat, sans-serif',position:'absolute'}}> Marina Fang</a>
                                      <p style={{color:'#909090',paddingTop:'60px'}}>Associate Politics Editor, The Huffington Post</p>
                                  </div>

                              </div>
                              <div className="svager" style={{paddingLeft:'30px',paddingTop:'40px'}}> <div className="first_little_info" style={{fontSize:'23px'}} > <span className="first_icon">World <FaCircle/> </span></div>
                              <div className="svag_time" style={{fontSize:'14px',marginLeft:'120px',position:'absolute',marginTop:'-27px',paddingLeft:'15px', height:'20px',borderLeft:' 2px solid #C5C5C5'}}><p style={{fontSize:'15px',paddingLeft:'2px'}}>9:05 Pm</p></div></div>
                             <div style={{paddingLeft:'25px',position:'absolute'}}> <a className="cvg-title" style={{fontSize:'20px',textAlign:'justify',color:'#000000',fontWeight:'400',letterSpacing:'0.03em',width:'200px'}} href="#">Pro-Gun Democrat Ignores Of Gun   Violence Questions </a></div>
                             <div style={{paddingLeft:'25px',paddingTop:'80px',fontSize:'16px'}} className="coverages-icons"> By johan
                             <span style={{color:'#999999',paddingLeft:'20px',fontSize:'15px'}}><FaComment/>13</span>
                             <span style={{color:'#999999',paddingLeft:'20px',fontSize:'15px'}}><FaHeart/>23</span>
                             <span style={{color:'#999999',paddingLeft:'20px',fontSize:'15px'}}><FaEye/>138</span>
                             </div>
                              <img style={{width:'100%',paddingTop:'20px'}} src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/coverage-area/blog-post-img1.jpg" alt="error"/>
                          </div>
                      </div></Col>
                      <Col xs={24} sm={24} md={12} lg={8}><div className="coverages-item" style={{marginBottom:'20px',marginRight:'10px',width:'90%',position:'relative',boxSizing:'border-box', backgroundColor:'#f5f5f5',boxShadow:'1px 2px 5px 1px  rgba(0, 0, 0,0.3)'}}>
                          <div className="coverages-item_text" >
                              <div className="about_bloger">
                                  <img className="bloger_img" style={{width:'100px',float:'left',borderRadius:'100%',padding:'20px',marginLeft:'15px',marginTop:'10px'}} src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/post-author-img.jpg" alt="bloger image"/>
                                  <div className="bloger_info">
                                      <a href="#" style={{fontSize:'16px',padding:'20px 0x',letterSpacing:'0.01em',fontWeight:'500',lineHeight:'19px',paddingTop:'35px',color:'#000000',fontFamily:'Montserrat, sans-serif',position:'absolute'}}> Susan Blumenthal</a>
                                      <p style={{color:'#909090',paddingTop:'60px'}}>Associate Politics Editor, The Huffington Post</p>
                                  </div>

                              </div>
                              <div className="svager" style={{paddingLeft:'30px',paddingTop:'40px'}}> <div className="first_little_info" style={{fontSize:'23px',backgroundColor:'#82B541'}} > <span className="first_icon">Healthy <FaCircle/> </span></div>
                                  <div className="svag_time" style={{fontSize:'14px',marginLeft:'120px',position:'absolute',marginTop:'-27px',paddingLeft:'15px', height:'20px',borderLeft:' 2px solid #C5C5C5'}}><p style={{fontSize:'15px',paddingLeft:'2px'}}>9:05 Pm</p></div></div>
                              <div style={{paddingLeft:'25px',position:'absolute'}}> <a className="cvg-title" style={{fontSize:'20px',textAlign:'justify',color:'#000000',fontWeight:'400',letterSpacing:'0.03em'}} href="#">5 Major Breast Cancer Advancements  Need To Know </a></div>
                              <div style={{paddingLeft:'25px',paddingTop:'80px',fontSize:'16px'}} className="coverages-icons"> By sitesao
                                  <span style={{color:'#999999',paddingLeft:'20px',fontSize:'15px'}}><FaComment/>13</span>
                                  <span style={{color:'#999999',paddingLeft:'20px',fontSize:'15px'}}><FaHeart/>23</span>
                                  <span style={{color:'#999999',paddingLeft:'20px',fontSize:'15px'}}><FaEye/>138</span>
                              </div>
                              <img style={{width:'100%',paddingTop:'20px'}} src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/coverage-area/blog-post-img2.jpg" alt="error"/>
                          </div>
                      </div></Col>
                      <Col xs={24} sm={24} md={12} lg={8}><div className="coverages-item" style={{marginBottom:'50px',position:'relative',boxSizing:'border-box',width:'90%', backgroundColor:'#f5f5f5',boxShadow:'1px 2px 5px 1px  rgba(0, 0, 0,0.3)'}}>
                          <div className="coverages-item_text" >
                              <div className="about_bloger">
                                  <img className="bloger_img" style={{width:'100px',float:'left',borderRadius:'100%',padding:'20px',marginLeft:'15px',marginTop:'10px'}} src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/post-author-img.jpg" alt="bloger image"/>
                                  <div className="bloger_info">
                                      <a href="#" style={{fontSize:'16px',padding:'20px 0x',letterSpacing:'0.01em',fontWeight:'500',lineHeight:'19px',paddingTop:'35px',color:'#000000',fontFamily:'Montserrat, sans-serif',position:'absolute'}}> Michael Moller</a>
                                      <p style={{color:'#909090',paddingTop:'60px'}}>Associate Politics Editor, The Huffington Post</p>
                                  </div>

                              </div>
                              <div className="svager" style={{paddingLeft:'30px',paddingTop:'40px'}}> <div className="first_little_info" style={{fontSize:'23px',backgroundColor:'#00ABDC'}} > <span className="first_icon">Hi-Tech <FaCircle/> </span></div>
                                  <div className="svag_time" style={{fontSize:'14px',marginLeft:'120px',position:'absolute',marginTop:'-27px',paddingLeft:'15px', height:'20px',borderLeft:' 2px solid #C5C5C5'}}><p style={{fontSize:'15px',paddingLeft:'2px'}}>9:05 Pm</p></div></div>
                              <div style={{paddingLeft:'25px',position:'absolute'}}> <a className="cvg-title" style={{fontSize:'20px',textAlign:'justify',color:'#000000',fontWeight:'400',letterSpacing:'0.03em'}} href="#">New Online University To Offer Free Classes To Refugees </a></div>
                              <div style={{paddingLeft:'25px',paddingTop:'80px',fontSize:'16px'}} className="coverages-icons"> By johan
                                  <span style={{color:'#999999',paddingLeft:'20px',fontSize:'15px'}}><FaComment/>13</span>
                                  <span style={{color:'#999999',paddingLeft:'20px',fontSize:'15px'}}><FaHeart/>23</span>
                                  <span style={{color:'#999999',paddingLeft:'20px',fontSize:'15px'}}><FaEye/>138</span>
                              </div>
                              <img style={{width:'100%',paddingTop:'20px'}} src="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/img/post-img/coverage-area/blog-post-img3.jpg" alt="error"/>
                          </div>
                      </div></Col>


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
    Third
);