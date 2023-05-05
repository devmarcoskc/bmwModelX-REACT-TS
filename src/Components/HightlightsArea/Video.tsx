import { useEffect, useState } from 'react';
import * as C from './videostyles';

type Props = {
   closeModal: () => void;
   video: number;
   ListOfVideos: {
      video: string;
   }[];
}

const VideoArea = ({closeModal, video, ListOfVideos}: Props) => {
  const [opacityControl, setOpacityControl] = useState(0);

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
      closeModal();
    }
  }, [opacityControl])

  return (
    <C.Container opacityControl={opacityControl}>
      <video autoPlay controls controlsList="nodownload" src={ListOfVideos[video].video}></video>
      <button onClick={handleCloseModalSmoothly}>
        FECHAR
      </button>
    </C.Container>
  )
}

export default VideoArea