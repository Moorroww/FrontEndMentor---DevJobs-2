import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


* {
  border: none;
  margin: 0;
  padding: 0;
  list-style-type: none;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  font-family: "Kumbh Sans", sans-serif;
}

html {
  font-size: 62.5%;
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.fontMain};
}

body, p {
  font-size: 1.6rem;
  line-height: 2.6rem;
}

a {
  color: inherit;
  text-decoration: none;
  font-weight: inherit;
}

h1 {
  font-size: 2.8rem;
  line-height: 3.4rem;
}

h2 {
  font-size: 2.4rem;
  line-height: 2.9rem;
}

h3 {
  font-size: 2rem;
  line-height: 2.4rem;
}

h4 {
  font-size: 1.4rem;
  line-height: 1.8rem;
}
  `;
