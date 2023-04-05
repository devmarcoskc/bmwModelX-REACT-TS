import styled from "styled-components";

export const ResumArea = styled.div `
    max-width: 80%;
    margin: auto;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;

    p {
        margin-top: 20px;
    }
    h1 {
        font-size: 45px;
        color: black;
        font-weight: 300;
        margin-top: 20px;
    }
    .highlights-manual {
        font-weight: bold;
        margin-top:0px !important;
    }

    @media(max-width: 768px) {
        h1 {
            font-size: 30px;
        }
    }
`