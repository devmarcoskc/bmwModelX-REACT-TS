import { useForm } from 'react-hook-form';
import Header from '../../Components/Header';
import { useState, useEffect } from 'react';
import { StateType } from '../../Types/APIStatesTypes';
import { CityType } from '../../Types/APICityTypes';
import * as C from './styles';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../Hooks/useAppSelector';
import formbg from "../../assets/formbg.jpg";
import { APIrequests } from '../../RequetsAPI\'s/APIrequests';


const RequestPage = () => {
  const [neighborhood, setNeighborhood] = useState('');
  const [address, setaddress] = useState('');
  const [states, setStates] = useState<StateType[]>([]);
  const [selectedState, setSelectedState] = useState('RO');
  const [citys, setCitys] = useState<CityType[]>([]);
  const [formFinished, setFormFinished] = useState(false);

  useEffect(() => {
    const fetchDataState = async () => {
      const dataState = await APIrequests.getStatesAPI();
      setStates(dataState);
    }
    fetchDataState();     
  }, []);

  useEffect(() => {
    const fetchDataCitys = async (selectedState: string) => {
      const dataCitys = await APIrequests.getCityAPI(selectedState);
      setCitys(dataCitys);
    }
    fetchDataCitys(selectedState);
  },[selectedState, states]);

  const {
    register,
    trigger,
    setFocus,
    formState: {errors}
  } = useForm();

  const handleSubmit = async (e: any) => {
    const isFormValid = await trigger();
    if(!isFormValid) {
      e.preventDefault();
      setFormFinished(false)
    } else {
    
      alert('Para garantir a segurança de seus dados, nenhuma informação foi enviada');
      setFormFinished(true);
    }
  }

  const handleAddInfoAfterCEP = async (e:any) => {
    const cep = e.target.value.replace(/\D/g, '');
    let response = await APIrequests.getAPICEP(cep);
    setNeighborhood(response.bairro);
    setaddress(response.logradouro);
    setFocus('number');
  } 

  const handleStateUpdate = (e: any) => {
    setSelectedState(e.target.value);
  }

  const itemCar = useAppSelector(state => state.itemCar);

  return (
    <div>
      <C.Container style={{backgroundImage: `url('${formbg}')`}}>
        <Header positionIsFixed={false} colorNeedToChange={true} borderBottom={true}/>
        {!formFinished &&
        <form
          onSubmit={handleSubmit}
          method="POST"
          >
          <h1>Preencha o formulário abaixo:</h1>
          <C.FormFlexRow>
            <C.PersonalInfos>
              <p>Seu veículo escolhido:</p>
              <input
                type="text"
                placeholder='Nome*'
                value={itemCar.title}
                disabled={true}
              />

              <p>Informe seu nome e sobrenome:</p>
              <div className='title-and-input'>
              <div className='input-and-error'>
              <input
                type="text"
                placeholder='Nome*'
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <span className='error-condition'>
                  {errors.name.type === "required" && "Campo obrigatório."}
                  {errors.name.type === "maxLenght" && "No máximo 100 caracteres."}
                </span>
                )}
              </div>

              <div className='input-and-error'>
                <input
                  type="text"
                  placeholder='Sobrenome*'
                  style={{marginLeft:'15px'}}
                  {...register("lastname", {
                    required: true,
                    maxLength: 100,
                  })}
                />
                {errors.lastname && (
                  <span className='error-condition' style={{marginLeft:'15px'}}>
                    {errors.lastname.type === "required" && "Campo obrigatório."}
                    {errors.lastname.type === "maxLenght" && "No máximo 100 caracteres."}
                  </span>
                )}
                </div>
                </div>

                <p>Informe seu Telefone Celular:</p>
                <input
                  type="text"
                  placeholder='Telefone*'
                  {...register("phone", {
                    required: true,
                    pattern: /^(1[1-9]|2[12478]|3([1-5]|[7-8])|4[1-9]|5(1|[3-5])|6[1-9]|7[134579]|8[1-9]|9[1-9])9[0-9]{8}$/i,
                  })}
                  />
                  {errors.phone && (
                    <span className='error-condition'>
                      {errors.phone.type === "required" && "Campo obrigatório."}
                      {errors.phone.type === "pattern" && "Digite um número válido com DDD correto."}
                    </span>
                  )}

                  <p>Informe seu E-mail:</p>
                  <input
                    type="email"
                    placeholder='E-mail*'
                    className='input-large'
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                  />
                  {errors.email && (
                    <span className='error-condition'>
                      {errors.email.type === "required" && "Campo obrigatório."}
                      {errors.email.type === "pattern" && "Digite um email válido."}
                    </span>
                  )}

                  <p>Informe seu CPF:</p>
                  <input
                    type="text"
                    placeholder='CPF*'
                    {...register("cpf", {
                      required: true,
                      pattern: /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/i,
                    })}
                  />
                  {errors.cpf && (
                    <span className='error-condition'>
                      {errors.cpf.type === "required" && "Campo obrigatório."}
                      {errors.cpf.type === "pattern" && "Digite um CPF válido."}
                    </span>
                  )}

                  <p>Escreva uma mensagem:</p>
                  <textarea
                  placeholder='Quer mandar alguma mensagem? Escreva!'
                  {...register("message", {
                    maxLength: 100,
                  })}
                />
                {errors.message && (
                  <span className='error-condition'>
                    {errors.message.type === "maxLenght" && "No máximo 100 caracteres."}
                  </span>
                )}
                </C.PersonalInfos>

                <C.LocalInfos>
                  <p>Informe sua cidade e estado:</p>
                  <div className='title-and-input'>
                    <select value={selectedState} onChange={handleStateUpdate}>
                      {states.map((state,index) => (
                        <option value={state.sigla} key={index}>{state.sigla}</option>
                      ))}
                    </select>
                    <select className='city-select'>
                      {citys.map((city,index) => (
                        <option key={index}>{city.nome}</option>
                      ))}
                    </select>
                  </div>

                  <p>Informe seu CEP:</p>
                  <input
                    type="text"
                    placeholder='CEP*'
                    {...register("cep", {
                      required: true,
                      pattern: /^\d{5}-?\d{3}$/gi,
                      onBlur: handleAddInfoAfterCEP
                    })}
                  />
                    {errors.cep && (
                    <span className='error-condition'>
                      {errors.cep.type === "required" && "Campo obrigatório."}
                      {errors.cep.type === "pattern" && "Digite um CPF válido."}
                    </span>
                    )}

                  <p>Informe a rua:</p>
                    <input
                      type="text"
                      placeholder='Rua*'
                      value={address}
                      className='input-large'
                      {...register("address", {
                        required: true,
                        maxLength: 100,
                        onChange(event) {
                          setaddress(event.target.value);
                        },
                      })}
                    />
                    {address === null &&(
                      <span className='error-condition'>
                        Campo obrigatório.
                      </span>
                    )}

                  <p>Informe o bairro:</p>
                    <input
                      type="text"
                      placeholder='Bairro*'
                      value={neighborhood}
                      className='input-large'
                      {...register("neighborhood", {
                        required: true,
                        maxLength: 100,
                        onChange(event) {
                          setNeighborhood(event.target.value);
                        },
                      })}
                    />
                    {neighborhood === null && (
                      <span className='error-condition'>
                        Campo obrigatório.
                      </span>
                    )}

                  <p>Número da Residência:</p>
                  <input
                    type="text"
                    placeholder='Número da residência*'
                    {...register("number", {
                      required: true,
                      pattern: /^\d+$/gi,
                    })}
                  />
                  {errors.number && (
                    <span className='error-condition'>
                      {errors.number.type === "required" && "Campo obrigatório."}
                      {errors.number.type === "pattern" && "Digite somente números."}
                    </span>
                  )}  
                </C.LocalInfos>
              </C.FormFlexRow>

              <button type='submit'>
                ENVIAR
              </button>
            </form>
            }
            {formFinished &&
              <C.FinishedContainer>
                <h1>Muito obrigado por enviar o formulário, entraremos em contato em breve.</h1>
                <Link to="/">Ir para início</Link>
              </C.FinishedContainer>
            }
      
        </C.Container>
    </div>
  )
}

export default RequestPage;