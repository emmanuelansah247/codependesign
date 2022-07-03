import '../internal_css/firstslidingpictures.css';
import IntroMenu from './intromenu';
import {useNavigate, useParams} from 'react-router-dom';
import DataForSlideImages from '../internal_js/dataslidingpictures';

function FirstSlidingPictures(){

    const navigate = useNavigate();

    let data1 = DataForSlideImages.slice(0,15);
    let data2 = DataForSlideImages.slice(15,30);
    let data3 = DataForSlideImages.slice(30,45);
    let data4 = DataForSlideImages.slice(45,60);
    let data5 = DataForSlideImages.slice(60,75);
    let data6 = DataForSlideImages.slice(75,90);

    const div1 =  MapSlideItems(data1);
    const div2 =  MapSlideItems(data2);
    const div3 =  MapSlideItems(data3);
    const div4 =  MapSlideItems(data4);
    const div5 =  MapSlideItems(data5);
    const div6 =  MapSlideItems(data6);

    function MapSlideItems(arraytomap){

       const tempdata = arraytomap.map(slideitem => (
        
            <div key={slideitem.key} onClick={(e) => navigate(`/productshowcase/${slideitem.key}`)}>
                <div className="line" style={{backgroundImage:`url(${slideitem.imgurl})`}}> </div>
                <div className="img" style={{backgroundImage:`url(${slideitem.imgurl})`}}></div>
            </div>
            ));
        
        return tempdata;

    }
    
    return(

        <div className='wrapper-images-container'>
            
            <IntroMenu/>

            <div className="wrapper-images">

                <div className="images-line">
                        {div1}
                </div>

                <div className="images-line">
                        {div2}
                </div>


                <div className="images-line">
                        {div3}
                </div>


                <div className="images-line">
                        {div4}
                </div>


                <div className="images-line">
                        {div5}
                </div>

                <div className="images-line">
                        {div6}
                </div>

            </div>
        
        </div>

    )
}


export default FirstSlidingPictures;
