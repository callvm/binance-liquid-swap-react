import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
  }

  @-webkit-keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
  }

  @keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
  }


  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textColor};
    transition: background-color 0.4s;
  }
  h1, h3, h4, th, td, .info-table tr, .info-table td, .info-table thead, .info-table tbody, th, .coin-total, .last-checked{
    color: ${({ theme }) => theme.textColor};
  }
  .color-div-blue {
    background-image: ${({ theme }) => theme.colorDiv};
  }
  .custom-card{
    border: ${({ theme }) => theme.border};
    background-color: ${({ theme }) => theme.componentBackground};
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
  }
  .custom-card:hover{
    border: ${({ theme }) => theme.borderHover};
  }
  .chart-inner-div{
    border: ${({ theme }) => theme.border};
    background-color: ${({ theme }) => theme.componentBackground};
  }
  .chart-inner-div:hover{
    border: ${({ theme }) => theme.borderHover};
  }
  .table-div{
    border: ${({ theme }) => theme.border};
    background-color: ${({ theme }) => theme.componentBackground};
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
  }
  
  ` 