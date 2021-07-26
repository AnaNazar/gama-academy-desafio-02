import styled from 'styled-components';

export const Main = styled.main`
    min-height: calc(100vh - 40px - 120px - 40px);
    padding: 50px 0;
    display: flex;

    .container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 30px;

        .module-button {
            background: #057dcd;
            border-radius: 10px;
            width: 100%;
            max-width: 240px;
            padding: 30px;
            color: #ffffff;
            display: flex;
            flex-direction: column;
            align-items: center;
            transform: scale(1);
            transition: background linear 0.2s, transform linear 0.2s;
            
            &:hover {
                background: #43b0f1;
                transform: scale(1.05);
            }

            svg {
                width: 50px;
                height: 50px;
            }

            h2 {
                padding-top: 20px;
            }
        }
    }
`;
