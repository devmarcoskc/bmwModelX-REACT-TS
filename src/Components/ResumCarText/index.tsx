import * as C from './styles';
import { motion } from 'framer-motion';

type Props = {
    resum: string;
    title: string;
}

const ResumArea = ({resum, title}: Props) => {
  return (
    <C.ResumArea>
        <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.7}}
        transition={{delay:0.5, duration: 0.7}}
        variants={{
          hidden: {opacity:0},
          visible: {opacity:1}
        }}         
        >
          {resum}
        </motion.p>
        <motion.p 
          className='highlights-manual'
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 1}}
          transition={{delay:0.5, duration: 1}}
          variants={{
            hidden: {opacity:0},
            visible: {opacity:1}
          }}  
        >
          Veja mais abrindo todas as fotos*
        </motion.p>
        <h1>OS DESTAQUES DO {title}</h1>
    </C.ResumArea>
  )
}

export default ResumArea