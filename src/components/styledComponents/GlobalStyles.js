import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Raleway, sans-serif;
}

:root {
  --main-largest: 14vh;
  --main-medium: 5vh;
  --main-small: 1.7vh;
  --wp: ${(props) =>
    props.isDay
      ? "linear-gradient(180deg, #56CCF2, #2F80ED)"
      : "linear-gradient(#000428, #004e92)"};
  --bg-main: ${(props) => (props.isDay ? "#70a1ff" : "#000428")};
  --bg-sub: ${(props) => (props.isDay ? "#dff9fb" : "#100e1d")};
  --bg-btn: ${(props) => (props.isDay ? "#ffffff" : "#6e707a")};
  --tx-primary: ${(props) => (props.isDay ? "black" : "#e7e7eb")};
  --tx-secondary: ${(props) => (props.isDay ? "#535c68" : "#585676")};
}

`;

export default GlobalStyle;
