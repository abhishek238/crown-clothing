import React from 'react';
import {auth} from '../../firebase/firebase.util';
import {connect} from "react-redux";

import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCurrentUser} from "../../redux/user/user.selector";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import {HeaderContainer, LogoContainer, OptionDiv, OptionLink, OptionsContainer} from "./header.styles";

const Header = ({currentUser, isHidden}) => (
    <HeaderContainer>
        <LogoContainer to={'/'}>
            <Logo className={"logo"}></Logo>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to={"/shop"}>Shop</OptionLink>
            <OptionLink to={"/shop"}>Contact</OptionLink>
            {
                currentUser ?
                    <OptionDiv onClick={() => auth.signOut()}>Sign Out</OptionDiv>
                    :
                    <OptionLink to={"/signin"}>Sign In</OptionLink>
            }

            <CartIcon/>
        </OptionsContainer>
        {!isHidden ? <CartDropdown/> : null}
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isHidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);