import React from "react";
import "./header.styles.scss";
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import {createStructuredSelector} from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { HeaderContainer, LogoContainer, OptionsContainer, OptionContainer, LogoIconContainer,LogoNameContainer } from "./header.styles";
import { signOutStart } from "../../redux/user/user.actions";

const Header = ({currentUser,cart_hidden,signOutStart}) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <LogoIconContainer/>
            <LogoNameContainer className="logo-name">RAWN'S APPARELS</LogoNameContainer>
        </LogoContainer>
        <OptionsContainer>
            <OptionContainer to="/shop">SHOP</OptionContainer>
            <OptionContainer to="/shop">CONTACT</OptionContainer>
            {
                currentUser ? <OptionContainer to="/" onClick={e=>{e.preventDefault();signOutStart()}}>SIGN OUT</OptionContainer> : 
                    <OptionContainer to="/signin">SIGN IN</OptionContainer>
            }
            <CartIcon/>
        </OptionsContainer>
        {
            cart_hidden?null:<CartDropDown />
        }
    </HeaderContainer>
);

  //params - destructuring state to get currentUser option out of user in state, similarly for cart
const mapStateToProps = createStructuredSelector({    //this state is the root reducer
    currentUser : selectCurrentUser,
    cart_hidden : selectCartHidden
});

const mapDispatchToProps = dispatch=> ({
    signOutStart:()=>dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);