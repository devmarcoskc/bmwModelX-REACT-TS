import { RegisterType } from "../Types/FormRegisterType";

export const SendUserRegister = async (data:RegisterType) => {  
    if(data) {
        localStorage.setItem('name', data.name);
        localStorage.setItem('lastname', data.lastname);
        localStorage.setItem('email', data.email);
        localStorage.setItem('password', data.password);
        localStorage.setItem('lastname', data.confirmPassword);

        return true;
    }
}