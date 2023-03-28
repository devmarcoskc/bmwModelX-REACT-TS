import styled from "styled-components";

export const Container = styled.footer`
    height: 85vh;
    width: 100%;
    margin-top: 50px;

    @media(max-width: 768px) {
        height: auto;
    }
`;

export const MidiaArea = styled.div`
    height: 25vh;
    width: 100%;
    background-color: #f2f2f2;
`;

export const MidiaContainer = styled.div`
    height: 100%;
    max-width: 80%;
    margin:auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    a {
        margin-left: 50px;
    }
    a svg{
        height: 30px;
        width: 30px;
        color: gray;
    }

    @media(max-width: 768px) {
        width: 100%;
        justify-content: space-between;

        a {
            margin-left: 10px;
        }
    }
`;

export const BMWInfosContainer = styled.div`
    height: 50vh;
    width: 100%;
    background-color: #f2f2f2;

    @media(max-width: 768px) {
        height: auto;
    }
`;

export const BMWInfos = styled.div`
    height: 100%;
    max-width: 80%;
    margin: auto;
    border-top: 1px solid gray;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @media(max-width: 768px) {
        height: 100%;
        grid-template-columns: repeat(1, 1fr);
        margin-bottom: 20px;
    }
`;

export const TitleAndText = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    span {
        color: black;
        font-size: 19px;
        margin-bottom: 30px;
    }
    p {
        font-weight: bold;
        color: grey;
        font-size: 14px;
    }
`;

export const FinalContainer = styled.div`
    flex:1;

    @media(max-width: 768px) {
        height: 10vh;
    }
`;

export const LastInfos = styled.div`
    max-width: 80%;
    height: 10vh;
    margin: auto;
    display: flex;
    align-items:center;
    justify-content: space-between;

    .policy-rules {
        height: 100%;
        width:auto;
        display: flex;
        align-items: center;
    }

    .policy-rules a {
        text-decoration: none;
        color: blue;
        font-size: 17px;
        margin-left: 20px;
    }

    @media(max-width: 768px) {
        width: 100%;
        
        p {
            display: none;
        }

        .policy-rules a {
            text-decoration: none;
            color: blue;
            font-size: 13px;
            margin-left: 5px;
        }
    }
`