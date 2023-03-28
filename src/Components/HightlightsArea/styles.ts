import styled from "styled-components";

export const container = styled.div`
    height: auto;
    width: 95%;
    margin: auto;
    display: flex;
    margin-bottom: 40px;

    .rec-arrow { 
        color:blue !important;

        &:hover {
            background-color: #999 !important;
        }
    }
    .rec.rec-arrow:disabled {
        visibility: hidden !important;
    }
    .rec-dot_active {
        background-color: blue !important;
    }

    @media(max-width: 768px) {
        width: 98%;
    }

`;

export const Slides = styled.div`
    width:100%;
    height: 450px;
    margin-right: 10px;
    background-position: center;
    background-size: cover;
    cursor: pointer;
    transition: all ease .7s;

    &:hover {
        scale: 1.02;
        overflow: hidden;
    }
`;

export const SlidesContainer = styled.div`
    height: 90%;
    width: 90%;
    margin:auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    h1 {
        font-size: 40px;
        color: white;
    }
    p {
        font-size: 25px;
        color: white;
    }

`