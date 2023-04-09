import styled from "styled-components";

export const ModalMsgArea = styled.div`
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    display: flex;
    align-items:center;
    flex-direction: column;
    z-index: 250;
    background-color: white;

    h1 {
        max-width:80%;
        font-size: 21px;
        font-weight: 300;
        color:#2c3e50;
        margin-top: 40px;
    }

    button {
        margin-top: 40px;
        border: none;
        height: 50px;
        width: 200px;
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

export const Section = styled.section`
    height: 100vh;
    width:100vw;
    position: relative;

    video {
        z-index: -1;
        width: 100vw;
        height: 100vh;
        position: absolute;
    }

    @media (min-aspect-ratio: 16/9) {
        video {
            width: 100%;
            height: auto;
        }
    }
    @media (max-aspect-ratio: 16/9) {
        video {
            width: auto;
            height: 100%;
        }
    }
`
export const MainContainerPage = styled.div`
    height: auto;
    max-width: 80%;
    margin:auto;
    display: flex;
    flex-direction: column;
    align-items:center;
    

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
`;

export const ArrowDown = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 27%;

    .arrow-down-home {
        font-size: 60px;
        color: white;
        text-decoration: none;
    }

    @media(max-width: 768px) {
        margin-top: 100%;
    }
    @media(max-width: 380px) {
        margin-top: 80%;
    }
`