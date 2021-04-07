import React, { Component } from 'react'
import{Row,Col} from 'antd'

export default class Carousel extends Component {
    render() {
        const {img,text,btnText,color} = this.props;
        return (
            <div>

                <Row className="mt-5">
                    <Col  md={20} offset={1} sm={24}>
                        <img className="CarouselImg" src={img} alt="error image" />
                        <p className="textCarouselImg"><a className="aHrefCarouselImg" href="#">{text}</a></p>
                        <div className="socialDivInImg" style={{backgroundColor:color}}><a className="aHrefInDivImg" href="#">{btnText}</a></div>
                        <div className="ShadowOpacityIMG1"></div>
                        <div className="ShadowOpacityIMG2"></div>

                    </Col>
                </Row>


            </div>
        )
    }
}
