import { createGlobalStyle  } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap');

  :root {
    /* Colors */
    --dark: #2F2E41;
    --light: #F1F1F1;
    --primary: #009EDD;
    --primaryDark: #1450A3;
    --success: #039B00;
    --successDark: #1A5D1A;
    --textPrimary: #333333;
    --textSecondary: #999999;
    --borderGrey: #D9D9D9;
    /* FontSizes */
    --text-xs: 0.9em;
    --text-sm: 1em;
    --text-base: 1.25em;
    --text-md: 1.4em;
    --text-lg: 1.65em;
    --text-xl: 1.8em;
  }

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif;
  }

  body {
    background-color: var(--dark);
    color: var(--light);
    min-height: 100vh;
  }
`;