import * as C from './styles';
import {useState, useEffect} from 'react';

type Props = {
    imagesToModal: {
        IMG: string, title: string, resum: string
    }[];
    handleCloseModal: () => void;
}

const ImageSlider = ({imagesToModal, handleCloseModal}: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isActiveDots, setIsActiveDot] = useState(false);

    const goToSlide = (slidesIndex: number) => {
          setCurrentIndex(slidesIndex);  
    }

  return (
    <C.ContainerSlider>
        <div className='dots-container'>
            {imagesToModal.map((slides, slidesIndex) => (
                <div key={slidesIndex} 
                className={slidesIndex === currentIndex ? "dots-selectors-active" : "dots-selectors"}
                onClick={() => goToSlide(slidesIndex)}
                >●</div>
            ))}
        </div>
        <button onClick={handleCloseModal}>FECHAR</button>
        <C.slides margin={currentIndex}>
            <C.Slider style={{backgroundImage:`url(${imagesToModal[0].IMG})`}}>
                <C.ModalTitleAndResum>
                    <h1>{imagesToModal[0].title}</h1>
                    <p>{imagesToModal[0].resum}</p>
                </C.ModalTitleAndResum>
            </C.Slider>
            <C.Slider style={{backgroundImage:`url(${imagesToModal[1].IMG})`}}>
                <C.ModalTitleAndResum>
                    <h1>{imagesToModal[1].title}</h1>
                    <p>{imagesToModal[1].resum}</p>
                </C.ModalTitleAndResum>
            </C.Slider>
            <C.Slider style={{backgroundImage:`url(${imagesToModal[2].IMG})`}}>
                <C.ModalTitleAndResum>
                    <h1>{imagesToModal[2].title}</h1>
                    <p>{imagesToModal[2].resum}</p>
                </C.ModalTitleAndResum>
            </C.Slider>
            <C.Slider style={{backgroundImage:`url(${imagesToModal[3].IMG})`}}>
                <C.ModalTitleAndResum>
                    <h1>{imagesToModal[3].title}</h1>
                    <p>{imagesToModal[3].resum}</p>
                </C.ModalTitleAndResum>
            </C.Slider>
            <C.Slider style={{backgroundImage:`url(${imagesToModal[4].IMG})`}}>
                <C.ModalTitleAndResum>
                    <h1>{imagesToModal[4].title}</h1>
                    <p>{imagesToModal[4].resum}</p>
                </C.ModalTitleAndResum>
            </C.Slider>
            <C.Slider style={{backgroundImage:`url(${imagesToModal[5].IMG})`}}>
                <C.ModalTitleAndResum>
                    <h1>{imagesToModal[5].title}</h1>
                    <p>{imagesToModal[5].resum}</p>
                </C.ModalTitleAndResum>
            </C.Slider>
            <C.Slider style={{backgroundImage:`url(${imagesToModal[6].IMG})`}}>
                <C.ModalTitleAndResum>
                    <h1>{imagesToModal[6].title}</h1>
                    <p>{imagesToModal[6].resum}</p>
                </C.ModalTitleAndResum>
            </C.Slider>
        </C.slides>
    </C.ContainerSlider>
  )
}

export default ImageSlider