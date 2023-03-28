import * as C from './styles';
import {FiInstagram} from "react-icons/fi";
import {FaFacebookF} from "react-icons/fa";
import {BsTwitter} from "react-icons/bs";
import {FaLinkedinIn} from "react-icons/fa";
import {BsYoutube} from "react-icons/bs";
import {SiWhatsapp} from "react-icons/si";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <C.Container>
        <C.MidiaArea>
            <C.MidiaContainer>
                <a href=""><FiInstagram/></a>
                <a href=""><FaFacebookF/></a>
                <a href=""><BsTwitter/></a>
                <a href=""><FaLinkedinIn/></a>
                <a href=""><BsYoutube/></a>
                <a href=""><SiWhatsapp/></a>
            </C.MidiaContainer>
        </C.MidiaArea>
        <C.BMWInfosContainer>
            <C.BMWInfos>
                <C.TitleAndText>
                    <span>Contato</span>
                    <p>Lorem ipsum dolor</p>
                    <p>Lorem</p>
                    <p>Lorem ipsum</p>
                </C.TitleAndText>
                <C.TitleAndText>
                    <span>Meu BMW</span>
                    <p>Lorem ipsum dolor</p>
                    <p>Lorem</p>
                    <p>Lorem ipsum</p>
                    <p>Aut nihil similique</p>
                </C.TitleAndText>
                <C.TitleAndText>
                    <span>BMW ConnectedDrive</span>
                    <p>Lorem</p>
                    <p>Lorem ipsum</p>
                </C.TitleAndText>
                <C.TitleAndText>
                    <span>Informações Legais</span>
                    <p>Lorem ipsum dolor</p>
                    <p>Lorem</p>
                    <p>Lorem ipsum</p>
                    <p>Aut nihil similique</p>
                    <p>Sed eveniet doloribus</p>
                </C.TitleAndText>
            </C.BMWInfos>
        </C.BMWInfosContainer>
        <C.FinalContainer>
            <C.LastInfos>
                <p>© BMW GROUP Brasil 2023</p>
                <div className="policy-rules">
                    <Link to="/contactUs">Fale com a BMW</Link>
                    <a href="">Política de Cookies</a>
                    <a href="">Política de Privacidade</a>
                </div>
            </C.LastInfos>
        </C.FinalContainer>
    </C.Container>
  )
}

export default Footer;