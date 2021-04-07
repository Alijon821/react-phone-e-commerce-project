import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/error.css';

class Error extends Component {
  render() {
    return (
      <div>
        <div className="error-area">
          <div className="error-bg"></div>
          <div className="error-content">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="errors">
                    <h1>404</h1>
                    <h5>THIS’S NOT THE WEB PAGE YOUR’RE LOOKING FOR</h5>
                    <div className="please-try">
                      <p>Please try one of the following pages</p>
                      <a className="please-try-submit blue-button-submit" href="index.html">Back To Homepage</a>
                    </div>
                    <div className="error-search">
                      <input className="search-input" type="text" placeholder="Search.." />
                        <input className="search-submit" type="submit" value="SEARCH" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="error-area-bottom">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <p>Copyright @2017<a target="_blank" href="#"> Newsupdate </a>All right reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Error;
