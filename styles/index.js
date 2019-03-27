import styled from "styled-components";

export const Main = styled.div`
    display: grid;
    height: 100vh;
    width: 100vw;
    grid-template-columns: 10% 20% 40% 20% 10%;
    grid-template-rows: 15% 75% 10%;
`;

export const HeaderWrapper = styled.div`
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    justify-self: center;
`;
