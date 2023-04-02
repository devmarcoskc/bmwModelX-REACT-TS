import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 44px;
        font-weight: 300;
        margin-top: 15px;
        font-family: "DM Sans", sans-serif;
    }
    span {
        color: gray;
        font-weight: bold;
    }

    @media(max-width: 768px) {
        h1 {
            font-size: 30px;
            margin-bottom: 15px;
        }

        p {
            font-size: 16px;
        }
    }
`