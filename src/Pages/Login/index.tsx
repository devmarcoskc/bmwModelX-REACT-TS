import * as C from './styles';
import MYAPP from '../../assets/MYAPP.jpg';
import myAppLogo from '../../assets/myappLogo.png';
import { Link } from 'react-router-dom';
import BMWlogo from '../../assets/bmwlogo2.png';
import { useState } from 'react';

type Props = {}

const Login = (props: Props) => {
  const [registerIsNeeded, setRegisterIsNeeded] = useState(false);

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
              <p>Não tem uma conta? Faça seu <span>Cadastro aqui</span></p>
            </div>

            <p>Endereço de e-mail:</p>
            <input
              type="text"
            />
            <p>Senha:</p>
            <input
              type="text"
            />

            <button>Iniciar sessão</button>
            <button>Registrar-se</button>
          </div>
          }
          {registerIsNeeded &&
            <div className='login-container'>
              algo
            </div>
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

export default Login