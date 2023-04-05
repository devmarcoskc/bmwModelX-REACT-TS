import styled from "styled-components";

export const InfoCarContainer = styled.div`
    heigth: auto;
    max-width: 80%;
    margin: auto;
    overflow: visible;

    span {
        margin-top: 10px;
        font-size: 18px;
        font-weight: bold;
        margin-top: 15px;
        font-family: "DM Sans", sans-serif;
    }
`;

export const GridDesignArea = styled.div`
    display: grid;
    margin-top: 20px;
    margin-bottom: 40px;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);

    @media(max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const LastImagesArea = styled.div`
    heigth: auto;
    width: 100%;
    display: flex;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media(max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;
