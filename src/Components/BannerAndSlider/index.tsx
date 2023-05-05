import * as C from './styles';
import { useState } from 'react';
import useMediaQuery from '../../Hooks/MediaQuery';
import {IoIosArrowForward} from 'react-icons/io';
import {IoIosArrowBack} from 'react-icons/io';


type Props = {
     IMGBG?: string;
     SlidesInfos: {
        img: string, title: string
     }[];
     marginBottomIsNeed: boolean;
}

const BannerAndSlider = ({SlidesInfos, IMGBG, marginBottomIsNeed}: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const isDesktopScreen = useMediaQuery("(min-width: 1060px)");

  const goToPreviousSlide = (e:React.MouseEvent<HTMLDivElement>) => {
    if(isDesktopScreen) {
        setCurrentSlide(0);
    } else {
        const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? SlidesInfos.length -1 : currentSlide-1;
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
        const isLastSlide = currentSlide === SlidesInfos.length -1;
        const newIndex = isLastSlide ? 0 :currentSlide+1;
        setCurrentSlide(newIndex);
    }
  }

  return (
    <div>
    <C.PageContainer arrowsNeedToHidde={currentSlide}>
        {IMGBG !== undefined &&
            <C.ContainerBG 
                style={{backgroundImage:`url(${IMGBG})`}}
            >
            </C.ContainerBG>
        }

        <C.SliderArea 
            marginNeed={marginBottomIsNeed}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 1}}
            transition={{delay:0.2, duration: 1}}
            variants={{
                hidden: {width: '0%'},
                visible: {width: '100%'}
            }} 
        >
            <C.Arrowleft 
                onClick={goToPreviousSlide} 
                marginNeed={marginBottomIsNeed}
                arrowsNeedToHidde={currentSlide}
            >
                <IoIosArrowBack/>
            </C.Arrowleft>
            <C.RightArrow
                onClick={goToNextSlide}
                marginNeed={marginBottomIsNeed}
                arrowsNeedToHidde={currentSlide}
            >
                <IoIosArrowForward/>
            </C.RightArrow>

            {isDesktopScreen &&
                <C.Slider currentSlide={currentSlide}> 
                    {SlidesInfos.map((item, index) => (
                        <C.Slide key={index}>
                            <img src={item.img}/>
                            <h4>{item.title}</h4>
                            <p>Pellentesque habitant morbi tristique 
                            senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, 
                            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. 
                            Aenean ultricies mi vitae est. Mauris placerat eleifend leo
                            </p>
                        </C.Slide>
                    ))}
                </C.Slider>
            }
            {!isDesktopScreen &&
                <C.SliderMobile slideToShow={currentSlide}>
                    {SlidesInfos.map((item, index) => (
                        <C.Slide key={index} style={{marginRight:`${index===4 ? '15px' : '0px'}`}}>
                            <img src={item.img}/>
                            <h4>{item.title}</h4>
                            <p>Pellentesque habitant morbi tristique 
                            senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, 
                            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. 
                            Aenean ultricies mi vitae est. Mauris placerat eleifend leo
                            </p>
                        </C.Slide>
                    ))}
                </C.SliderMobile>
            }

        </C.SliderArea>
    </C.PageContainer>
    </div>
  )
}

export default BannerAndSlider;