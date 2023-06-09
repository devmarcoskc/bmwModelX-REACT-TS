import * as C from './styles';
import {useState, useEffect} from 'react';

type Props = {
    imagesToModal: {
        IMG: string, title: string, resum: string
    }[];
    handleCloseModal: () => void;
}

const ImageSlider = ({imagesToModal, handleCloseModal}: Props) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [opacityControl, setOpacityControl] = useState<number>(0);

    useEffect(() => {
        setTimeout(() => {
          setOpacityControl(1);
        }, 100)
      }, []);
    
    const handleCloseModalSmoothly = (e:React.MouseEvent<HTMLButtonElement>) => {
        setOpacityControl(2);
        setTimeout(() => {
          setOpacityControl(3);
        }, 800);
    }

    useEffect(() => {
        if(opacityControl === 3) {
          handleCloseModal();
        }
    }, [opacityControl]);

    const goToSlide = (slidesIndex: number) => {
          setCurrentIndex(slidesIndex);  
    }

  return (
    <C.ContainerSlider opacityControl={opacityControl}>
        <div className='dots-container'>
            {imagesToModal.map((slides, slidesIndex) => (
                <div key={slidesIndex} 
                className={slidesIndex === currentIndex ? "dots-selectors-active" : "dots-selectors"}
                onClick={() => goToSlide(slidesIndex)}
                >●</div>
            ))}
        </div>
        <button onClick={handleCloseModalSmoothly}>FECHAR</button>
        <C.slides margin={currentIndex}>
            {imagesToModal.map((sliderItem, SliderItemIndex) => (
                <C.Slider 
                    key={SliderItemIndex} 
                    style={{backgroundImage:`url(${sliderItem.IMG})`}}
                >
                    <C.ModalTitleAndResum>
                        <h1>{sliderItem.title}</h1>
                        <p>{sliderItem.resum}</p>
                    </C.ModalTitleAndResum>
                </C.Slider>
            ))}
        </C.slides>
    </C.ContainerSlider>
  )
}

export default ImageSlider