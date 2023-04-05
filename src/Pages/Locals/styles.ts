import styled from "styled-components";

export const Container = styled.div`
    height: auto;
    max-width: 80%;
    margin: auto;
    overflow: visible;

    margin-bottom: 30px;
`;

export const SearchLocalContainer = styled.div`
    height: auto;
    margin-top: 40px;
    display: flex;
    width: 100%;
    flex-direction: column;
    box-shadow: 0px 0px 5px #4169E1;

    h1 {
        font-size: 20px;
        font-weight: 300;
        color: gray;
        padding: 20px;
    }
`;

export const SearchInputsArea = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;

    h4 {
        font-size: 17px;
        font-weight: 300;
        color: gray;
    }

    select {
        margin-bottom: 20px;
        width: 60px;
        color: #4169E1;
        font-size: 17px;
    }

    .city-selected {
        select {
            width: 300px;
        }
    }

    @media(max-width: 768px) {
        select {
            margin-top: 10px;
        }
    }
`;

export const LocalItems = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-top: 1px solid gray;

    h6 {
        font-size: 14px;
        color: gray;
        margin-top: 10px;
    }
    p {
        font-size: 14px;
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 180px;
        margin-top: 10px;
        border-radius: 15px;
        text-decoration: none;
        color: white;
        background-color: #4169E1;
        transition: all ease .7s;

        &:hover {
            background-color: blue;
        }
    }
`;

export const Footer = styled.footer`
    height: 10vh;
    width: 100%;
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