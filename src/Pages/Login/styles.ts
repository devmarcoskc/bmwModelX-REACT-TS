import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
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
        margin-top: 60px;
    }

    h1 {
        font-weight: 300;
        font-size: 32px;
        color: #2c3e50;
        margin-top: 5px;
    }

    .login-container {
        display: flex;
        flex-direction: column;
        height: auto;
        width: 60%;
        
        p {
            margin-top:10px;
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
    }

`;

export const RightSide = styled.div`
    display: flex;
    height: 100vh;
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

    
`