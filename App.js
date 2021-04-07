import React,{Component} from 'react';
import 'antd/dist/antd.css';
import {Sports} from "./MenuPage/sidebarmenu";
import { BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom'
import Second from "./Components/second";
import Third from "./Components/third";
import First from "./Components/first";
import Menupage from "./MenuPage/Menupage";
import Footer from "./footer/Footer";
import MyCarusel from "./carousel/carusel2";
import MyComponent from "./blog/components/MyComponent";
import News from "./news blog/news";
import Error from "./news blog/error";
import ContactInfo from "./contact/contactInfo/ContactInfo";
import Maps from "./contact/map/Maps";
import Mountain from "./mountains/Components/mountain";
import Home_page from "./HomePage/Home_page";
import Details from "./details/Details";
import AboutUs from "./about_us/AboutUs";
import {GetLanguage} from "./Utilitil";
import {connect} from "react-redux";
import {enLanguage} from "./redux/Actions/enLanguage";
import {uzLanguage} from "./redux/Actions/uzLanguage";
import Sportpage from "./sports page/sportsPage";
class App extends Component{

    componentDidMount() {

        if (!GetLanguage()){
             this.props.uzLanguage();
        }else {
            this.props.enLanguage()
        }

    }

    render(){

    return(
        <React.Fragment>
  <Router>
      <Switch>
          <Route path="/home/homepage">
              <Menupage/>
              <First/>
              <Second/>
              <Third/>
              <Home_page/>
              <MyCarusel/>
              <Footer/>
          </Route>
          <Route path="/home/blogcolumn">
              <Menupage/>
              <MyComponent/>
              <News/>
              <MyCarusel/>
              <Footer/>
          </Route>
          <Route path="/home/error">
              <Error/>
          </Route>
          <Route path="/home/travel">
              <Menupage/>
              <Maps/>
              <Footer/>
          </Route>
          <Route path="/home/contact">
              <Menupage/>
              <Maps/>
              <ContactInfo/>
              <Footer/>
          </Route>
          <Route path="/home/maintenance">
              <Menupage/>
              <Mountain/>
              <Footer/>
          </Route>
          <Route path="/home/blogdetails/withsidebar">
              <Menupage/>
              <Details/>
              <Footer/>
          </Route>
          <Route path="/home/aboutus">
              <Menupage/>
              <AboutUs/>
              <Footer/>
          </Route>
          <Route path="/home/futbol">
              <Menupage/>
              <Sportpage/>
              <Footer/>
          </Route>
          <Redirect from="/"  to="/home/homepage"/>


      </Switch>
  </Router>








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
    App
)
