import * as C from './videostyles';

type Props = {
   closeModal: () => void;
   video: number;
   ListOfVideos: {
      video: string;
   }[];
}

const VideoArea = ({closeModal, video, ListOfVideos}: Props) => {
  return (
    <C.Container>
      <video autoPlay controls controlsList="nodownload" src={ListOfVideos[video].video}></video>
      <button onClick={closeModal}>
        FECHAR
      </button>
      algo pra ver
    </C.Container>
  )
}

export default VideoArea