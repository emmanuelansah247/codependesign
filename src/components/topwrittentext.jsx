import '../internal_css/topwrittentext.css';
import '../internal_css/temp.css'
import { useRef, useState,useEffect} from 'react';

function TopWrittenText(){
    const [pointerY,setPointerY] = useState(window.innerHeight /4)
    const [pointerX,setPointerX] = useState(window.innerWidth / 3)
    const [text1,setText1] = useState('"Talk is cheap')
    const [text2,setText2] = useState('Show me the code"')
    const [textSpan,setTextSpan] = useState([])
    const textElement1 = useRef()
    const textElement2 = useRef()
    const customPointer = useRef()
    window.onresize = (e) => {
        setFontWeight();
        };
   
document.onmousemove = function (event) {
 
    setPointerX(event.pageX)
    setPointerY(event.pageY)
    setFontWeight();
    customPointer.current.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
    };

    useEffect(()=>{
        setText(text1)
        setText(text2)
        setFontWeight()
    },[]);
    
    function setText(t) {
        t == text1 ? (textElement1.current.innerHTML = "") : (textElement2.current.innerHTML = "");
        t.split("").map((x) => {
            let charElement = document.createElement("span");
            let charNode = document.createTextNode(x);
            charElement.appendChild(charNode);
            t == text1
            ? textElement1.current.appendChild(charElement)
            : textElement2.current.appendChild(charElement);
            setTextSpan(document.querySelectorAll(".text-container span"))

        });
    }
    function setFontWeight() {
        textSpan.forEach((element) => {
            let position = element.getBoundingClientRect();
    
            // Calculate The Distance Between Cursor And Target Elements
            let distance = Math.ceil(
            Math.sqrt((position.x - pointerX) ** 2 + (position.y - pointerY) ** 2)
            );
    
            // The Longer The Distance The Lower The Font Weight
            element.setAttribute(
            "style",
            `font-variation-settings: 'wght' ${900 - distance * 2}
            `
            
            );
        });
        }
        
    
    return(

        <div className="top-written-text change-font">
            <div className="text-container">
                <h1  className="text-1" ref={textElement1}>{text1}</h1>
                <h1 className="text-2" ref={textElement2}>{text2}</h1>
                </div>
            <div className="custom-pointer" ref={customPointer}></div>

        </div>

    );
}

export default TopWrittenText;