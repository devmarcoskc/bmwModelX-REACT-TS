export const checkIfUserExists = (email: string, password: string) => {
    let EmailToCheck = localStorage.getItem('email');
    let PasswordToCheck = localStorage.getItem('password');

    if(email === EmailToCheck && password === PasswordToCheck) {
        return true;
    }
}