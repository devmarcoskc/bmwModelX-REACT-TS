import styled from "styled-components";

export const Container = styled.div`
    max-width: 80%;
    margin: auto;
    margin-top: 30px;
    height: auto;
`;

export const ContactGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    display: flex;
    justify-content: space-bewteen;
    margin-top: 50px;

    a {
    width:30%;
    height: 100px;
    background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    margin-right:5%;
    transition: all ease .7s;

        &:hover {
            background-color: gray;
        }

        svg {
            height: 40px;
            width: 40px;
            color: #666;
        }
        h1 {
            font-size: 17px;
            color: #666;
        }
    }

    a:last-child {
        margin-right: 0px;
    }

    @media(max-width: 768px) {
        flex-direction: column;

        a {
            width: 100%;
            margin-top: 10px;
        }
    }
`;
