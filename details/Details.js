import React from 'react';
import Header from "./header/Header";
import 'antd/dist/antd.css';
import Menu from "./menu/Menu";
import Body from "./body/Body";
import Pages from "./page/Pages";
import Texts from "./Texts/Texts";
import Tags from "./Tags/Tags";
import Cards from "./Cards/Cards";
import Coment from "./Coment/Coment";
import {connect, useSelector} from "react-redux";
import {enLanguage} from "../redux/Actions/enLanguage";
import {uzLanguage} from "../redux/Actions/uzLanguage";
function Details(props){
    const uzLang=useSelector(props=>props.uzLang)
    return(
        <div className="-container">
            <Body/>
           <Pages/>
            <Texts/>
            <Tags/>
            <Cards/>
            <Coment/>
        </div>
    )
}
const mapStateToProps = (state) => {

    return {
        uzLang: state.uzLang.uzLang,
    };
};
export default connect(mapStateToProps,{enLanguage,uzLanguage})(
    Details
)
