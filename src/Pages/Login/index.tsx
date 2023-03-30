import * as C from './styles';
import MYAPP from '../../assets/MYAPP.jpg';
import myAppLogo from '../../assets/myappLogo.png';
import { Link } from 'react-router-dom';
import BMWlogo from '../../assets/bmwlogo2.png';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Register from './Register';
import { checkIfUserExists } from '../../Helpers/checkUserLogin';
import {LoginType} from '../../Types/LoginType';
import { setIsLogged } from '../../Redux/Reducers/LoginReducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [registerIsNeeded, setRegisterIsNeeded] = useState(false);
  const [needUserNotFoundMsg, setNeedUserNotFoundMsg] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<LoginType>();
  
  const handleGoToLogin = () => {
    setRegisterIsNeeded(false);
  }

  
  const handleCheckUser = (data:LoginType) => {
      setLoading(true);
      let response = checkIfUserExists(data.email, data.password);
      if(response === true) {
        setNeedUserNotFoundMsg(false);
        dispatch(setIsLogged(true));
        alert('Login realizado com sucesso');
        navigate("/");
      } else {
        setNeedUserNotFoundMsg(true);
      }
      setLoading(false);
  }


  return (
    <div>
      <C.Container>
        <C.LeftSide>
        <Link to="/">
            <img src={BMWlogo}/>
        </Link>

        {!registerIsNeeded &&
          <div className='login-container'>
            <h1>Faça seu Login:</h1>

            <div className='register-text'>
              <p>Não tem uma conta? Faça seu <span onClick={() => setRegisterIsNeeded(true)}>Cadastro aqui</span></p>
            </div>

            <form
              target="_blank"
              onSubmit={handleSubmit(handleCheckUser)}
              method="POST"
            >
              <p>Endereço de e-mail:</p>
              <input
                type="text"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="error-msg">
                  {errors.email.type === "required" && "Campo obrigatório.*"}
                  {errors.email.type === "pattern" && "Email inválido.*"}
                </p>
              )}

              <p>Senha:</p>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
              />
              {errors.password && (
                <p className="error-msg">
                  {errors.password.type === "required" && "Campo obrigatório.*"}
                  {errors.password.type === "minLength" && "No mínimo 6 caracteres.*"}
                </p>
              )}

              {needUserNotFoundMsg &&
                <p className='error-msg'>Endereço de email ou senha não encontrado. Utilize dos dados que foram registrados!*</p>
              }

              <C.Button type="submit" disabled={loading}>
                Iniciar sessão
              </C.Button>
              <C.Button style={{marginBottom: '20px'}} onClick={() => setRegisterIsNeeded(true)}>
                Faça seu Registro
              </C.Button>

              <div className='spans-infos'>
                <p>Informações Legais</p>
                <p>Política de Privacidade</p>
                <p>Modo de exibição</p>
              </div>

            </form>

          </div>
          }

          {registerIsNeeded &&
            <Register handleGoToLogin={handleGoToLogin}/>
          }
        </C.LeftSide>

        <C.RightSide style={{backgroundImage:`url(${MYAPP})`}}>
          <div className='gradient-area'>
            <img src={myAppLogo}/>
          </div>
        </C.RightSide>
      </C.Container>
    </div>
  )
}

export default Login;