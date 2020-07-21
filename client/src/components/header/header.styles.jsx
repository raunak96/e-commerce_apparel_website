import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg"; //special syntax for importing svg img in React

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;

    @media screen and (max-width:800px){
        height: 60px;
        padding:10px;
        margin-bottom:20px;
    }
    @media screen and (max-width:560px){
        flex-direction:column;
        justify-content:space-between;
        align-items: center;
        height:auto;
        position:relative;

    }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 40vw;
    padding: 25px;
    display: flex;
    align-items: center;

    @media screen and (max-width:1000px){
        padding:0;
    }
    @media screen and (max-width:560px){
        width: 100vw;
        align-items:unset;
        justify-content:center;
    }
`;

export const OptionsContainer = styled.div`
    width: 60vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;


    @media screen and (max-width:560px){
        width: 100vw;
        flex-direction:column;
        justify-content:space-between;
    }
`;
export const OptionContainer = styled(Link)`
    padding: 10px 15px;
    font-size: 1.3em;
`;

export const LogoIconContainer = styled(Logo)`
    height: 50px;
    width: auto;
    @media screen and (max-width:1000px){
        height:40px;
    }
    @media screen and (max-width:560px){
        height:30px;
    }
`;

export const LogoNameContainer = styled.span`
    font-size: 1.2em;
    padding: 5px 10px;
    margin: auto 0;
    font-family: "Monoton", cursive;
    font-weight: bold;
    color: #808282;
`;
