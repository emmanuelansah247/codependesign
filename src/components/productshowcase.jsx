import '../internal_css/productshowcase.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {useNavigate, useParams} from 'react-router-dom';
import DataForSlideImages from '../internal_js/dataslidingpictures';

function ProductShowcase(){

    const swiperPagination = useRef(null)
    const sliderRef = useRef(null);
    const navigate = useNavigate();
    const {imgkey} = useParams();
    let correctkey = parseInt(imgkey) - 1;
    const numberofslideimages = DataForSlideImages.length;
    const [statePaginationNumber, setStatePaginationNumber] = useState(parseInt(imgkey));
    const [imgurl, setimgurl] = useState(DataForSlideImages[correctkey].imgurl);

    function handlePrev(){
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
        const checkslidenumber = statePaginationNumber - 1;
        if (checkslidenumber < 1) return;
        correctkey = checkslidenumber - 1;
        setimgurl(DataForSlideImages[correctkey].imgurl);
        setStatePaginationNumber(checkslidenumber);
    }

    function handleNext(){
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
        const checkslidenumber = statePaginationNumber + 1;
        if (checkslidenumber > numberofslideimages) return;
        correctkey = checkslidenumber - 1;
        setimgurl(DataForSlideImages[correctkey].imgurl);
        setStatePaginationNumber(checkslidenumber);
    }

    function handleBackArrowClick(){
        navigate("/");
    }

    function changeSwiperColors(sld){
        document.body.setAttribute("data-sld", sld.realIndex);
    }

    return(

        <div className="product-showcase">
                <div className="container">
                    <div className="header">
                        <a className="menu-icon" href="http://localhost:3000/">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </a>
                        <img alt=""  className="logo" src="https://cdn.shopify.com/s/files/1/0689/1443/files/CLOSCA-LOGO-WEB-BLACK_130x@2x.png?v=1559116993" />
                        <div className="header-menu">
                            <a href="http://localhost:3000/">Mask</a>
                            <a href="http://localhost:3000/">Helmet</a>
                            <a href="http://localhost:3000/">Bottle</a>
                            <a href="http://localhost:3000/">Accessories</a>
                        </div>
                        <div className="header-icons">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M437.02 330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521 243.251 404 198.548 404 148 404 66.393 337.607 0 256 0S108 66.393 108 148c0 50.548 25.479 95.251 64.262 121.962-36.21 12.495-69.398 33.136-97.281 61.018C26.629 379.333 0 443.62 0 512h40c0-119.103 96.897-216 216-216s216 96.897 216 216h40c0-68.38-26.629-132.667-74.98-181.02zM256 256c-59.551 0-108-48.448-108-108S196.449 40 256 40s108 48.448 108 108-48.449 108-108 108z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208.955 208.955">
                                <path d="M190.85 200.227L178.135 58.626a7.5 7.5 0 00-7.47-6.829h-26.221V39.971c0-22.04-17.93-39.971-39.969-39.971-22.038 0-39.966 17.931-39.966 39.971v11.826H38.27a7.5 7.5 0 00-7.47 6.829L18.035 200.784a7.5 7.5 0 007.47 8.17h157.946a7.5 7.5 0 007.399-8.727zM79.509 39.971c0-13.769 11.2-24.971 24.967-24.971 13.768 0 24.969 11.202 24.969 24.971v11.826H79.509V39.971zm-45.8 153.984L45.127 66.797h19.382v13.412a7.5 7.5 0 007.5 7.5 7.5 7.5 0 007.5-7.5V66.797h49.936v13.412a7.5 7.5 0 007.5 7.5 7.5 7.5 0 007.5-7.5V66.797h19.364l11.418 127.158H33.709z" />
                            </svg>
                        </div>
                    </div>
                    
                    <Swiper ref={sliderRef} className="mySwiper" onSlideChange={changeSwiperColors}>
                        <div className="main-wrapper swiper-wrapper">

                            <SwiperSlide className="main swiper-slide" id="beach">
                                <div className="left-side">
                                    <div className="main-wrapper">
                                        <h3 className="main-header">Closca Bottle</h3>
                                        <h1 className="main-title">Beach</h1>
                                        <h2 className="main-subtitle">€ 39.90</h2>
                                    </div>
                                    <div className="main-content">
                                        <div className="main-content__title">In 20 years, there could be more plastic in our oceans than fish.</div>
                                        <div className="main-content__subtitle">Plastic pollution injures more than 100.000 marine animals every year.It takes around 450 years for one plastic bottle to decompose.</div>
                                        <div className="more-menu">
                                            Shop Now
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <line x1="-5" y1="12" x2="19" y2="12" />
                                                <line x1="15" y1="16" x2="19" y2="12" />
                                                <line x1="15" y1="8" x2="19" y2="12" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="center">
                                    <div className="right-side__img">
                                        <img alt=""  className="bottle-bg" src={imgurl} />
                                        <img alt=""  className="bottle-img" src="https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/bottle_beach.png?v=11784267851598469514" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="main swiper-slide" id="savanna">
                                <div className="left-side">
                                    <div className="main-wrapper">
                                        <h3 className="main-header">Closca Bottle</h3>
                                        <h1 className="main-title">Savanna</h1>
                                        <h2 className="main-subtitle">€ 39.90</h2>
                                    </div>
                                    <div className="main-content">
                                        <div className="main-content__title">The Earth's area affected by desertification is approx 11 times India’s size.
                                        </div>
                                        <div className="main-content__subtitle">The Savannas act as a carbon sink, absorbing CO2 from the atmosphere and helping to maintain the balance of global temperatures.</div>
                                        <div className="more-menu">
                                            Shop Now
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <line x1="-5" y1="12" x2="19" y2="12" />
                                                <line x1="15" y1="16" x2="19" y2="12" />
                                                <line x1="15" y1="8" x2="19" y2="12" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="center">
                                    <div className="right-side__img">
                                        <img alt=""  className="bottle-bg" src={imgurl} />
                                        <img alt=""  className="bottle-img" src="https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/savanna_OK.png?v=4783820813181844557" />
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="main swiper-slide" id="glacier">
                                <div className="left-side">
                                    <div className="main-wrapper">
                                        <h3 className="main-header">Closca Bottle</h3>
                                        <h1 className="main-title">Glacier</h1>
                                        <h2 className="main-subtitle">€ 39.90</h2>
                                    </div>
                                    <div className="main-content">
                                        <div className="main-content__title">Glaciers contain 75% of the World's freshwater.
                                        </div>
                                        <div className="main-content__subtitle">The effects of melting ice glaciers are biodiversity loss, the rising of the sea level and the deficiency of freshwater, among others.</div>
                                        <div className="more-menu">
                                            Shop Now
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <line x1="-5" y1="12" x2="19" y2="12" />
                                                <line x1="15" y1="16" x2="19" y2="12" />
                                                <line x1="15" y1="8" x2="19" y2="12" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="center">
                                    <div className="right-side__img">
                                        <img alt=""  className="bottle-bg" src={imgurl} />
                                        <img alt=""  className="bottle-img" src="https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/Glacier_OK.png?v=7185877315400411030" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="main swiper-slide" id="coral">
                                <div className="left-side">
                                    <div className="main-wrapper">
                                        <h3 className="main-header">Closca Bottle</h3>
                                        <h1 className="main-title">Coral</h1>
                                        <h2 className="main-subtitle">€ 39.90</h2>
                                    </div>
                                    <div className="main-content">
                                        <div className="main-content__title">We will have lost 60% of our coral reefs by 2030.
                                        </div>
                                        <div className="main-content__subtitle">Coral reefs are essential to humans, as they protect the shorelines and are a source of
                                            nutrients and habitat for thousands of marine species.</div>
                                        <div className="more-menu">
                                            Shop Now
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <line x1="-5" y1="12" x2="19" y2="12" />
                                                <line x1="15" y1="16" x2="19" y2="12" />
                                                <line x1="15" y1="8" x2="19" y2="12" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="center">
                                    <div className="right-side__img">
                                        <img alt="" className="bottle-bg" src={imgurl}  />
                                        <img alt=""  className="bottle-img" src="https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/Coral_OK.png?v=14596995446202437119" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                        <div className='push-right'>
                            <div className='pagination'>
                                    {statePaginationNumber} / {numberofslideimages}
                            </div>

                            <div className='arrow-link'>

                            <button class="menu__back unbutton" onClick={handleBackArrowClick} > 
                                            <svg width="10" height="182" viewBox="0 0 10 121" preserveAspectRatio="xMidYMin meet">
                                                <path d="M5 0 .5 9h9L5 0Zm.5 120.5V8h-1v113h1v-.5Z"></path>
                                            </svg> 
                            </button>

                            </div>
                        </div>
                    <div className="button-wrapper">
                        <div className="swiper-button swiper-prev-button" onClick={handlePrev}>
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </div>
                        <div className="swiper-button swiper-next-button" onClick={handleNext} >
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </div>
                    </div>
            </div>
        </div>

    );
}


export default ProductShowcase;
