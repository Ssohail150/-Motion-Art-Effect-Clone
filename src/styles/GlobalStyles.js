import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600&family=Outfit:wght@400;600&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Sora', 'Outfit', sans-serif;
    background-color: rgba(0, 0, 0, 0.8); /* Adjusted for better visibility */
    overflow-x: hidden; /* Prevent horizontal scrolling */
  }



  header,
  footer {
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8); /* Adjusted for better visibility */
    z-index: 1000;
  }

  footer {
    bottom: 0;
    background: linear-gradient(90deg, #F87516 0%, #5E11FF 100%);
  }

  /* Add additional styles for your header and footer as needed */

  @media (max-width: 768px) {
    header, footer {
      padding: 10px 20px;
    }

    .App-header {
      font-size: calc(8px + 2vmin);
    }
  }
`;

export default GlobalStyles;
