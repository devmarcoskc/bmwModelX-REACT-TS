import * as C from './styles';
import Header from '../../Components/Header';
import { useState } from 'react';
import {BMWLocals} from '../../Data/LocationsBMW';
import { Link } from 'react-router-dom';

type Props = {}

const LocalStorage = (props: Props) => {
  const [stateSelected, setStateSelected] = useState('RS');

  const handleUpdateState = (e: any) => {
    setStateSelected(e.target.value);
  }

  const filteredStateToShow = BMWLocals.filter((item) => {
      return item.state === stateSelected;
  })

  return (
    <div>
      <Header positionIsFixed={false} colorNeedToChange={true} borderBottom={false}/>
       <C.Container>
          <C.SearchLocalContainer>

            <h1>Encontre sua Concessionária no Sul do Brasil</h1>

            <C.SearchInputsArea>
              <h4>Selecione seu estado de interesse:</h4>
              <select value={stateSelected} onChange={handleUpdateState}>
                <option>RS</option>
                <option>SC</option>
                <option>PR</option>
              </select>
              <h4>Cidades com concessionária:</h4>
            </C.SearchInputsArea>

                {filteredStateToShow.map((item) => (
                    <C.LocalItems>
                      <h6>{item.city}</h6>
                      <p>{item.street}</p>
                      <p>{item.cep}</p>
                      <a href={item.mapLocation} target="_blank">Veja Localização</a>
                    </C.LocalItems>
                ))}
          </C.SearchLocalContainer>
       </C.Container>
       <C.Footer>
       <C.LastInfos>
                <p>© BMW GROUP Brasil 2023</p>
                <div className="policy-rules">
                    <Link to="/contactUs">Fale com a BMW</Link>
                    <a href="">Política de Cookies</a>
                    <a href="">Política de Privacidade</a>
                </div>
            </C.LastInfos>
      </C.Footer>           
    </div>
)};


export default LocalStorage;