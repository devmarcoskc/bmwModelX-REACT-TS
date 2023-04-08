import styled from "styled-components";

type Props = {
    arrowsNeedToHidde?: number;
    marginToLeft?: number;
}

export const container = styled.div`
    height: auto;
    max-width: 95%;
    margin: auto;
    display: flex;
    overflow: visible;
    margin-bottom: 40px;
    position: relative;

    @media(max-width: 768px) {
        width: 98%;
    }
`;

export const SlidersContainer = styled.div`
    height: auto;
    max-width: 95%;
    margin: auto;
    display: flex;
    overflow: hidden;
`
export const Arrowleft = styled.div<Props>`
    position: absolute;
    top: 40%;
    left: 5px;
    color: gray;
    cursor: pointer;
    border-radius: 10px;
    opacity: 1;
    z-index: 50;
    display: ${props => props.arrowsNeedToHidde === 0 ? 'none' : 'flex'};

    svg {
        height: 50px;
        width: 50px;
        background-color: white;
    }

    @media(max-width: 768px) {
        left: 0px;
    }
`;

export const RightArrow = styled.div<Props>`
    position: absolute;
    top: 40%;
    right: 7px;
    color: gray;
    cursor: pointer;
    opacity: 1;
    border-radius: 10px;
    z-index: 50;
    display: ${props => props.arrowsNeedToHidde === 2 ? 'none' : 'flex'};

    svg {
        height: 50px;
        width: 50px;
        background-color: white;
    }

    @media(max-width: 768px) {
        right:0px;
        display: ${props => props.arrowsNeedToHidde === 5 ? 'none' : 'flex'};
    }
`

export const Slider = styled.div<Props>`
    display: flex;
    width: 1600px;
    transition: all ease .8s;
    height: auto;
    margin-left: ${(props) => {
        switch(props.marginToLeft) {
            case 0:
                return "0px";
            case 1:
                return "-250px";
            case 2: 
                return "-355px";
        }
    }}
`

export const SliderMobile = styled.div<Props>`
    display: flex;
    width: 1600px;
    transition: all ease .8s;
    height: auto;
    margin-left: ${(props) => {
        switch(props.marginToLeft) {
            case 0:
                return "0px";
            case 1:
                return "-250px";
            case 2: 
                return "-515px";
            case 3: 
                return "-770px";
            case 4: 
                return "-1030px";
            case 5:
                return "-1250px";          
        }
    }}
`

export const Slides = styled.div`
    min-width: 250px;
    min-height: 450px;
    margin-right: 10px;
    background-position: center;
    background-size: cover;
    cursor: pointer;
    transition: all ease .7s;
    scale: 0.98;

    &:hover {
        scale: 1.00;
        overflow:hidden;
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