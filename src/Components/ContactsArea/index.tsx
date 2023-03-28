import * as C from './styles';
import {BiBriefcase} from "react-icons/bi";
import {HiAnnotation} from "react-icons/hi";
import {HiLocationMarker} from "react-icons/hi";
import { Link } from 'react-router-dom';

type Props = {}

const ContactArea = (props: Props) => {
  return (
    <C.Container>
        <p>*Imagens meramente ilustrativas. Nem todas as versões e funcionalidades apresentadas nesta página estarão disponíveis no Brasil. Para conhecer a versão comercializada no Brasil, por favor, acesse o configurador ou visite a Concessionária BMW de sua preferência.</p>
        <C.ContactGrid>
                <Link to="/">
                    <BiBriefcase/>
                    <h1>Solicite uma proposta</h1>
                </Link>
                <Link to="/">
                    <HiAnnotation/>
                    <h1>Fale Conosco</h1>
                </Link>
                <Link to="/">
                    <HiLocationMarker/>
                    <h1>Encontre um concessionário</h1>
                </Link>
        </C.ContactGrid>
    </C.Container>
  )
}

export default ContactArea;