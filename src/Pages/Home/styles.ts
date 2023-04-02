import styled from "styled-components";

export const Section = styled.section`
    height: 100vh;
    width:100vw;
    background-position: center;
    background-size: cover;
`
export const MainContainerPage = styled.div`
    height: auto;
    max-width: 80%;
    margin:auto;
    display: flex;
    justify-content: center;

    @media(max-width: 768px) {
        margin-top: 80px;
    }
`;

export const CarInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    height: 100px;
    width: 230px;
    margin-top: 140px;
    z-index: 1;

    h1 {
        color: white;
    }

    a {
        display:flex;
        align-items:center;
        justify-content: center;
        height: 50px;
        width: 100%;
        font-size: 20px;
        text-decoration: none;
        border-radius: 10px;
        background-color:gray;
        color: white;
        opacity: 0.85;
        cursor: pointer;
        transition: all ease 1s;

        &:hover{
            color: blue;
            scale: 1.02;
        }
    }

`