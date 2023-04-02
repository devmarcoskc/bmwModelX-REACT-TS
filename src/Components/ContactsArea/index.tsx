import * as C from './styles';
import {BiBriefcase} from "react-icons/bi";
import {HiAnnotation} from "react-icons/hi";
import {HiLocationMarker} from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setTitle } from "../../Redux/Reducers/itemReducer";

type Props = {
  carTitle: string
}

const ContactArea = ({carTitle}: Props) => {
  const dispatch = useDispatch();

  const DispatchCarTitle = () => {
    dispatch(setTitle(carTitle));
  }

  return (
    <C.Container>
        <p>*Imagens meramente ilustrativas. Nem todas as versões e funcionalidades apresentadas nesta página estarão disponíveis no Brasil. Para conhecer a versão comercializada no Brasil, por favor, acesse o configurador ou visite a Concessionária BMW de sua preferência.</p>
        <C.ContactGrid>
                <Link onClick={DispatchCarTitle} to="/Proposta">
                    <BiBriefcase/>
                    <h1>Solicite uma proposta</h1>
                </Link>
                <Link to="/Contato">
                    <HiAnnotation/>
                    <h1>Fale Conosco</h1>
                </Link>
                <Link to="/Concessionária">
                    <HiLocationMarker/>
                    <h1>Encontre um concessionário</h1>
                </Link>
        </C.ContactGrid>
    </C.Container>
  )
}

export default ContactArea;