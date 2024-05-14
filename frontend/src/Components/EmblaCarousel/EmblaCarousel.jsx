import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './EmblaCarousel.css'
import Autoplay from 'embla-carousel-autoplay'
import img_1 from '../Assets/1.jpg'
import img_2 from '../Assets/2.jpg'
import img_3 from '../Assets/3.jpg'
import img_4 from '../Assets/4.jpg'
import img_5 from '../Assets/5.jpg'
import img_6 from '../Assets/6.jpg'


export const EmblaCarousel = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide"><img src={img_1} alt="" /></div>
                <div className="embla__slide"><img src={img_2} alt="" /></div>
                <div className="embla__slide"><img src={img_3} alt="" /></div>
                <div className="embla__slide"><img src={img_4} alt="" /></div>
                <div className="embla__slide"><img src={img_5} alt="" /></div>
                <div className="embla__slide"><img src={img_6} alt="" /></div>
            </div>
        </div>
    )
}
