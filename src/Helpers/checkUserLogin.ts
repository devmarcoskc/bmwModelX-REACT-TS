import { RegisterType } from "../Types/FormRegisterType";

export const checkIfUserExists = (email: string, password: string) => {
    let UsersToCheck:RegisterType[] = JSON.parse(localStorage.getItem('UsersBmw') || '[]');

    let CheckingIfUserExistis = UsersToCheck.some((Users) => {
        if(Users.email === email && Users.password === password) {
            return true;
        }
    });
    
    return CheckingIfUserExistis
}