import styled from "styled-components";

export const Container = styled.div`
    height: auto;
    max-width: 80%;
    margin:auto;

    h1 {
        margin-top: 50px;
        font-weight: 300;
    }
`;

export const GridContactArea = styled.div`
    display: grid;
    display: flex;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    width: 100%;
    margin-top: 30px;

    @media(max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        flex-direction: column;
        gap: 15px;
    }
`;

export const ContactItems = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    height: auto;
    width:23.5%;
    padding: 10px;

    h3 {
        font-size: 18px;
        font-weight: 300;
    }
    h4 {
        font-size: 14px;
        margin-top: 15px;
    }
    span {
        font-size: 15px;
        color: blue;
        font-weight: bold;
    }
    p {
        font-size: 15px;
        margin-top: 15px;
        max-width: 90%;
    }

    @media(max-width: 768px) {
       width: 100%;
    }
`;

export const WppContactArea = styled.div`
    height: auto;
    width: auto;
    display: flex;
    flex-direction: column;
    margin-top: 100px;

    h2 {
        font-size: 20px;
        font-weight: 300;
    }
    h3 {
        font-size: 16px;
    }
`