import '../internal_css/menubelowwrittentext.css'
// eslint-disable-next-line
import {useEffect,useRef,useState} from "react";
import {gsap ,Power4,Power2 } from "gsap";

function MenuBelowWrittenText(props){
  const [pointerA,setPointerA] = useState(window.innerWidth / 3)
  const [pointerB,setPointerB] = useState(window.innerHeight /4)

  const pageElement = useRef()
  // const cursor = useRef()
  const [activeSlide, setActiveSlide] = useState("")

function handleNavigationLinkClicked(e){
  const temp = e.target.getAttribute('id');
  props.onChange(temp);
}


const updateOnHover = (e)=>{
    const {tagName,classList} = e.target;
    if (
        tagName === "LABEL" ||
        tagName === "A" ||
        tagName === "BUTTON" ||
        classList.contains("is-cursor-hover") ||
        (e.target.parentElement.tagName === "A" && e.target.tagName === "IMG")
      ) {
        document.querySelector("html").classList.toggle("is-hover");
      }
    activateMagnetic()
}

function activateMagnetic() {
    let links = [...document.querySelectorAll(".c-magnetic")];
    links.map((link) => {
      const that = document;
        link.addEventListener("mousemove", function (e) {
        moveTarget(e, e.target, link.querySelector("span"), 5);
      });

      link.addEventListener("mouseout", function () {
        gsap.to(link.querySelector("span"), {
        duration: 2, 
          x: 0,
          y: 0,
          ease:Power2.easeOut
          
        });
      });
    });
  }
 function moveTarget(e, link, span, force) {
    let boundingRect = link.getBoundingClientRect();
    let relX = e.pageX - boundingRect.left;
    let relY = e.pageY - boundingRect.top;
    gsap.to(span, {duration: 0.3,
      x: ((relX - boundingRect.width / 2) / boundingRect.width) * force * 10,
      y: ((relY - boundingRect.height / 2) / boundingRect.height) * force * 15,
      ease: Power2.easeOut
    });
  }
  const links =[
    {name:"Home",id:'Slide1'},
    {name:"About",id:'Slide2'},
    {name:"Services",id:'Slide3'},
    {name:"Features",id:'Slide4'},
    {name:"Products",id:'Slide5'},
    {name:"Blog",id:'Slide6'},
    {name:"Privacy",id:'Slide7'},

  ]

  // FONT WEIGHT ANIMATION LOGIC
  function changeFontWeight() {
    const textSpan = document.querySelectorAll('.smallspan')
    textSpan.forEach((element) => {
        let position = element.getBoundingClientRect();

        // Calculate The Distance Between Cursor And Target Elements
        let distance = Math.ceil(
        Math.sqrt((position.x - pointerA) ** 2 + (position.y - pointerB) ** 2)
        );

        // The Longer The Distance The Lower The Font Weight
        element.setAttribute(
        "style",
        `font-variation-settings: 'wght' ${900 - distance * 2}
        `
        );
    });
    }
    const handleMouseMoveFontChange = (event)=>{
      // setPointerA(event.pageX)
      // setPointerB(event.pageY)
      // changeFontWeight();
    }
  

    return(
        <div className="menu-below-written-text">
            <div id="page" ref={pageElement} onMouseOver={updateOnHover} onMouseOut={updateOnHover} >
                <div className="o-main" onMouseMove={handleMouseMoveFontChange} >
                      <header className="c-header"> 
                          <nav className="c-menu" aria-label="Kwak nam sin">
                              <ul className="c-menu__list" role="menubar" aria-label="Kwak nam sin">
                             {links.map((link,idx)=>(
                                <li key={idx} onClick={ (e) => handleNavigationLinkClicked(e)  } onMouseOver={ (e) => handleNavigationLinkClicked(e)  } className="c-menu__link c-magnetic" role="menuitem" id={link.id} > <span > {link.name.split('').map((char,i)=>(
                                  <span className='smallspan' key={i}>{char}</span>
                                ))} </span> </li>))}
                              </ul>
                          </nav>
                      </header>
                </div>
                </div>
        </div>
    );
}

export default MenuBelowWrittenText;