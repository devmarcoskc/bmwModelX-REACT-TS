import { RegisterType } from "../Types/FormRegisterType";

export const SendUserRegister = async (data:RegisterType) => {  
    if(data) {
        let Users:RegisterType[] = [];

        if(localStorage.getItem('UsersBmw') === null) {
            localStorage.setItem('UsersBmw', JSON.stringify(Users));
        }

        let CheckIfUserAlreadyExists = Users.some((user) => {
            if(user.email === data.email || user.password === data.password) {
                return true;
            }
        });

        if(CheckIfUserAlreadyExists) {
            return false;
        };

        let NewUserToPush: RegisterType= {
            name: data.name,
            lastname: data.lastname,
            email: data.email,
            password: data.password,
            confirmPassword: data.confirmPassword
        }

        Users.push(NewUserToPush); 
        localStorage.setItem('UsersBmw', JSON.stringify(Users));

        return true;
    }
}