import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: #e8eef1;
    }

    body, input, button {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: normal;
        color: #333333;
    }

    a {
        text-decoration: none;
    }

    button {
        border: none;
        border-radius: 5px;
        font-size: 14px;
        color: #ffffff;
        padding: 10px 20px;
        cursor: pointer;
        
        &.primary {
            background: #057dcd;
            
            &:hover {
                background: #43b0f1;
            }
        }

        &.delete {
            background: #ff382e;
            
            &:hover {
                background: #ff6961;
            }
        }
    }

    .container {
        width: 100%;
        max-width: 1140px;
        margin: auto;
        padding: 0 30px;
    }
`;
