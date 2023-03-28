import Header from '../../Components/Header';
import { ItensData } from '../../Data/itemData';
import * as C from './styles';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Header positionIsFixed={true} colorNeedToChange={false} borderBottom={false}/>
      {ItensData.map((item, index) => (
        <C.Section style={{backgroundImage:`url(${item.backgroundImage.backgroundIMG})`}}>
          <C.MainContainerPage>
          <C.CarInfoContainer>
          <h1>{item.title}</h1>
          <a href={`/${item.title}`}>
              Mais Informações
          </a>
          </C.CarInfoContainer>
          </C.MainContainerPage>
        </C.Section>
      ))}
    </div>
  )
}

export default Home;