import NavHeader from "../NavHeader";
import Logo from "../Logo";
import ResponsiveMenu from "../ResponsiveMenu";
import styled from "styled-components";

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    position: fixed;
    justify-content: space-between;
    background-color: #1f1f1f;
    width: 100vw;
    height: 80px;
    z-index: 999;

    @media screen and (max-width: 420px) {
        padding: 0;
    }
`;

function Header() {
    return(
        <HeaderContainer>
            <Logo/>
            <NavHeader/>
            <ResponsiveMenu/>
        </HeaderContainer>
    )
}

export default Header;