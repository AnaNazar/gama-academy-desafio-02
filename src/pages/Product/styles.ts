import styled from 'styled-components';

export const Main = styled.main`
    min-height: calc(100vh - 40px - 120px - 40px);
    padding: 50px 0;

    .actions {
        display: flex;
        justify-content: flex-end;
        padding: 0 0 30px;
    }
`;

export const ProductItem = styled.div`
    background: rgba(255, 255, 255, 0.35);
    border: solid 1px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    
    @media screen and (max-width: 768px) {
        flex-direction: column;
    } 

    .image {
        background: #ffffff;
        padding: 15px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;

        @media screen and (max-width: 768px) {
            height: 300px;
            border-radius: 10px 10px 0 0;
        }

        @media screen and (min-width: 769px) {
            width: 300px;
            border-radius: 10px 0 0 10px;
        }

        img {
            @media screen and (max-width: 768px) {
                height: 100%;
            }

            @media screen and (min-width: 769px) {
                width: 100%;
            }
        }
    }

    .content {
        width: 100%;
        padding: 30px 30px 0;

        h3 {
            color: #1f3541;
        }

        .resumo {
            padding: 15px 0;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            gap: 10px 30px;
            
            @media screen and (min-width: 600px) {
                flex-direction: row;
            }

            span {
                padding-left: 3px;
            }
        }

        .actions {
            padding: 30px 0;
        }
    }
`;
