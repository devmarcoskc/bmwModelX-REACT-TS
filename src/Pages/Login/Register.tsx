import * as C from './styles';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { RegisterType } from '../../Types/FormRegisterType';
import { SendUserRegister } from '../../Helpers/SendRegisterUser';
import { Link } from 'react-router-dom';

type Props = {
    handleGoToLogin: () => void;
}

const Register = ({handleGoToLogin}: Props) => {
  const [registerIsFinished, setRegisterIsFinished] = useState(false);
  const [registering, setRegistering] = useState(false);

  const {
      register,
      handleSubmit,
      watch,
      formState: {errors}
  } = useForm<RegisterType>();

    
  const submitData = async (data: RegisterType) => {
    setRegistering(true);
    const response = await SendUserRegister(data)
    if(response === true) {
        setRegisterIsFinished(true);
    }
    setRegistering(false);
  }

  const watchPassword = watch('password');

  return (
    <div className='register'>
      {!registerIsFinished &&
        <div className='login-container'>
            <div className='register-text'>
              <p>Já tem uma conta? Faça seu <span onClick={handleGoToLogin}>Login aqui</span></p>
            </div>

            <form 
              onSubmit={handleSubmit(submitData)}
              method="POST"
            >

            <label>Primeiro nome:</label>
            <input
              type="text"
              {...register("name", {
                required: true,
                minLength: 3,
              })}
            />
            {errors.name && (
              <p className="error-msg">
                {errors.name.type === "required" && "Campo obrigatório.*"}
                {errors.name.type === "minLength" && "No mínimo 3 caracteres.*"}
              </p>
            )}

            <label>Sobrenome:</label>
            <input
              type="text"
              {...register("lastname", {
                required: true,
                minLength: 4,
              })}
            />
            {errors.lastname && (
              <p className="error-msg">
                {errors.lastname.type === "required" && "Campo obrigatório.*"}
                {errors.lastname.type === "minLength" && "No mínimo 4 caracteres.*"}
              </p>
            )}

            <label>Email:</label>
            <input
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

            <label>Senha:</label>
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

            <label>Confirme sua senha:</label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: true,
                validate: (value) => value === watchPassword
              })}
            />
            {errors.confirmPassword && (
              <p className="error-msg">
                {errors.confirmPassword.type === "required" && "Campo obrigatório.*"}
                {errors.confirmPassword.type === "validate" && "As senhas devem ser iguais.*"}
              </p>
            )}

            <C.Button 
              type="submit"
              disabled={registering}
            >
              Registrar-se
            </C.Button>

            <div className='spans-infos'>
              <p>Informações Legais</p>
              <p>Política de Privacidade</p>
              <p>Modo de exibição</p>
            </div>
              
            </form>
          </div>
          }

          {registerIsFinished &&
            <C.FormFinishedContianer>
              <h1>Usuário registrado com sucesso!</h1>
              <h4>Nenhum de seus dados foram enviados para nenhum lugar, ficaram salvos em sua localStorage!</h4>
              <p>Para fazer o login utilize o email e a senha utilizados nesse cadastro!</p>
              <button onClick={handleGoToLogin}>Fazer Login</button>
            </C.FormFinishedContianer>
          }
    </div>
  )
}

export default Register;