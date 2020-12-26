import React, {useState} from 'react'
import './ImgSlider.css'

export default function ImgSlider({images}) {
    const [count, setCount] = useState(0)

    const prevClick = () => {
        setCount(prevCount => prevCount===0 ? images.length-1 : prevCount-1)
    }

    const nextClick = () => {
        setCount(prevCount => prevCount>=images.length-1 ? 0 : prevCount+1)
    }

    const dotClick = (dotIndex) => {
        setCount(dotIndex)
    }

    return (
        <div className='slider'>
            <div className='btn btn-prev fas fa-chevron-left' onClick={prevClick} />

            {images.map((item, index) => <div 
                                            className='slide'
                                            style={{backgroundImage: `url(${item.src})`,
                                                    transform: `translateX(-${count}00vw)`}} 
                                            key={index}
                                            />)}

            <div className='dotsContainer'>
                {images.map((item, index) => <div className={index===count ? 'dot dot-active fas fa-circle' : 'dot fas fa-circle'} key={index} onClick={() => dotClick(index)}></div>)}  
            </div>
                                 
            <div className='btn btn-next fas fa-chevron-right' onClick={nextClick} />
        </div>
    )
}
