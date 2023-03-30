import {useState} from 'react';
import * as C from './styled';
import Logo from '../../assets/bmwlogo.png';
import { Link } from 'react-router-dom';
import useMediaQuery from '../../Hooks/MediaQuery';
import {FaBars} from 'react-icons/fa';
import {FiX} from 'react-icons/fi';
import { useAppSelector } from '../../Hooks/useAppSelector';
import { useDispatch } from 'react-redux';
import { setIsLogged } from '../../Redux/Reducers/LoginReducer';

type Props = {
  positionIsFixed: boolean;
  colorNeedToChange: boolean;
  borderBottom: boolean
}

const Header = ({positionIsFixed, colorNeedToChange, borderBottom}: Props) => {
  const isDesktopScreen = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  const LoginInfo = useAppSelector(state => state.loginUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
      window.location.reload();
      dispatch(setIsLogged(false));
  }

  return (
    <C.Header position={positionIsFixed}>
      
        <C.Container borderBottomIsNeeded={borderBottom}>
            <C.ImgLogoArea>
              <Link to="/">
                <img src={Logo}/>
              </Link>
            </C.ImgLogoArea>
            {isDesktopScreen && 
            <div className="DeskNav">
              
              <C.NavsArea colorChange={colorNeedToChange}>
                  <Link to="/">Nossos Modelos</Link>
                  <Link to="/Concessionária">Concessionária</Link>
                  {!LoginInfo.isLogged &&
                    <Link to="/Login">Login</Link>
                  }
                  {LoginInfo.isLogged &&
                    <span onClick={handleLogout}>Sair</span>
                  }
                  <Link to="/Contato">Fale Conosco</Link>
              </C.NavsArea>
            </div>
            }
            {!isDesktopScreen &&
              <C.MobileNavIcon display={isMenuToggled}>
                <FaBars onClick={() => setIsMenuToggled(!isMenuToggled)}/>
              </C.MobileNavIcon>
            }
        </C.Container>

        {!isDesktopScreen && isMenuToggled &&
          <C.NavMenuSideBar>
            <C.SideBarContainer>
              <FiX onClick={() => setIsMenuToggled(false)}/>
              <Link to="#bmwe71">
                  BMWE71
                </Link>
                <Link to="#bmwe84">
                  BMWE84
                </Link>
                <Link to="#bmwf15">
                  BMWF15
                </Link>
                <Link to="#bmwg02">
                  BMWG02
                </Link>
                <Link to="#bmwg06">
                  BMWG06
                </Link>
                <Link to="/Concessionária">Concessionária</Link>
                <Link to="/Login">Login</Link>
                <Link to="/Contato">Fale Conosco</Link>
            </C.SideBarContainer>
          </C.NavMenuSideBar>
        }
        
    </C.Header>
  )
}

export default Header