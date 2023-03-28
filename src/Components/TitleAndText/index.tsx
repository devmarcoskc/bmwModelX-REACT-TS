import * as C from './styles';
import { motion } from 'framer-motion';

type Props = {
    title: string;
    text: string;
}

const TitleAndText = ({title, text}: Props) => {
  return (
    <C.Container>
        <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{delay:0.2, duration: 0.5}}
            variants={{
              hidden: {opacity:0, x:-50},
              visible: {opacity:1, x:0}
            }} 
        >       
            {title}
        </motion.h1>

        <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{delay:0.2, duration: 0.5}}
            variants={{
              hidden: {opacity:0, x:50},
              visible: {opacity:1, x:0}
            }} 
        >
            {text}
            <br/>
        </motion.p>
    </C.Container>
  )
}

export default TitleAndText