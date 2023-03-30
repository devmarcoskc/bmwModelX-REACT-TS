import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    width: 100%;


    form {
        display: flex;
        flex-direction: column;
        padding: 20px;
        height: 100%;
        max-width: 80%;
        margin: auto;
        box-shadow: 0px 0px 5px #4169E1;
        margin-bottom: 30px;
        margin-top: 20px;

        h1 {
            font-size: 27px;
            font-weight: 300;
            color: gray;
            margin-top: 30px;
        }
    }
 
    p {
        font-size: 17px;
        margin-top: 20px;
        font-weight: bold;
        color: gray;
    }

    .title-and-input {
        display: flex;
    }

    input {
        height: 40px;
        width: 200px;
        color: blue;
        padding: 10px;
        margin-top: 10px;
        border: 0.5px solid gray;
        outline: 0;

        &:focus {
            border: 0.5px solid blue;
            box-shadow: 0px 5px 5px 0px #4169E1;
        }
    }
    .input-large {
        width: 300px;
    }
    .input-and-error {
        display: flex;
        flex-direction: column;
    }
    .error-condition {
        color: red;
        font-size: 13px;
    }
    textarea {
        width: 70%;
        height: 150px;
        padding: 5px;
        margin-top: 10px;
        border: 0.5px solid gray;
        outline: 0;

        &:focus {
            border: 0.5px solid blue;
            box-shadow: 0px 5px 5px 0px #4169E1;
        }   
    }
    .cep-input {
        margin-top: 1px;
        font-size: 13px;
    }
    select {
        height: 40px;
        width: 60px;
        margin-top: 10px;
        color:blue;
    }
    .city-select {
        width: 180px;
        margin-left: 15px;
    }

    button {
        width: 150px;
        height: 50px;
        background-color: #4169E1;
        border: none;
        font-size: 18px;
        color: white;
        border-radius: 10px;
        margin-top: 20px;
        margin-bottom: 30px;
        transition: all ease .7s;
        cursor: pointer;

        &:hover {
            background-color: blue;
        }
    }

    .returnArea {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 30px;
        width: 150px;
        height: 50px;
        background-color: #4169E1;
        border: none;
        font-size: 18px;
        color: white;
        border-radius: 10px;
        margin-top: 20px;
        margin-bottom: 30px;
        transition: all ease .7s;
        cursor: pointer;

        &:hover {
            background-color: blue;
        }
    }
`;

export const FormFlexRow = styled.div`
    display: flex;

    @media(max-width: 768px) {
        flex-direction: column;
    }
`;

export const PersonalInfos = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    @media(max-width: 768px) {
        width: 100%;
    }
`;

export const LocalInfos = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    @media(max-width: 768px) {
        width: 100%;
    }
`;

export const FinishedContainer = styled.div`
    height: 100%;
    max-width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    
    h1 {
        margin-top: 40px;
        font-size: 23px;
        font-weight: 300;
    }
    a {
        padding: 10px;
        width: 200px;
        background-color: #4169E1;
        border-radius: 10px;
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: white;
        transition: all ease .7s;

        &:hover {
            background-color: blue;
        }
    }
`


