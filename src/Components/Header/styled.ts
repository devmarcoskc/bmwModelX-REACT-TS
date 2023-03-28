import styled from "styled-components";

export const Header = styled.header<{position:boolean}>`
    height: 13vh;
    position: ${props => props.position ? 'fixed' : 'static'};
    top:0;
    width:100%;
    z-index: 30;
`;

export const Container = styled.div<{borderBottomIsNeeded:boolean}>`
    height: 100%;
    max-width: 80%;
    margin: auto;
    display: flex;
    border-bottom: ${props => props.borderBottomIsNeeded ? '0.5px solid #666' : 'none'};
    align-items: center;
    justify-content: space-between;
`
export const ImgLogoArea = styled.div`
    display: flex;
    align-items:center;
    height: 70px;
    width: 70px;

    img {
        display:block;
        height: 60px;
        width: 60px;
    }

    @media (max-width: 768px) {
        img {
            height: 50px;
            width: 50px;
        }
    }
`;

export const NavsArea = styled.div<{colorChange:boolean}>`
    display: flex;
    height: 100%;
    align-items:center;
    
    a {
        color: ${props => props.colorChange ? '#666' : 'white'};
        font-size:17px;
        font-weight: bold;
        text-decoration:none;
        padding-left: 20px;
        transition: all ease .7s;

        &:hover {
            color: blue;
        }
    }
    a:first-child {
        padding-left: 0px;
    }
`;

export const MobileNavIcon = styled.div<{display:boolean}>`
    svg {
    display: ${props => props.display ? 'none':'flex'};
    height: 25px;
    width: 25px;
    color: white;
    cursor: pointer;
    }
`;

export const NavMenuSideBar = styled.div`
    height: 100vh;
    position: fixed;
    top:0;
    right: 0;
    width:70vw;
    background-color:gray;
    opacity: 0.98;
`;
export const SideBarContainer = styled.div`
    display: flex;
    max-width: 90%
    margin: auto;
    flex-direction: column;
    align-items:center;
    margin-top: 20px;

    svg {
        cursor: pointer;
        height: 30px;
        width: 30px;
        color: white;
    }

    a {
        padding-top: 15px;
        text-decoration: none;
        font-size: 20px;
        color: white;
        cursor: pointer;
        font-weight: bold;
    }
`