import React from 'react'
import { useInView } from 'react-intersection-observer';

export default function Slider(props) {

    const { ref, inView} = useInView({
        threshold: 0.4,
    })

    const renderContent = () => {
        if(!props.flipped) {
            return(
            <>
                <img src={props.imageSrc} alt="Earthly" />
                <div className="slider_content">
                    <h1 className='slider_title'>{props.title}</h1>
                    <p style={{fontSize:'20px'}}>{props.subtitle}</p>
                </div>
            </>
            )
        }
        else {
            return(
            <>
                <div className="slider_content">
                    <h1 className='slider_title'>{props.title}</h1>
                    <p style={{fontSize:'20px'}}>{props.subtitle}</p>
                </div>
                <img src={props.imageSrc} alt="Earthly" />
            </>
            )
        }
    }

  return (
    <div className={inView?"slider--zoom":"slider"} ref={ref} style={{color:'white'}}>
      {renderContent()}
    </div>
  )
}
