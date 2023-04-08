import styled from "styled-components";

export const ContainerSlider = styled.div`
    height: 100vh;
    width: 100%;
    overflow: hidden;
    position: fixed;
    z-index: 100;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    button {
        display: flex;
        position: absolute;
        align-items: center;
        justify-content: center;
        position: fixed;
        border: none;
        right:0;
        heigth: 80px;
        padding: 20px 20px;
        width: 80px;
        cursor: pointer;
        background-color: gray;
    }

    .dots-container {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 20%;
        margin-left: 20px
    }
    .dots-selectors {
        margin-bottom: 5px;
        cursor: pointer;
        font-size: 30px; 
        transition: all ease .4s;
        color:gray;

        &:hover {
            color:black;
        }
    }
    .dots-selectors-active {
        margin-bottom: 5px;
        cursor: pointer;
        font-size: 30px; 
        transition: all ease .4s;
        color:white;

        &:hover {
            color:black;
        }
    }
`;

export const slides = styled.div<{margin?:number}>`
    height: 700vh;
    transition: all ease 1s;
    width:100%;
    margin-top: ${(props) => {
        switch(props.margin) {
            case 0:
                return "0vh";
            case 1:
                return "-100vh";
            case 2:
                return "-200vh";
            case 3:
                return "-300vh";
            case 4:
                return "-400vh"; 
            case 5:
                return "-500vh";
            case 6:
                return "-600vh";  
        }
    }};
`

export const Slider = styled.div`
    display:flex;
    width:100vw;
    height:100vh;
    background-position: center;
    background-size: cover;

    @media(max-width: 768px) {
        background-position: -580px;
    }
`;

export const ModalTitleAndResum = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 30px;
    margin-left: 50px;

    h1 {
        color: white;
        font-weight: 300;
    }
    p {
        color: white;
    }

    @media(max-width:768px) {
        h1 {
            font-size: 22px;
        }
        p {
            max-width: 90%;
            font-size: 13px;
        }
    }
`;