import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #fff;
  }

  button {
    color: #fff;
    background-color: ${({ theme }) => theme.PALETTE.brandColor};
    border: none;
    cursor: pointer;
    padding: 5px 10px;
    font-size: ${({ theme }) => theme.FONT_SIZE.medium};
    border-radius: 5px;
  }

  ul > li {
    list-style: none;
  }
`;
export default GlobalStyles;
