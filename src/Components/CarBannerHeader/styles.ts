import styled from "styled-components";

export const ResumContainer = styled.div`
    height: 80vh;
    width: 100%;
    background-position: center;
    background-size: cover;

    @media(max-width: 390px) {
        height: 90vh;
    }
`;
export const TitleaAndResum = styled.div`
    max-width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;

    h1 {
        color: white;
        margin-top: 80px;
        font-size: 40px;
        font-weight:400;
    }
    h2 {
        color:white;
        font-size: 25px;
        font-weight: 300;
    }

    @media(max-width: 768px) {
        margin-top: 100px;
    }

    @media(max-width: 380px) {
        margin-top: 0px;
    }
`;

export const PriceAndFabrication = styled.div`
    display: flex;
    font-size: 20px;
    width: 400px;
    margin-top: 120px;

    .status-div {
        display: flex;
        flex-direction: column;
        width: 50%;
            p {
                font-size: 17px;
                color: white;
            }
            span {
                font-size: 25px;
                color: white;
            }
    }

    @media(max-width: 768px) {
        flex-direction: column;
        margin-top: 100px;
        .status-div{
            p {
                margin-top: 10px;
            }
        }
    }
`;