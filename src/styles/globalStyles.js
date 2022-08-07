import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background: #111;
        margin: 0;
        padding: 0;

        --presence-online: #4fff4f;
        --presence-idle: yellow;
        --presence-dnd: red;
        --presence-offline: white;
    }
`;

export default GlobalStyle;
