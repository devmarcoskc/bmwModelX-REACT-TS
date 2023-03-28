import * as C from './styles';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ImageSlider from '../Slider';

type Props = {
    imagesToModal: {
        IMG: string, title: string, resum: string
    }[];
    marginNeeded?: boolean;
}

const ModalImg = ({imagesToModal, marginNeeded}: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const styleMargin = {
        margin: marginNeeded ? "10px" : "0px"
  }

  const handleCloseModal = () => {
    setIsOpenModal(false)
  }

  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{once: true, amount: 0.5}}
    transition={{duration: 0.5}}
    variants={{
      hidden: {opacity:0},
      visible: {opacity:1}
    }}
    >
        {!isOpenModal && 
            <C.Container>
                <img src={imagesToModal[0].IMG} alt="car-design-image" 
                onClick={() => setIsOpenModal(true)}
                style={{marginLeft: styleMargin.margin}}
                />
            </C.Container>
        }
        {isOpenModal &&
           <ImageSlider imagesToModal={imagesToModal} handleCloseModal={handleCloseModal}/>
        }
    </motion.div>

)
  
}

export default ModalImg