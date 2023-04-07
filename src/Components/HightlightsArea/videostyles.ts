import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    z-index: 120;
    overflow: hidden;

    video {
        height:100%;
        width: 100%;
    }
    video::-internal-media-controls-download-button {
        display:none;
    }
    
    video::-webkit-media-controls-enclosure {
        overflow:hidden;
    }
    
    video::-webkit-media-controls-panel {
        width: calc(100% + 30px); 
    }

    button {
        position: absolute;
        top:0;
        right:0;
        height: 50px;
        width: 70px;
        background-color: gray;
        cursor: pointer;
        border: none;
        color: black;
    }

`