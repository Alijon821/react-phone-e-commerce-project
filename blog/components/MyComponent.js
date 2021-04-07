import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../components/MyComponentStyle.css'
import { baza } from '../myJson/myJson';
import { ClockCircleOutlined, HeartOutlined, MessageOutlined } from '@ant-design/icons';
import '../../../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import {connect} from "react-redux";
import {enLanguage} from "../../redux/Actions/enLanguage";
import {uzLanguage} from "../../redux/Actions/uzLanguage";


class MyComponent extends Component {
  render() {
      const {uzLang}=this.props;
    return (
      <div>
        <div className='container'>
          <p className='ft-header'>{uzLang?"MASHG'ULOTLAR":"FITNESS"}</p>
          {
            baza.map(item => (
              <div>
                <div className='first_page'>
                  <div className='Slider-Item'>
                    <img src={item.img} />
                    <div className='Text_slider'>
                      <a className='sl-post-cat' href='#'>{item.link}</a>
                      <br />
                      <a  className='sl-post-title' href='#'>{item.title}</a>
                      <div className='clearfix'></div>
                      <div className='meta-tag-area'>
                        <span><ClockCircleOutlined style={{ marginRight: '8px', fontWeight: '800' }} />{item.deta}</span>
                        <span><HeartOutlined style={{ margin: '0 8px', fontWeight: '800' }} />{item.like}</span>
                        <span><MessageOutlined style={{ margin: '0 8px', fontWeight: '800' }} />{item.message}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
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
    MyComponent
);