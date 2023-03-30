import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import './styles.css';
import { useDispatch } from "react-redux";
import { setTitle } from "../../Redux/Reducers/itemReducer";

type Props = {
  cartitle: string;
}

const RequestBttn = ({cartitle}: Props) => {
  const dispatch = useDispatch();

  const handleDispatchInfos = (e:React.MouseEvent<HTMLDivElement>) => {
    dispatch(setTitle(cartitle));
  }

  return (
        <motion.div 
        className="bttn-request"
        onClick={handleDispatchInfos}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{delay:0.4, duration: 0.5}}
        variants={{
          hidden: {opacity:0, x:-50},
          visible: {opacity:1, x:0}
        }}
        >
            <Link to="/Proposta">
                Faça uma Proposta
            </Link>
       </motion.div>
  )
}

export default RequestBttn;