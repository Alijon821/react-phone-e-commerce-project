import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
// import 'react-multi-carousel/lib/styles.css';
import "react-multi-carousel/lib/styles.css";
import '../components/carusel.css';
import SliderImg1 from '../images/ltv-img1.jpg';
import SliderImg2 from '../images/ltv-img2.jpg';
import SliderImg3 from '../images/ltv-img3.jpg';
import SliderImg4 from '../images/ltv-img4.jpg';
import { ClockCircleOutlined, EyeOutlined, HeartOutlined, PlayCircleOutlined } from '@ant-design/icons';
// import MyModal from '../components/modal-video';
import '../components/modal-video.css';
import ModalVideo from 'react-modal-video';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};
// const CustomRightArrow = ({ onClick, ...rest }) => {
//     const {
//         onMove,
//         carouselState: { currentSlide, deviceType }
//     } = rest;
//     // onMove means if dragging or swiping in progress.
//     return <button onClick={() => onClick()} />;
// };
// <Carousel customRightArrow={<CustomRightArrow />} />;



class MyCarusel extends Component {


    constructor () {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal () {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <div className='zz'>
                <div className='posAbs'>
                    <span className='caruselHeader'>LETEST VIDEO</span>
                    <a className='viewAll' href=''>view all</a>
                    <div className='clear'></div>
                    <div className='ccc'>

                        <Carousel
                            className='container qq'
                            swipeable={true}
                            draggable={true}
                            showDots={true}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                            // autoPlaySpeed={4000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            deviceType={this.props.deviceType}
                            dotListClass="custom-dot-list-style"
                        //   itemClass="carousel-item-padding-40-px"
                        >
                            <div className='carusel-Item' >
                                <img style={{ position: 'relative' }} src={SliderImg1} />
                                <a className='PlayA' onClick={this.openModal} href='#' style={
                                    {
                                        position: 'absolute',
                                        top: '50px',
                                        right: '42%',
                                    }
                                }><PlayCircleOutlined  className='playIcon' style={{ fontSize: '50px', color: 'black' }} /></a>
                                <span><ClockCircleOutlined className='iconClock' />  Nov 1,2020</span>
                                <span><EyeOutlined className='iconClock' /> 15k</span>
                                <span><HeartOutlined className='iconClock' /> 278</span>
                                <div>
                                    <br />
                                    <a className='sliderInfo' href='#'>
                                        <p>Japan in four Gorgeous <br /> Pokemon-Themed Colors</p>
                                    </a>
                                </div>
                            </div>
                            <div className='carusel-Item' >
                                <img src={SliderImg2} />
                                <a href='#' className='PlayA' style={
                                    {
                                        position: 'absolute',
                                        top: '50px',
                                        right: '42%',
                                    }
                                }><PlayCircleOutlined onClick={this.openModal} className='playIcon' style={{ fontSize: '50px', color: 'black' }} /></a>
                                <span><ClockCircleOutlined className='iconClock' />  Nov 1,2020</span>
                                <span><EyeOutlined className='iconClock' /> 15k</span>
                                <span><HeartOutlined className='iconClock' /> 278</span>
                                <div>
                                    <br />
                                    <a className='sliderInfo' href='#'>
                                        <p>Japan in four Gorgeous <br /> Pokemon-Themed Colors</p>
                                    </a>
                                </div>
                            </div>
                            <div className='carusel-Item' >
                                <img src={SliderImg3} />
                                <a href='#' className='PlayA' style={
                                    {
                                        position: 'absolute',
                                        top: '50px',
                                        right: '42%',
                                    }
                                }><PlayCircleOutlined onClick={this.openModal} className='playIcon' style={{ fontSize: '50px', color: 'black' }} /></a>
                                <span><ClockCircleOutlined className='iconClock' />  Nov 1,2020</span>
                                <span><EyeOutlined className='iconClock' /> 15k</span>
                                <span><HeartOutlined className='iconClock' /> 278</span>
                                <div>
                                    <br />
                                    <a className='sliderInfo' href='#'>
                                        <p>Japan in four Gorgeous <br /> Pokemon-Themed Colors</p>
                                    </a>
                                </div>
                            </div>
                            <div className='carusel-Item' >
                                <img src={SliderImg4} />
                                <a href='#' className='PlayA' style={
                                    {
                                        position: 'absolute',
                                        top: '50px',
                                        right: '42%',
                                    }
                                }><PlayCircleOutlined onClick={this.openModal} className='playIcon' style={{ fontSize: '50px', color: 'black' }} /></a>
                                <span><ClockCircleOutlined className='iconClock' />  Nov 1,2020</span>
                                <span><EyeOutlined className='iconClock' /> 15k</span>
                                <span><HeartOutlined className='iconClock' /> 278</span>
                                <div>
                                    <br />
                                    <a className='sliderInfo' href='#'>
                                        <p>Japan in four Gorgeous <br /> Pokemon-Themed Colors</p>
                                    </a>
                                </div>
                            </div>
                        </Carousel>
                        <div className='bg-black'>

                        </div>
                    </div>
                </div>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
            </div>
        )
    }
}
export default MyCarusel;