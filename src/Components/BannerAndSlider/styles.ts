import styled from "styled-components";

type Props = {
    currentSlide?: number;
    slideToShow?: number;
    arrowsNeedToHidde?: number;
    marginNeed?: boolean;
}
export const PageContainer = styled.div<Props>`
    position: relative;
    margin-bottom: 20px;
`

export const ContainerBG = styled.div`
    margin-top: 20px;
    height: 90vh;
    width: 100%;
    background-position: center;
    background-size: cover;
    position: relative;
    z-index:-1;

    @media(max-width: 768px) {
        height: 65vh;
    }
`;

export const Arrowleft = styled.div<Props>`
    position: absolute;
    top: ${props => props.marginNeed ? '2%' : '55%'};
    left: 7.5%;
    height: 450px;
    width: 70px;
    background: linear-gradient(to right,#fff,rgba(255,255,255,.001) 100%);
    cursor: pointer;
    opacity: 1;
    display: ${props => props.arrowsNeedToHidde === 0 ? 'none' : 'flex'};

    svg {
        height: 40px;
        width: 40px;
        color: gray;
        background-color: rgba(255,255,255,.8);
        margin-top: 100px;
        transition: all ease .5s;
        margin-left: 20px;

        &:hover {
            background-color: rgba(255,255,255,1);
        }
    }

    @media(max-width: 768px) {
        top: ${props => props.marginNeed ? '6.5%' : '53.5%'};
    }
`;
export const RightArrow = styled.div<Props>`
    position: absolute;
    top: ${props => props.marginNeed ? '2%' : '55%'};
    right: 7.5%;
    height: 450px;
    width: 70px;
    background: linear-gradient(to left,#fff,rgba(255,255,255,.001) 100%);
    cursor: pointer;
    opacity: 1;
    display: ${props => props.arrowsNeedToHidde === 2 ? 'none' : 'flex'};
    

    svg {
        height: 40px;
        width: 40px;
        color: gray;
        background-color: rgba(255,255,255,.8);
        margin-top: 100px;
        transition: all ease .5s;

        &:hover {
            background-color: rgba(255,255,255,1);
        }

    }

    @media(max-width: 768px) {
        top: ${props => props.marginNeed ? '6.5%' : '53.5%'};
        display: ${props => props.arrowsNeedToHidde === 4 ? 'none' : 'flex'};
    }
`

export const SliderArea = styled.div<Props>`
    max-width: 85%;
    overflow: hidden;
    height: auto;
    margin-left: 7.5%;
    margin-right: 7.5%;
    margin-top: ${props => props.marginNeed ? '20px' : '-60px'};
    z-index: 60;
`;

export const Slider = styled.div<Props>`
    display: flex;
    width: 1800px;
    height: auto;
    background-color: white;
    transition: all ease 1s;
    margin-left: ${(props) => {
        switch(props.currentSlide) {
            case 0:
                return "0px";
            case 1:
                return "-330px";
            case 2: 
                return "-515px";
        }
    }}
`;

export const SliderMobile = styled.div<Props>`
    display: flex;
    width: 1500px;
    height: auto;
    background-color: white;
    transition: all ease 1s;
    margin-left: ${(props) => {
        switch(props.slideToShow) {
            case 0:
                return "0px";
            case 1:
                return "-300px";
            case 2: 
                return "-600px";
            case 3: 
                return "-900px";
            case 4: 
                return "-1155px";          
        }
    }}
`;

export const Slide = styled.div`
    display: flex;
    flex-direction: column;
    width: 330px;
    height: auto;
    background-color: white;
    padding: 15px 0px 15px 15px; 

    img {
        width: 100%;
        height: 200px;
    }

    h4 {
        font-size: 19px;
        font-weight: 300;
        padding: 15px;
    }
    p {
        font-size: 13px;
        padding: 0 15px;
    }

    @media(max-width: 768px) {
        width: 300px;

        h4 {
            font-size: 18px;
        }
    }
`