import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    overflow: hidden;

    img {
        width: 100%;
        margin-top: 15px;
        cursor: pointer;
        transition: all ease 0.7s;

        &:hover {
            scale: 1.018;
        }
    }
`;

export const ContainerModal = styled.div`
    height: 100vh;
    width: 100vw;
    background-position: center;
    background-size: cover;
    position: fixed;
    z-index: 100;
    top:0;
    bottom:0;
    right:0;
    left:0;
    
    button {
        display: flex;
        position: fixed;
        align-items: center;
        justify-content: center;
        border: none;
        right:0;
        heigth: 80px;
        padding: 20px 20px;
        width: 80px;
        cursor: pointer;
        background-color: gray;
    }
`;

export const ModalTitleAndResum = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom:0;
    margin-bottom: 30px;
    margin-left: 50px;

    h1 {
        color: white;
        font-weight: 300;
    }
    p {
        color: white;
    }
`;

export const CloseMark = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 20px;
    width: 50px;
    background-color: gray;
`


