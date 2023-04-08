import React from 'react';
import * as C from './styles';
import { useState } from 'react';
import VideoArea from './Video';
import useMediaQuery from '../../Hooks/MediaQuery';
import {BsFillArrowRightSquareFill} from 'react-icons/bs';
import {BsFillArrowLeftSquareFill} from 'react-icons/bs';


type Props = {
    ImagesAndTitle: {
        img: string, title: string
    }[],
    VideosToModal : {
      FILM1: string,
      FILM2: string,
      FILM3: string,
      FILM4: string,
      FILM5: string,
      FILM6: string;
    }
}

const HighlightArea = ({VideosToModal, ImagesAndTitle}: Props) => {
    const [modal, setModal] = useState(false);
    const [videoChosen, setVideoChosen] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);

    const isDesktopScreen = useMediaQuery("(min-width: 1060px)");

    const setModalAndVideoChosen = (e: React.MouseEvent<HTMLDivElement>, videoChosen: number) => {
        setModal(true);
        setVideoChosen(videoChosen);
    }

    const handleCloseModal = () => {
        setModal(false);
    }

    const goToPreviousSlide = (e:React.MouseEvent<HTMLDivElement>) => {
        if(isDesktopScreen) {
            setCurrentSlide(0);
        } else {
            const isFirstSlide = currentSlide === 0;
        const newIndex = isFirstSlide ? ImagesAndTitle.length -1 : currentSlide-1;
        setCurrentSlide(newIndex);
        }
    }

    const goToNextSlide = (e:React.MouseEvent<HTMLDivElement>) => {
        if(isDesktopScreen) {
            if(currentSlide === 0 || currentSlide < 2) {
                const newIndex = currentSlide +1;
                setCurrentSlide(newIndex);
            }
        } else {
            const isLastSlide = currentSlide === ImagesAndTitle.length -1;
            const newIndex = isLastSlide ? 0 : currentSlide+1;
            setCurrentSlide(newIndex);
        }
    }

    const VideosList = [
        {video: VideosToModal.FILM1},
        {video: VideosToModal.FILM2},
        {video: VideosToModal.FILM3},
        {video: VideosToModal.FILM4},
        {video: VideosToModal.FILM5},
        {video: VideosToModal.FILM6},
    ]

  return (
    <div>
        {!modal &&
            <C.container>
                <C.Arrowleft 
                    onClick={goToPreviousSlide}
                    arrowsNeedToHidde={currentSlide}
                >
                    <BsFillArrowLeftSquareFill/>
                </C.Arrowleft>
                <C.RightArrow 
                    onClick={goToNextSlide}
                    arrowsNeedToHidde={currentSlide}
                >
                    <BsFillArrowRightSquareFill/>
                </C.RightArrow>
                <C.SlidersContainer>
                {isDesktopScreen &&
                    <C.Slider marginToLeft={currentSlide}>
                        {ImagesAndTitle.map((slides, index) => (
                            <C.Slides key={index} style={{backgroundImage:`url(${slides.img})`}} onClick={e => setModalAndVideoChosen(e, index)}>
                                <C.SlidesContainer>
                                    <h1>0{index+1}</h1>
                                    <p>{slides.title}</p>
                                </C.SlidesContainer>
                            </C.Slides>
                        ))}
                    </C.Slider>
                }
                {!isDesktopScreen &&
                    <C.SliderMobile marginToLeft={currentSlide}>
                        {ImagesAndTitle.map((slides, index) => (
                            <C.Slides key={index} style={{backgroundImage:`url(${slides.img})`}} onClick={e => setModalAndVideoChosen(e, index)}>
                                <C.SlidesContainer>
                                    <h1>0{index+1}</h1>
                                    <p>{slides.title}</p>
                                </C.SlidesContainer>
                            </C.Slides>
                        ))}
                    </C.SliderMobile>
                }
                </C.SlidersContainer>
            </C.container>
        }

        {modal &&
            <VideoArea closeModal={handleCloseModal} video={videoChosen} ListOfVideos={VideosList}/>
        }
    </div>
  )
}

export default HighlightArea