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
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 20vw;
    padding: 25px;
    display: flex;
    align-items: center;
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
export const OptionContainer = styled(Link)`
    padding: 10px 15px;
    font-size: 1.3em;
`;

export const LogoIconContainer = styled(Logo)`
    height: 200%;
`;

export const LogoNameContainer = styled.span`
    font-size: 1.2em;
    padding: 5px 10px;
    margin: auto 0;
    font-family: "Monoton", cursive;
    font-weight: bold;
    color: #808282;
`;
