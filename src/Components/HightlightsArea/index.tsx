import React from 'react';
import * as C from './styles';
import Carousel from 'react-elastic-carousel';
import { useState } from 'react';
import VideoArea from './Video';

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

    const setModalAndVideoChosen = (e: React.MouseEvent<HTMLDivElement>, videoChosen: number) => {
        setModal(true);
        setVideoChosen(videoChosen);
    }

    const handleCloseModal = () => {
        setModal(false);
    }

    const VideosList = [
        {video: VideosToModal.FILM1},
        {video: VideosToModal.FILM2},
        {video: VideosToModal.FILM3},
        {video: VideosToModal.FILM4},
        {video: VideosToModal.FILM5},
        {video: VideosToModal.FILM6},
    ]

    const breakPoints = [
        {width: 1, itemsToShow: 1.1},
        {width: 500, itemsToShow: 1.5},
        {width: 768, itemsToShow: 4},
        {width: 1200, itemsToShow: 4},
    ]
  return (
    <C.container>
        {!modal &&
            <Carousel breakPoints={breakPoints}>
                {ImagesAndTitle.map((item, index) => (
                    <C.Slides key={index} style={{backgroundImage:`url(${item.img})`}} onClick={e => setModalAndVideoChosen(e, index)}>
                        <C.SlidesContainer>
                            <h1>0{index}</h1>
                            <p>{item.title}</p>
                        </C.SlidesContainer>
                    </C.Slides>
                ))}
            </Carousel>
        }

        {modal &&
            <VideoArea closeModal={handleCloseModal} video={videoChosen} ListOfVideos={VideosList}/>
        }

    </C.container>
  )
}

export default HighlightArea