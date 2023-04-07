import Header from '../../Components/Header';
import { ItensData } from '../../Data/itemData';
import * as C from './styles';
import { useAppSelector } from '../../Hooks/useAppSelector';
import { useDispatch } from 'react-redux';
import { setIsVisible } from '../../Redux/Reducers/siteModalReducer';

const Home = () => {
  const modalMainMsg = useAppSelector(state => state.modalMsg);
  const dispatch = useDispatch();

  const dispatchModalMsgToFalse = (e:React.MouseEvent<HTMLButtonElement>) => {
    dispatch(setIsVisible(false));
  }

  return (
    <div>
      {modalMainMsg.isSiteVisible &&
        <C.ModalMsgArea>
          <h1>Este site foi criado com o inuito de estudos, para mostrar 
          uma nova versão do site da BMW para os modelos da linha X.
          Portanto, nenhuma de suas informações serão enviadas, ou armazenadas
          em nenhum lugar, somente na sua própria Local Storage de seu Navegador.
          Para consultar mais informações, visite o site Oficial da BMW.
          </h1>
          <button onClick={dispatchModalMsgToFalse}>VER O SITE</button>
        </C.ModalMsgArea>
      }
      <Header positionIsFixed={true} colorNeedToChange={false} borderBottom={false}/>
      {ItensData.map((item, index) => (
        <C.Section key={index} id={item.title}>
          <video autoPlay loop muted playsInline>
            <source src={item.videoBG}/>
          </video>
          <C.MainContainerPage>
            <C.CarInfoContainer>
              <h1>{item.title}</h1>
              <a href={`/${item.title}`}>
                  Mais Informações
              </a>
            </C.CarInfoContainer>
            <C.ArrowDown>
              {index === 0 &&
                  <a href='#BMWG 02' className='arrow-down-home'>
                   ⮟
                  </a>
                }
                {index === 1 &&
                  <a href='#BMWE 84' className='arrow-down-home'>
                  ⮟
                  </a>
                }
                {index === 2 &&
                  <a href='#BMWE 71' className='arrow-down-home'>
                  ⮝
                  </a>
                }
            </C.ArrowDown>
          </C.MainContainerPage>
        </C.Section>
      ))}
    </div>
  )
}

export default Home;