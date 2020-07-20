import styled from "styled-components";

export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 80px;

    @media screen and (max-width:1000px){
        padding: 30px;
    }
    @media screen and (max-width:560px){
        padding:10px
    }
`;
