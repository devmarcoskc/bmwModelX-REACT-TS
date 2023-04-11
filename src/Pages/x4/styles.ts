import styled from "styled-components";

export const Container80PctWidth = styled.div`
    height: auto;
    max-width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    overflow: visible;

    #resum {
        margin-top: 20px;
    }
    h1 {
        font-size: 44px;
        font-weight: 300;
        margin-top: 15px;
        font-family: "DM Sans", sans-serif;
    }

    video {
        margin-top: 30px;
        width: 800px;
        margin-bottom: 60px;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 25px;
            margin-top: 30px;
        }
        video {
            width: 100%;
        }
        p {
            margin-top: 14px;
        }
    }

`;

export const ImageAndText = styled.div`
    display: flex;
    width: 100%;
    height: 330px;
    margin-top: 20px;

    @media(max-width: 768px) {
        flex-direction: column;
        height: auto;
    }

    .left-side {
        width: 50%;
        height: 100%;

        @media(max-width: 768px) {
            width: 100%;
        }

        h1 {
            font-size: 30px;
            font-weight: 300;
            font-family: "DM Sans", sans-serif;

            @media(max-width: 768px) {
                font-size: 22px;
            }
        }
        p {
            font-size: 14px;
            max-width: 95%;
        }

        img {
            width:100%;
            height: auto;

            @media(max-width: 768px) {
                margin-top: 15px;
            }
        }
    }
    .right-side {
        flex: 1;

        h1 {
            font-size: 30px;
            font-weight: 300;
            font-family: "DM Sans", sans-serif;

            @media(max-width: 768px) {
                font-size: 22px;
            }
        }

        p {
            font-size: 14px;
        }

        img {
            width:100%;
            height: auto;

            @media(max-width: 768px) {
                margin-top: 15px;
            }
        }

        @media(max-width: 768px) {
            margin-left: 0px !important;
        }
    }
`;
export const InteriorDesignIMG = styled.div`
    height: 90vh;
    width: 100%;
    background-position: center;
    background-size: cover;
    z-index: 1;
    position: relative;

    @media(max-width: 768px) {
        height: 50vh;
    }
`
export const InteriorDesignArea = styled.div`
    height: auto;
    display: flex;
    width: 100%;
    display: grid;
    margin-top: -60px;
    grid-template-columns: repeat(3, 1fr);
    z-index: 50;

    .IMGinterior-and-text {
        width: 360px;
        height: 440px;
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: 15px 0px 15px 15px;

        img {
            width: 100%;
            height: 200px;
        }

        h4 {
            font-size: 20px;
            font-weight: 300;
            margin-top: 10px;
        }
        p {
            font-size: 14px;
            margin-top: 10px;
        }
    }
`;

export const MobileDesignArea = styled.div`
    display: flex;
    margin-top: -60px;

    .rec-arrow { 
        color:blue !important;

        &:hover {
            background-color: #999;
        }
    }
    .rec.rec-arrow:disabled {
        visibility: hidden !important;
    }
    .rec-dot_active {
        background-color: blue;
    }
    .rec-arrow {
        font-size: 1.1rem !important;
        color: blue !important;
        width: 1.7rem !important;
        height: 1.7rem !important;
        min-width: 1.7rem !important;
        line-height: 1.7rem !important;
    }

    .IMGinterior-and-text-mobile {
        width: 350px;
        height: auto;
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: 10px;
        z-index: 50;

        img {
            width: 100%;
            height: 170px;
        }

        h4 {
            font-size: 17px;
            font-weight: 300;
            margin-top: 10px;
        }
        p {
            font-size: 13px;
            margin-top: 10px;
        }
    }

`;

export const ServicesContainer = styled.div`
    height: auto;
    width: 90%;
    margin:auto;
    margin-bottom: 80px;

    .rec-arrow { 
        color:blue !important;

        &:hover {
            background-color: #999;
        }
    }
    .rec.rec-arrow:disabled {
        visibility: hidden !important;
    }
    .rec-dot_active {
        background-color: blue;
    }

    @media(max-width: 768px) {
        .rec-arrow {
            font-size: 1.1rem !important;
            color: blue !important;
            width: 1.7rem !important;
            height: 1.7rem !important;
            min-width: 1.7rem !important;
            line-height: 1.7rem !important;
        }
    }
`;

export const ServicesAssistantArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: auto;
    margin-top: 40px;
    margin-right: 10px;
    
    img {
        width: 100%;
        height: 200px;
    }

    h4 {
        font-size: 21px;
        font-weight: 300;
        max-width:80%;
        margin-top: 10px;
    }
    p {
        font-size: 13px;
        margin-top: 10px;
        max-width:80%;
    }

    @media(max-width: 768px) {
        img {
            height: 165px;
        }
    }
`;

export const SliderIMGS = styled.div`
    height: 80vh;
    width: 100%;
    margin-bottom: 80px;
    overflow: hidden;
    position: relative;
    margin-top: 100px;

    .left-arrow-slider {
        position: absolute;
        top: 30%;
        left: 32px;
        color: white;
        z-index: 20;
        font-size: 55px;
        background-color: gray;
        cursor: pointer;
        opacity: 0.8;
        transition: all ease .5s;

        svg {
            height: 40px;
            width: 40px;
        }

        &:hover {
            opacity: 1;
        }
    }
    .right-arrow-slider {
        position: absolute;
        top: 30%;
        right: 32px;
        font-size: 55px;
        color: white;
        z-index: 20;
        background-color: gray;
        cursor: pointer;
        opacity: 0.8;
        transition: all ease .5s;

        svg {
            height: 40px;
            width: 40px;
        }

        &:hover {
            opacity: 1;
        }
    }

    @media(max-width: 768px) {
        height: 80vh;
    }
`;

export const Slider = styled.div<{margin?:number}>`
    display: flex;
    height: 100%;
    width: 400vw;
    margin-left: ${(props) => {
        switch(props.margin) {
            case 0:
                return "0vh";
            case 1:
                return "-100vw";
            case 2:
                return "-200vw";
            case 3:
                return "-300vw";          
        }
    }};
    position: relative;
    transition: all ease 1s;   
    
   
`;

export const ItemSlider = styled.div`
    height: 100%;
    width:100%;
    background-size: cover;
    background-position: center;
`;
