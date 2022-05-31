import { createGlobalStyle } from "styled-components";

/**
 * 전역 스타일 시트를 정의한 객체
 * @type {GlobalStyleComponent<{}, DefaultTheme>}
 */
const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'SUIT', sans-serif;
    }

    a{
        text-decoration: none;
        
    }

    ul, li {
        list-style: none;
    }
`;

export default GlobalStyles;