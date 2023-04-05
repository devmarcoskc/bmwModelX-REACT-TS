import styled from "styled-components";

export const Container = styled.div`
    height: auto;
    width: 100%;
    display: flex;

    @media(max-width: 768px) {
        flex-direction: column;
    }
`;

export const LeftSide = styled.div`
    height: auto;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    a img{
        height: 120px;
        width: 120px;
        margin-top: 10px;
    }

    h1 {
        font-weight: 300;
        font-size: 32px;
        color: #2c3e50;
        margin-top: 0px;
    }

    .register {
        width: 100%;
    }

    .login-container {
        display: flex;
        flex-direction: column;
        height: auto;
        width: 60%;
        margin:auto;

        form {
            display: flex;
            flex-direction: column;
        }

        label {
            margin-top:10px;
        }

        .error-msg {
            margin-top: 5px !important;
            color: red !important;
            font-size: 13px !important;
        }

        input {
            height: 40px;
            padding: 10px;
            outline: 0;

            &:focus {
                border: 0.5px solid #4169E1;
            }
        }

        button {
            margin-top: 20px;
            border: none;
            height: 50px;
            font-size: 17px;
            background-color: #4169E1;
            color: white;
            cursor: pointer;
            transition: all ease .7s;

            &:hover {
                background-color: blue;
            }
        }

        .register-text {
            display: flex;
            margin-bottom: 20px;

            span {
                color: #4169E1;
                cursor: pointer;
                text-decoration: underline;

                &:hover {
                    text-decoration: none;
                }
            }
        }

        .spans-infos {
            margin-bottom: 20px;
            
            p {
                color: #262626;
                text-decoration: underline;
                font-size: 14px;
                margin-top: 10px;
            }
        }
    }

    @media(max-width: 768px) {
        width: 100%;
    }

`;

export const Button = styled.button`
    margin-top: 20px;
    border: none;
    height: 50px;
    font-size: 17px;
    background-color: #4169E1;
    color: white;
    cursor: pointer;
    transition: all ease .7s;

    &:hover {
        background-color: blue;
    }

    ${props => props.disabled === true &&`
        opacity: 0.5;
        cursor: none;

        &:hover:{
            background-color:#4169E1;
        }
    `}
`;

export const RightSide = styled.div`
    display: flex;
    min-height: 100vh;
    width: 50%;
    background-position: center;
    background-size: cover;
    

    .gradient-area {
        height: 100%;
        width: 100%;
        background: linear-gradient(to right, white, transparent);
        img {
            height: 130px;
            width: 130px;
            position: absolute;
            right:0;
            top:10;
        }
    }
`;

export const MobileImgArea = styled.div`
    height: 40vh;
    width: 100%;
    background-position: center;
    background-size: cover;

    img {
        height: 50px;
        width: 50px;
        position: absolute;
        top: 5;
    }
`;

export const FormFinishedContianer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin:auto;

    h4 {
        margin-top: 10px;
    }
    p {
        margin-top: 10px;
    }
    button {
        margin-top: 20px;
        border: none;
        height: 50px;
        font-size: 17px;
        background-color: #4169E1;
        color: white;
        cursor: pointer;
        transition: all ease .7s;
    
        &:hover {
            background-color: blue;
        }
    }
    
`