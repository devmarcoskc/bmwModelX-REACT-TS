import Header from '../Header';
import * as C from './styles';
import { motion } from 'framer-motion';
import RequestBttn from '../RequestBttn';

type Props = {
    backgroundIMG: string;
    title: string;
    subtitle: string;
    price: string;
    fabrication: string;
}

const CarBannerHeader = ({backgroundIMG, title, subtitle, price, fabrication}: Props) => {
  return (
    <div>
        <C.ResumContainer style={{backgroundImage:`url(${backgroundIMG})`}}>
            <Header positionIsFixed={false} colorNeedToChange={false} borderBottom={false}/>
        <C.TitleaAndResum>
          <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.5}}
          variants={{
            hidden: {opacity:0, x:-50},
            visible: {opacity:1, x:0}
          }} 
          >
            THE {title}
          </motion.h1>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{delay:0.2, duration: 0.5}}
            variants={{
              hidden: {opacity:0, x:-50},
              visible: {opacity:1, x:0}
            }} 
          >
            {subtitle}
          </motion.h2>
          <RequestBttn cartitle={title}/>
          <C.PriceAndFabrication>
            <motion.div 
            className="status-div"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{delay:0.2, duration: 0.5}}
            variants={{
              hidden: {opacity:0},
              visible: {opacity:1}
            }}         
            >
              <p>A partir de:</p>
              <span>{price}</span>
            </motion.div>
            <motion.div 
            className="status-div"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{delay:0.2, duration: 0.5}}
            variants={{
              hidden: {opacity:0},
              visible: {opacity:1}
            }}         
            >
              <p>Motor e combústivel:</p>
              <span>{fabrication}</span>
            </motion.div>
          </C.PriceAndFabrication>
        </C.TitleaAndResum>
        </C.ResumContainer>
    </div>
  )
}

export default CarBannerHeader;