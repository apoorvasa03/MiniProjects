import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {useState} from 'react'
import dataSlider from './sliderData';
import  './slider.css'



const Slider = () => {
    let [sliderIndex, setSliderIndex] = useState(0)

    const handleClick = (direction) => {

        
    }
    return (
        <div className="container">
            <div className='arrow' style={{left: '10px'}} onClick={() => handleClick('right')}><ArrowBackIosIcon/></div>
            <div className='wrapper'>
                {dataSlider.map(data => (
                     <div className = 'slider' key={data.id}>
                        <img src={data.url}/>
                    </div>
                ))}
               
                
            </div>
                
            <div className='arrow' style={{right: '10px'}} onClick ={() => handleClick('left')}><ArrowForwardIosIcon/></div>
            
        </div>
    )
}
//require('./img1.jpg')
export default Slider