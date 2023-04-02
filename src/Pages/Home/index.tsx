import Header from '../../Components/Header';
import { ItensData } from '../../Data/itemData';
import * as C from './styles';

const Home = () => {
  return (
    <div>
      <Header positionIsFixed={true} colorNeedToChange={false} borderBottom={false}/>
      {ItensData.map((item, index) => (
        <C.Section style={{backgroundImage:`url(${item.backgroundIMG})`}} key={index}>
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