import styled from "styled-components";

export const DeisgnTextContainer = styled.div`
    height: auto;
    max-width: 80%;
    margin:auto;
    display: flex;
    flex-direction: column;
`;

export const DesignIMGArea = styled.div`
    height: 90vh;
    width: 100vw;
    background-position: center;
    background-size: cover;
    margin-top: 20px;
`;

export const HighlightsDesign = styled.div`
    max-width: 90%;
    margin: auto;
    margin-top: -60px;
    z-index: 60;
    margin-bottom: 60px;

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
        background-color: blue;
    }
    
    .design-and-text {
        width: auto;
        height: auto;
        display: flex;
        flex-direction: column;
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
    }

    @media(max-width: 768px) {
        .design-and-text {
            padding 10px;
        }
    }
`;

export const TechnologyContainer = styled.div`
    height: auto;
    max-width: 80%;
    margin: auto;
    margin-bottom: 30px;
`;

export const TechnologySlider = styled.div`
    height: auto;
    max-width: 90%;
    margin: auto;
    margin-bottom: 60px;

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
        background-color: blue;
    }

    .techArea {
        width: auto;
        height: auto;
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: 15px 0px 15px 15px; 

        img {
            width: 100%;
            height: 200px;
        }

        h4 {
            font-size: 18px;
            font-weight: 300;
            padding: 15px;
        }
        p {
            font-size: 13px;
            padding: 0 15px;
        }
    }
`