import '../internal_css/leftsidemenu.css';
import SecondSlidingTextHover from './topwrittentext';
import FirstSlidingPictures from './firstslidingpictures';
import MenuBelowWrittenText from './menubelowwrittentext';
import { useState } from 'react';

function LeftSideMenu(){

    const [activeSlide, setActiveSlide] = useState("Slide1");

    function handLinkOnClick(e){
        const temp = e.target.getAttribute('id');
        setActiveSlide(temp);

    }

    function setRadioLinkSlide(value){
        setActiveSlide(value);
        const radio_links = document.querySelectorAll('input[name="slider"]');
        radio_links.forEach(element => {
          if(element.getAttribute('id').toLowerCase() == value.toLowerCase()){
                element.click();
          }
        });
    }


    return(
        
        <div className="side-menu-pane">

            
            <MenuBelowWrittenText onChange ={(value) => setRadioLinkSlide(value)}/>

            <div className="contenedor">
            <form>
                <input type="radio" id="Slide1" onClick={(e) => handLinkOnClick(e)} name="slider" titulo="Home"  className={activeSlide} />
                <input type="radio" id="Slide2" onClick={(e) => handLinkOnClick(e)} name="slider" titulo="About" className={activeSlide} />
                <input type="radio" id="Slide3" onClick={(e) => handLinkOnClick(e)} name="slider" titulo="Services" className={activeSlide} /> 
                <input type="radio" id="Slide4" onClick={(e) => handLinkOnClick(e)} name="slider" titulo="Features" className={activeSlide} />
                <input type="radio" id="Slide5" onClick={(e) => handLinkOnClick(e)} name="slider" titulo="Products" className={activeSlide}/>
                <input type="radio" id="Slide6" onClick={(e) => handLinkOnClick(e)} name="slider" titulo="Blog" className={activeSlide} />
                <input type="radio" id="Slide7" onClick={(e) => handLinkOnClick(e)} name="slider" titulo="Privacy" className={activeSlide} />
                
                <div className="labels">
                    <label className="Slide" htmlFor="Slide1" id="Slide1">
                        <div className="content">
                            <FirstSlidingPictures/>
                        </div>
                    </label>
                    <label className="Slide" htmlFor="Slide2" id="Slide2">
                        <div className="content">
                        <h1>Second Link</h1>
                        <div className="block"><span><a href="https://dribbble.com/hrtzt" target="_blank"><i className="fa fa-dribbble"> </i>Dribbble me</a></span><span><a href="https://twitter.com/hrtzt" target="_blank"><i className="fa fa-twitter"></i>Tweet me</a></span></div>
                        </div>
                    </label>
                    <label className="Slide" htmlFor="Slide3" id="Slide3">
                        <div className="content">
                        <h1> Third Link </h1>
                        <div className="block">
                            <ol>
                            <li>Add the pages title in the pageTitle array in the HTML editor to generate pages</li>
                            <li>Add the number of pages in the $npages variable in the CSS editor</li>
                            </ol>
                        </div>
                        </div>
                    </label>
                    <label className="Slide" htmlFor="Slide4" id="Slide4">
                        <div className="content">
                        <h1> Fourth Link </h1>
                        <div className="block"><span><a href="https://codepen.io/hrtzt/pen/NPZKRN" target="_blank">One Page Navigation CSS Menu</a></span><span><a href="https://codepen.io/hrtzt/pen/YPoeWd" target="_blank">The simplest CSS switch</a></span><span><a href="https://codepen.io/hrtzt/pen/JdYaEZ" target="_blank">Animated cube slider CSS only</a></span><span><a href="https://codepen.io/hrtzt/pen/vGqEJO" target="_blank">Google photos album view with only CSS</a></span></div>
                        </div>
                    </label>
                    <label className="Slide" htmlFor="Slide5" id="Slide5">
                        <div className="content">
                        <h1> Fifth Link </h1>
                        <div className="block"><span><a href="https://dribbble.com/hrtzt" target="_blank"><i className="fa fa-dribbble"> </i>Dribbble me</a></span><span><a href="https://twitter.com/hrtzt" target="_blank"><i className="fa fa-twitter"></i>Tweet me</a></span></div>
                        </div>
                    </label>
                    <label htmlFor="Slide6" id="Slide6">
                        <div className="content">
                        <h1> Sixth Link </h1>
                        <div className="block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto numquam, totam iusto officia earum perferendis</div>
                        </div>
                    </label>
                    <label htmlFor="Slide7" id="Slide7">
                        <div className="content">
                        <h1> Seventh Link </h1>
                        <div className="block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto numquam, totam iusto officia earum perferendis</div>
                        </div>
                    </label>
                </div>
            </form>
            </div>
        </div>
    );
}

export default LeftSideMenu;