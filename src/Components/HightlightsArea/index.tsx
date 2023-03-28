import React from 'react';
import * as C from './styles';
import Carousel from 'react-elastic-carousel';
import { useState } from 'react';
import VideoArea from './Video';

type Props = {
    imagesToUse: {
        IMG1: string;
        IMG2: string;
        IMG3: string;
        IMG4: string;
        IMG5: string;
        IMG6: string;
    };
    resum: string;
    titlesHighlights: {
        titleH1: string;
        titleH2: string;
        titleH3: string;
        titleH4: string;
        titleH5: string;
        titleH6: string;
    }
    VideosToModal : {
      FILM1: string,
      FILM2: string,
      FILM3: string,
      FILM4: string,
      FILM5: string,
      FILM6: string;
    }
}

const HighlightArea = ({imagesToUse, VideosToModal, titlesHighlights}: Props) => {
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
                <C.Slides style={{backgroundImage: `url(${imagesToUse.IMG1})`}} onClick={e => setModalAndVideoChosen(e, 0)}>
                    <C.SlidesContainer>
                        <h1>01</h1>
                        <p>{titlesHighlights?.titleH1}</p>
                    </C.SlidesContainer>
                </C.Slides>
                <C.Slides style={{backgroundImage: `url(${imagesToUse.IMG2})`}} onClick={e => setModalAndVideoChosen(e, 1)}>
                    <C.SlidesContainer>
                        <h1>02</h1>
                        <p>{titlesHighlights?.titleH2}</p>
                    </C.SlidesContainer>
                </C.Slides>
                <C.Slides style={{backgroundImage: `url(${imagesToUse.IMG3})`}} onClick={e => setModalAndVideoChosen(e, 2)}>
                    <C.SlidesContainer>
                        <h1>03</h1>
                        <p>{titlesHighlights?.titleH3}</p>
                    </C.SlidesContainer>
                </C.Slides>
                <C.Slides style={{backgroundImage: `url(${imagesToUse.IMG4})`}} onClick={e => setModalAndVideoChosen(e, 3)}>
                    <C.SlidesContainer>
                        <h1>04</h1>
                        <p>{titlesHighlights?.titleH4}</p>
                    </C.SlidesContainer>
                </C.Slides>
                <C.Slides style={{backgroundImage: `url(${imagesToUse.IMG5})`}} onClick={e => setModalAndVideoChosen(e, 4)}>
                    <C.SlidesContainer>
                        <h1>05</h1>
                        <p>{titlesHighlights?.titleH5}</p>
                    </C.SlidesContainer>
                </C.Slides>
                <C.Slides style={{backgroundImage: `url(${imagesToUse.IMG6})`}} onClick={e => setModalAndVideoChosen(e, 5)}>
                    <C.SlidesContainer>
                        <h1>06</h1>
                        <p>{titlesHighlights?.titleH6}</p>
                    </C.SlidesContainer>
                </C.Slides>
            </Carousel>
        }

        {modal &&
            <VideoArea closeModal={handleCloseModal} video={videoChosen} ListOfVideos={VideosList}/>
        }

    </C.container>
  )
}

export default HighlightArea