import { useForm } from 'react-hook-form';
import Header from '../../Components/Header';
import { useState, useEffect } from 'react';
import { StateType } from '../../Types/APIStatesTypes';
import { CityType } from '../../Types/APICityTypes';
import * as C from './styles';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../Hooks/useAppSelector';
import { APIrequests } from '../../Helpers/APIrequests';
import { useNavigate } from 'react-router-dom';
import { FormRequestType } from '../../Types/FormRequest';

const RequestPage = () => {
  const [neighborhood, setNeighborhood] = useState('');
  const [address, setaddress] = useState('');
  const [states, setStates] = useState<StateType[]>([]);
  const [selectedState, setSelectedState] = useState('RO');
  const [citys, setCitys] = useState<CityType[]>([]);
  const [formFinished, setFormFinished] = useState(false);

  const navigate = useNavigate();
  const itemCar = useAppSelector(state => state.itemCar);

  useEffect(() => {
    if(itemCar.title === '') {
      navigate(-1);
    }
  });

  useEffect(() => {
    const fetchDataState = async () => {
      const dataState = await APIrequests.getStatesAPI();
      setStates(dataState);
      setValue('state', 'RO');
    }
    fetchDataState();     
  }, []);

  useEffect(() => {
    const fetchDataCitys = async (selectedState: string) => {
      const dataCitys = await APIrequests.getCityAPI(selectedState);
      setCitys(dataCitys);
      setValue('city', 'ALTA FLORESTA D OESTE')
    }
    fetchDataCitys(selectedState);
  },[selectedState, states]);

  const {
    register,
    setFocus,
    setValue,
    handleSubmit,
    formState: {errors}
  } = useForm<FormRequestType>();

  const handleAddInfoAfterCEP = async (e:any) => {
    const cep = e.target.value.replace(/\D/g, '');
    let response = await APIrequests.getAPICEP(cep);
    setValue('neighborhood', response.bairro);
    setValue('address', response.logradouro);
    setNeighborhood(response.bairro);
    setaddress(response.logradouro);
    setFocus('number');
  } 

  const handleStateUpdate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(e.target.value);
  }

  const submitData = (data:FormRequestType) => {
    APIrequests.sendRequestCarForm(data);
    setFormFinished(true);
  }
  
  return (
    <div>
      <C.Container>
        <Header positionIsFixed={false} colorNeedToChange={true} borderBottom={false}/>
        {!formFinished &&
        <form
          onSubmit={handleSubmit(submitData)}
          method="POST"
          >
          <h1>Preencha o formulário abaixo:</h1>

          <C.FormFlexRow>
            <C.PersonalInfos>
              <label>Seu veículo escolhido:</label>
              <input
                type="text"
                placeholder='Nome*'
                value={itemCar.title}
                disabled={true}
              />

              <label>Informe seu nome e sobrenome:</label>
              <div className='title-and-input'>
                <div className='input-and-error'>
                  <input
                    type="text"
                    placeholder='Nome*'
                    {...register("name", {
                      required: true,
                      maxLength: 100,
                      pattern: /^[A-Za-z]+$/gi
                    })}
                  />
                  {errors.name && (
                    <span className='error-condition'>
                      {errors.name.type === "required" && "Campo obrigatório."}
                      {errors.name.type === "pattern" && "Digite um nome válido."}
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
                      pattern: /^[A-Za-z]+[\s)^[A-Za-z]+$/gi
                    })}
                  />
                  {errors.lastname && (
                    <span className='error-condition' style={{marginLeft:'15px'}}>
                      {errors.lastname.type === "required" && "Campo obrigatório."}
                      {errors.lastname.type === "pattern" && "Digite um sobrenome válido."}
                      {errors.lastname.type === "maxLenght" && "No máximo 100 caracteres."}
                    </span>
                  )}
                  </div>
                </div>

                <label>Informe seu Telefone Celular:</label>
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

                  <label>Informe seu E-mail:</label>
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

                  <label>Informe seu CPF:</label>
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

                  <label>Escreva uma mensagem:</label>
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
                  <label>Informe sua cidade e estado:</label>
                  <div className='title-and-input'>
                    <select value={selectedState} 
                    {...register("state", {
                      required: true,
                      onChange: handleStateUpdate
                    })}
                    >
                      {states.map((state,index) => (
                        <option value={state.sigla} key={index}>{state.sigla}</option>
                      ))}
                    </select>
                    {errors.state && (
                      <span className='error-condition'>
                        {errors.state.type === "required" && "Campo obrigatório."}
                      </span>
                    )}

                    <select className='city-select'
                    {...register("city", {
                      required: true,
                    })}
                    >
                      {citys.map((city,index) => (
                        <option key={index}>{city.nome}</option>
                      ))}
                    </select>
                    {errors.city && (
                      <span className='error-condition'>
                        {errors.city.type === "required" && "Campo obrigatório."}
                      </span>
                    )}

                  </div>

                  <label>Informe seu CEP:</label>
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

                  <label>Informe a rua:</label>
                    <input
                      type="text"
                      placeholder='Rua*'
                      value={address}
                      className='input-large'
                      {...register("address", {
                        required: true,
                        maxLength: 100,
                        onChange(event) {
                         setaddress(event.target.value)
                       },
                      })}
                    />
                    {errors.address && (
                      <span className='error-condition'>
                        {errors.address.type === "required" && "Campo obrigatório."}
                        {errors.address.type === "maxLenght" && "No máximo 100 caracteres."}
                      </span>
                    )}

                  <label>Informe o bairro:</label>
                    <input
                      type="text"
                      placeholder='Bairro*'
                      value={neighborhood}
                      className='input-large'
                      {...register("neighborhood", {
                        required: true,
                        maxLength: 100,
                        onChange(event) {
                         setNeighborhood(event.target.value)
                       },
                      })}
                    />
                    {errors.neighborhood && (
                      <span className='error-condition'>
                        {errors.neighborhood.type === "required" && "Campo obrigatório."}
                        {errors.neighborhood.type === "maxLenght" && "No máximo 100 caracteres."}
                      </span>
                    )}

                  <label>Número da Residência:</label>
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

              <C.FormFlexRow>
                <button type='submit'>
                  ENVIAR
                </button>
                <div className='returnArea' onClick={() => navigate(-1)}>
                  VOLTAR
                </div>
              </C.FormFlexRow>

            </form>

            }
            {formFinished &&
              <C.FinishedContainer>
                <h1>NENHUM DE SEUS DADOS FORAM ENVIADOS OU SALVOS! Site foi feito apenas
                para mostrar uma nova versão do original. Para mais informações, consulte
                o site oficial!
                </h1>
                <Link to="/">Ir para início</Link>
              </C.FinishedContainer>
            }
      
        </C.Container>
    </div>
  )
}

export default RequestPage;