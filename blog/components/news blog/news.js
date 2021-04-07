import React, {Component} from 'react';

import '../news blog/css/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { data } from "./newsData";
import {connect} from "react-redux";
import {enLanguage} from "../../../redux/Actions/enLanguage";
import {uzLanguage} from "../../../redux/Actions/uzLanguage";
import {GetLanguage} from "../../../Utilitil";

class News extends Component {
  render() {
    const {uzLang}=this.props;
    return (
      <div>
        <div className="fitness-area clm2-entertainment">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="section-top-bar">
                  <h4>{GetLanguage()?"Entertainment":"O'yin-kulgu"}</h4>
                </div>
              </div>
            </div>
            <div className="row">
              {
                data.map(item => {
                  return (
                      <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="trd-post-item">
                        {item.img}
                        <div className="trd-post-info">
                          <div className="trd-desc-crumbs crmbs-one">
                            <span className="trd-cat">{item.type} {item.icon1}</span>
                            <span>{item.icon2} {item.month} {item.date}</span>
                            <span>{item.icon3}{item.message}</span>
                          </div>
                          <a href="#" className="trd-post-title">{item.title}</a>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    uzLang: state.uzLang.uzLang,
  };
};
export default connect(mapStateToProps,{enLanguage,uzLanguage})(
    News
);
